Component({
	options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
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
     * 是否存在内边距--该属性用于单元格内嵌套数组时(只针对表体)
     */
		hasPadding:{
			type: Boolean,
			value: true,
    },
    /**
     * 操作文本 不传不显示
     */
    opText: {
      type: String,
      value: ''
		},
   /**
    * 表头与表体的单元格宽度
     config: [
			 {
				 prop:"key",//表格字段
				 width:"279rpx",//单元格宽度
				 label:"xx",//表头
			 }
		 ]
    */
    config: {
      type: Array,
			value: [],
			observer:function(newVal,oldVak){
				let totalWidth = 0;
				for (const item of newVal) {
					totalWidth += item.width ? Number(item.width.slice(0,item.width.indexOf("r"))):0;
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
     * 文字省略
     */
    showOverflowTooltip:{
      type:Boolean,
			value:false,
    }
  },

	/**
	 * 外部样式修改
	 */
	externalClasses: ['mt-heander-font-outer'],

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
			const {row} = event.currentTarget.dataset;
      this.triggerEvent('rowClick', row);
		},
		_tableScroll(event){
			const { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = event.detail;
			console.log(event.detail,"scrollLeft");
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