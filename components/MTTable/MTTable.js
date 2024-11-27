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
     * 对齐方式 left center right
     * */
    align: {
      type: String,
      value: 'left'
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
			}
		},
		/**
		 * 表体数据
		 */
		tableData:{
			type:Array,
			value:[],
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
			console.log(item,"current click row");
      this.triggerEvent('rowClick', row);
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