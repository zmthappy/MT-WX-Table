# MT-WX-Table
本组件是对[mini-easy-table](https://github.com/aizhaiyu/mini-easy-table)进行部分改良<br/>
## 参数说明：
	1.align:表头单元格对齐方式：left;right;center;默认left(String)
	2.maxHeight:设置表格最大高度；默认auto(String) 单位为px(rpx单位的换算转化会导致获取表格高度存在问题)
	3.left:开启固定列；默认false(Boolean) --需要和configurator内的fiexed同步启用
	4.border：是否开启边框；默认false(Boolean) 
	5.headbgColor：设置表头背景色；默认f7f8fa(String) 
	6.hasPadding:表体单元格是否开启内边距；默认true(Boolean) ---废弃
	7.configurator: [
			 {
				 prop:"key",//表格字段
				 width:"279rpx",//单元格宽度---单元格长度必须携带单位:rpx;---涉及表体宽度计算
				 label:"xx",//表头
				 needPadding:"true",//设置表体单元格内边距
				 fiexed:"",//是否固定列：true(Boolean) 
				 fiexedPosition:"left",//默认left--此项目前只固定位left
			 }
		 ]
	8.tableData:表格数据(类型为Array);默认[] 
	9.stripe:开启斑马纹;默认true(Boolean) 
	10.emptyText:无数据显示;
	11.showOverflowTooltip:表体单元格省略;默认false(Boolean)
	12.chioceKeys:选择框的字段;checked(String)[开放选择框的控制权限，自定义修改]