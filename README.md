# MT-WX-Table
本组件是对[mini-easy-table](https://github.com/aizhaiyu/mini-easy-table)进行部分改良<br/>
## 参数说明：
	1.align:单元格对齐方式：left;right;center;默认left(String) <br/>
	2.maxHeight:设置表格最大高度；默认auto(String) <br/>
	3.left:固定第一列；默认true(Boolean) <br/>
	4.border：是否开启边框；默认false(Boolean) <br/>
	5.headbgColor：设置表头背景色；默认f7f8fa(String) <br/>
	6.hasPadding:表体单元格是否开启内边距；默认true(Boolean) <br/>
	7.config: [
			 {
				 prop:"key",//表格字段
				 width:"279rpx",//单元格宽度---单元格长度必须携带单位:rpx;---涉及表体宽度计算
				 label:"xx",//表头
			 }
		 ] <br/>
	8.tableData:表格数据(类型为Array);默认[] <br/>
	9.stripe:开启斑马纹;默认true(Boolean) <br/>