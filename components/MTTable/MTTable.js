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
		chioceKeys:{
			type:String,
			value:"checked"
		},
    /**
     * 对齐方式 left center right
     * */
    align: {
      type: String,
			value: 'left',
			observer:function(newVal,oldVal){
				let _align = "flex-start";
				switch(newVal){
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
     * 指定表格高度
     */
    maxHeight:{
      type: String,
      value: '0'
    },
    /**
     * 是否固定左边标题
     */
    left:{
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
    config: {
      type: Array,
			value: [],
			observer:function(newVal,oldVal){
				let totalWidth = 0;
				for (const item of newVal) {
					totalWidth += item.width ? Number(item.width.slice(0,item.width.indexOf("r"))):80;
				}
				this.setData({
					totalWidth:totalWidth,
        })
        console.log(totalWidth,'totalWidth');
			}
		},
		/**
		 * 表体数据
		 */
		tableData:{
			type:Array,
			value:[],
			observer:function(newVal,oldVal){
				let checkedAll = true;//所有选择框都选择
				let hasChcked = false;//存在未选中的选择框
				for (const tableItem of newVal) {
					if(tableItem[this.data.chioceKeys]){
						hasChcked = true;
					}
					if(!tableItem[this.data.chioceKeys]){
						checkedAll = false;
					}
				}
				this.setData({
					checkedAll,
					hasChcked,
				})
			}
		},
    /**
     * 文字过长省略
     */
    showOverflowTooltip:{
      type:Boolean,
			value:false,
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
		totalWidth:0,
		// 单元格内项目位置
		_align:"flex-start",
		// 判断是否勾选了所有的选择
		checkedAll:false,
		hasChcked:false,
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
			const {item} = event.currentTarget.dataset;
      this.triggerEvent('rowClick', item);
		},

		/**
		 * 选择所有数据
		 */
		_chioceAll(){
			let {tableData,chioceKeys} = this.data;
			// 勾选全部
			if(this.data.checkedAll){
				for (const tableItem of tableData) {
					tableItem[chioceKeys] = false;
				}
			}else{
			// 取消勾选全部
				for (const tableItem of tableData) {
					tableItem[chioceKeys] = true;
				}
			};
			this.triggerEvent("changeChoice",tableData)
		}
  },
  /**
   * 监听器
   */
  observers: {
  },
  /**
   * 生命周期
   */
  lifetimes:{
    attached: function() {
			console.log("在组件实例进入页面节点树时执行");
    },
    detached: function() {
      console.log("在组件实例被从页面节点树移除时执行");
		},
		ready:function(){
		}
  },
  /**
   * 声明周期函数
   */
  pageLifetimes: {
    show: function() {

    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  }
})