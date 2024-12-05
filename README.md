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

## 基础表格：
		<MTTable align="center" tableData="{{tableData}}" showOverflowTooltip="{{true}}" configurator="{{testTableConfig}}" border maxHeight="400" bindrowClick="rowClick">
			<block wx:for="{{tableData}}" wx:for-index="index" wx:for-item="tableItem" wx:key="index">
				<view wx:for="{{testTableConfig}}" wx:for-index="configIndex" wx:for-item="configItem" wx:key="configIndex" slot="tr-{{index}}td-{{configIndex+1}}">
					{{tableItem[testTableConfig[configIndex]['prop']]}}
				</view>
			</block>
		</MTTable>
	
## 带复选框
		<MTTable align="left" left tableData="{{tableData}}" configurator="{{testTableConfigWithCheck}}" border maxHeight="400" height="500" bind:changeChoice="changeChoice">
			<block wx:for="{{tableData}}" wx:for-index="index" wx:for-item="tableItem" wx:key="index">
				<block wx:for="{{testTableConfigWithCheck}}" wx:for-index="configIndex" wx:for-item="configItem" wx:key="configIndex">
					<view wx:if="{{configItem.label == '选择'}}" class="mt-table-column-check" slot="tr-{{index}}td-{{configIndex+1}}">
						<label class="mt-checkbox">
							<checkbox value="{{tableItem[testTableConfigWithCheck[configIndex]['prop']]}}" checked="{{tableItem[testTableConfigWithCheck[configIndex]['prop']]}}" catchtap="checked" data-checked="{{tableItem}}" />
						</label>
					</view>
					<view wx:if="{{configItem.label == '操作'}}" style="width: 100%;height: 100%;" slot="tr-{{index}}td-{{configIndex+1}}">
						<view class="mt-operation" bind:tap="opration" data-row="{{tableItem}}">编辑</view>
					</view>
					<view wx:if="{{configItem.label != '选择' && configItem.label != '操作'}}" slot="tr-{{index}}td-{{configIndex+1}}" style="width: 100%;height: 100%;" class="mt-td-cell-view-center">
						{{tableItem[testTableConfigWithCheck[configIndex]['prop']]}}
					</view>
				</block>
			</block>
		</MTTable>

## 带复选框
	<MTTable align="left" left tableData="{{tableData}}" configurator="{{arrayTableConfigWithCheck}}" border maxHeight="400" height="500" bind:changeChoice="changeChoice">
		<block wx:for="{{tableData}}" wx:for-index="index" wx:for-item="tableItem" wx:key="index">
			<block wx:for="{{arrayTableConfigWithCheck}}" wx:for-index="configIndex" wx:for-item="configItem" wx:key="configIndex">
				<view wx:if="{{configItem.label == '数组循环'}}" style="width: 100%;height: 100%;" slot="tr-{{index}}td-{{configIndex+1}}">
					<view wx:for="{{tableItem[configItem.prop]}}" wx:for-index="arrayIndex" wx:key="arrayIndex" wx:for-item="arrayItem" class="loop-view">
						{{arrayItem.name}}
					</view>
				</view>
				<view wx:if="{{configItem.label != '数组循环' }}" slot="tr-{{index}}td-{{configIndex+1}}" style="width: 100%;height: 100%;" class="mt-td-cell-view-center">
					{{tableItem[arrayTableConfigWithCheck[configIndex]['prop']]}}
				</view>
			</block>
		</block>
	</MTTable>

###  数据配置信息
		// 测试--基础
		testTableConfig:[
			{
				prop:"Name",
				width:"150rpx",
				label:"姓名",
				needPadding:true,
			},
			{
				prop:"sex",
				width:"150rpx",
				label:"性别",
				needPadding:true,
			},
			{
				prop:"schoolNumber",
				width:"150rpx",
				label:"学号",
				needPadding:true,
			},
			{
				prop:"adress",
				width:"",
				label:"住址",
				needPadding:true,
			},
		],
		// 测试--选择框
		testTableConfigWithCheck:[
			{
				prop:"checked",
				width:"80rpx",
				fiexed:true,
				fiexedPosition:"left",
				label:"选择",
				needPadding:true,
			},
			{
				prop:"sex",
				width:"150rpx",
				fiexed:true,
				fiexedPosition:"left",
				label:"性别",
				needPadding:true,
			},
			{
				prop:"schoolNumber",
				width:"150rpx",
				label:"学号",
				needPadding:true,
			},
			{
				prop:"Name",
				width:"",
				fiexed:true,
				fiexedPosition:"left",
				label:"姓名",
				needPadding:true,
			},
			{
				prop:"adress",
				width:"150rpx",
				label:"住址",
				needPadding:true,
			},
			{
				prop:"phonenumber",
				width:"150rpx",
				label:"电话",
				needPadding:true,
      },
      {
				prop:"operation",
				width:"150rpx",
				label:"操作",
				needPadding:true,
			},
		],
		// 测试--数组内嵌套数组
		arrayTableConfigWithCheck:[
			{
				prop:"sex",
				width:"150rpx",
				label:"性别",
				needPadding:true,
			},
			{
				prop:"schoolNumber",
				width:"150rpx",
				label:"学号",
				needPadding:true,
			},
			{
				prop:"Name",
				width:"150rpx",
				label:"姓名",
				needPadding:true,
			},
			{
				prop:"adress",
				width:"150rpx",
				label:"住址",
				needPadding:true,
			},
			{
				prop:"testArray",
				width:"150rpx",
				label:"数组循环",
				needPadding:false,
      }
		],
		tableData:[
			{
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:1,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
			},
			{
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:12,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:13,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:14,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:15,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:16,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:17,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"1111",
					label:"cc",
					},
					{
						name:"1122",
						label:"cc",
					},
				]
      },	
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:18,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
      },
      {
				Name:"小张",
        sex:"男",
        schoolNumber:1,
				checked:false,
        id:19,
        adress:"浙江省XXX市",
        phonenumber:"132XXXXX4578",
				testArray:[
					{
					name:"11",
					label:"cc",
					},
					{
						name:"11",
						label:"cc",
					},
				]
			},
		]