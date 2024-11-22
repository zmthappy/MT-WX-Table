Component({
	options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //对齐方式 left center right
    align: {
      type: String,
      value: 'left'
    },
    //指定表格高度
    maxHeight:{
      type: String,
      value: '0'
    },
    //是否固定左边标题
    left:{
      type: Boolean,
      value: false
    },
    //斑马纹
    stripe: {
      type: Boolean,
      value: true
    },
    //是否边框
    border: {
      type: Boolean,
      value: false
    },
    //标题背景
    headbgColor: {
      type: String,
      value: '#f7f8fa'
    },
    //操作文本 不传不显示
    // opText: {
    //   type: String,
    //   value: ''
		// },
		// 是否存在内边距
		hasPadding:{
			type: Boolean,
			value: true,
		},
   /**
     config: [
			 {
				 prop:"key",//表格字段
				 width:"279rpx",//单元格宽度
				 label:"",
			 }
		 ]
    */
    config: {
      type: Array,
      value: []
		},
		/**
		 * 表体数据
		 */
		tableData:{
			type:Array,
			value:[],
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取当前行数据
     * @param {event} event 
     */
    rowClick(event) {
      //当前行数据
			const {row} = event.currentTarget.dataset;
			console.log("cccccccccccccc");
      this.triggerEvent('rowClick', row);
		},
		tableScroll(event){
			const { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = event.detail;
			console.log(event.detail,"scrollLeft");
		}
  },
  observers: {
    'y': function (y) {
      if (y) {
        // this.setData({y:y})
      }
    }
  },

  /**
   * 声明周期函数
   */
  pageLifetimes: {

  }
})