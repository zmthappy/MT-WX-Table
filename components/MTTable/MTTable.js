Component({
	options: {
		multipleSlots: true, // 在组件定义时的选项中启用多slot支持.
		styleIsolation: "apply-shared",//父组件的样式会影响组件内样式
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		/**
		 * 当前存在选中框时选择框的字段
		 */
		chioceKeys: {
			type: String,
			value: "checked"
		},
		/**
		 * 对齐方式 left center right
		 * */
		align: {
			type: String,
			value: 'left',
			observer: function (newVal, oldVal) {
				let _align = "flex-start";
				switch (newVal) {
					case "left":
						_align = "flex-start";
						break;
					case "center":
						_align = "center";
						break;
					case "right":
						_align = "flex-end";
						break
				};
				this.setData({
					_align
				})
			}
		},
		/**
		 * 指定表格最大高度
		 */
		maxHeight: {
			type: String,
			value: '20'
		},
		/***
		 * 固定高度
		 */
		height: {
			type: String,
			value: ''
		},
		/**
		 * 是否固定左边标题
		 */
		left: {
			type: Boolean,
			value: false
		},
		/**
		 * 斑马纹
		 */
		stripe: {
			type: Boolean,
			value: true
		},
		/**
		 * 是否边框
		 */
		border: {
			type: Boolean,
			value: false
		},
		/**
		 * 表头背景色
		 */
		headbgColor: {
			type: String,
			value: '#f7f8fa'
		},
		/**
		 * 操作文本 不传不显示
		 */
		opText: {
			type: String,
			value: '暂无数据'
		},
		/**
		 * 表头与表体的配置信息
		 */
		configurator: {
			type: Array,
			value: [],
			observer: function (newVal, oldVal) {
				let totalWidth = 0;
				for (const item of newVal) {
					totalWidth += item.width ? Number(item.width.slice(0, item.width.indexOf("r"))) / 2 : 80;
					item.widthNotRpx = item.width ? (Number(item.width.slice(0, item.width.indexOf("r"))) / 2) + 'px' : '';//将对应的宽度的rpx转化为px
				};
				// 重置当前固定列的位置config数组
				let config = []
				config = this.setFiexdColumnLoaction();
				this.setData({
					totalWidth: totalWidth,
					config,
				});
			}
		},
		/**
		 * 表体数据
		 */
		tableData: {
			type: Array,
			value: [],
			observer: function (newVal, oldVal) {
				let checkedAll = true;//所有选择框都选择
				let hasChcked = false;//存在未选中的选择框
				for (const tableItem of newVal) {
					if (tableItem[this.data.chioceKeys]) {
						hasChcked = true;
					}
					if (!tableItem[this.data.chioceKeys]) {
						checkedAll = false;
					}
				};
				this.setData({
					checkedAll,
					hasChcked,
				})
			}
		},
		/**
		 * 文字过长省略
		 */
		showOverflowTooltip: {
			type: Boolean,
			value: false,
		}
	},

	/**
	 * 外部样式修改
	 */
	externalClasses: [],

	/**
	 * 组件的初始数据
	 */
	data: {
		// 当前单元格汇总的宽度
		totalWidth: 0,
		// 单元格内项目位置
		_align: "flex-start",
		// 判断是否勾选了所有的选择
		checkedAll: false,
		hasChcked: false,
		// 当前渲染的高度已经超过给定高度
		overHeight: false,
		// 表头表体配置信息
		config: [],
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		/**
		 * 获取当前行数据
		 * @param {event} event 
		 */
		_rowClick(event) {
			//当前行数据
			const { item } = event.currentTarget.dataset;
			this.triggerEvent('rowClick', item);
		},

		/**
		 * 选择所有数据
		 */
		_chioceAll() {
			let { tableData, chioceKeys } = this.data;
			// 勾选全部
			if (this.data.checkedAll) {
				for (const tableItem of tableData) {
					tableItem[chioceKeys] = false;
				}
			} else {
				// 取消勾选全部
				for (const tableItem of tableData) {
					tableItem[chioceKeys] = true;
				}
			};
			this.triggerEvent("changeChoice", tableData)
		},
		// promise---调整异步为同步(clasName:包裹表体或者表头的类名)
		transformToPromise(clasName, attribute) {
			const _that = this;
			const query = wx.createSelectorQuery().in(_that)
			return new Promise((resolve, reject) => {
				query.select(clasName).boundingClientRect(react => {
					resolve(react[attribute])
				}).exec();
			})
		},
		// 如果当前的列配置了Fixed=true时，将排序顺序前移(left="左移";right="右移")
		setFiexdColumnLoaction() {
			const _that = this;
			let configArray = _that.data.configurator;
			let configResetArray = [];
			for (const itemValue of configArray) {
				let index = configArray.findIndex(t => t.prop == itemValue.prop);
				if (itemValue?.fiexed) {
					let setFixedLoaction = configResetArray.length;
					for (const resetItem of configResetArray) {
						if (!resetItem?.fiexed) {
							setFixedLoaction = configArray.findIndex(t => t.prop == resetItem.prop);
							break;
						};
					};
					configResetArray.splice(setFixedLoaction, 0, itemValue);
				} else {
					itemValue.fiexed = false;
					itemValue.fiexdOrder = index + 1;
					configResetArray.push(itemValue)
				};
			};
			return configResetArray;
		},
		// 计算当前配置信息的固定列开始初始偏移位置
		async setColumnFixedMovewidth(configResetArray) {
			const _that = this;
			for (const item of configResetArray) {
				let index = configResetArray.findIndex(t => t.prop == item.prop);
				if (item?.fiexed) {
					if (item?.fiexedPosition) {
						item.fiexedPosition = 'left';
					};
					if (index == 0) {
						item.left = 0;
					} else {
						item.left = 0;
						if (index != -1) {
							// 无论是否配置宽度按都需要计算一下，固定列的
							for (let i = 0; i <= index; i++) {
								if (i == index) {
									break;
								};
								item.left += (await _that.transformToPromise('.mt-header-column' + i, 'width'));
							};
						};
					}
				};
			}
			_that.setData({
				config: configResetArray
			});
		},
	},
	/**
	 * 监听器
	 */
	observers: {
	},
	/**
	 * 生命周期
	 */
	lifetimes: {
		attached: function () {
			console.log("在组件实例进入页面节点树时执行");
		},
		detached: function () {
			console.log("在组件实例被从页面节点树移除时执行");
		},
		ready: async function () {
			console.log("页面元素已经布局完成");
			let tableContainerHeight = 0;
			tableContainerHeight += await this.transformToPromise('.mt-header', 'height');
			tableContainerHeight += await this.transformToPromise('.mt-table-tr-container', 'height');
			// 获取父容器的宽度按
			let tableFatherContainer = await this.transformToPromise('.mt-table-scroll', 'width');
			// 如果当前父容器的宽度大于内部元素的宽度，将对应的某列的width设置为空--解决rpx在不同机型转化后父元素内无法完全包裹
			if (this.data.totalWidth < tableFatherContainer) {
				let config = JSON.parse(JSON.stringify(this.data.config));
				for (let i = 0; i < config.length; i++) {
					if (!config[i].width) {
						break;
					}
					if (i == config.length - 1) {
						config[i].width = ""
						config[i].widthNotRpx = ""
						this.setData({
							config
						})
					}
				}
			}
			// 解决表格下边框重叠的问题
			let overHeight = this.data.overHeight;
			if (tableContainerHeight > Number(this.data.height)) {
				overHeight = true;
			} else {
				overHeight = false;
			};
			this.setData({
				overHeight,
			});
			// 计算配置表格信息的是否固定
			await this.setColumnFixedMovewidth(this.data.config);
		}
	},

	/**
	 * 声明周期函数
	 */
	pageLifetimes: {
		show: function () {

		},
		hide: function () {
			// 页面被隐藏
		},
		resize: function (size) {
			// 页面尺寸变化
		}
	}
})