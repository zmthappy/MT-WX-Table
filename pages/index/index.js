// index.js
Page({
	data: {
		// 测试--基础
		testTableConfig: [
			{
				prop: "Name",
				width: "150rpx",
				label: "姓名",
				needPadding: true,
			},
			{
				prop: "sex",
				width: "150rpx",
				label: "性别",
				needPadding: true,
			},
			{
				prop: "schoolNumber",
				width: "150rpx",
				label: "学号",
				needPadding: true,
			},
			{
				prop: "adress",
				width: "",
				label: "住址",
				needPadding: true,
			},
		],
		// 测试--选择框
		testTableConfigWithCheck: [
			{
				prop: "checked",
				width: "80rpx",
				fiexed: true,
				fiexedPosition: "left",
				label: "选择",
				needPadding: true,
			},
			{
				prop: "sex",
				width: "150rpx",
				fiexed: false,
				fiexedPosition: "left",
				label: "性别",
				needPadding: true,
			},
			{
				prop: "schoolNumber",
				width: "150rpx",
				label: "学号",
				needPadding: true,
			},
			{
				prop: "Name",
				width: "150rpx",
				fiexed: false,
				fiexedPosition: "left",
				label: "姓名",
				needPadding: true,
			},
			{
				prop: "adress",
				width: "150rpx",
				label: "住址",
				needPadding: true,
			},
			// {
			// 	prop: "phonenumber",
			// 	width: "150rpx",
			// 	label: "电话",
			// 	needPadding: true,
			// },
			// {
			// 	prop: "operation",
			// 	width: "150rpx",
			// 	label: "操作",
			// 	needPadding: true,
			// },
		],
		// 测试--数组内嵌套数组
		arrayTableConfigWithCheck: [
			{
				prop: "sex",
				width: "150rpx",
				label: "性别",
				needPadding: true,
			},
			{
				prop: "schoolNumber",
				width: "150rpx",
				label: "学号",
				needPadding: true,
			},
			{
				prop: "Name",
				width: "150rpx",
				label: "姓名",
				needPadding: true,
			},
			{
				prop: "adress",
				width: "150rpx",
				label: "住址",
				needPadding: true,
			},
			{
				prop: "testArray",
				width: "150rpx",
				label: "数组循环",
				needPadding: false,
				loopwidth: "300rpx",
				loopArray: [
					{
						width: "150rpx",
						prop: "testArray",
					},
					{
						width: "150rpx",
						prop: "testArray3",
					},
				],
			},
			{
				prop: "testArray3",
				width: "150rpx",
				label: "数组循环2",
				needPadding: false,
				tbodyLoop: true,
			},
		],
		tableData: [
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 1,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 12,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 13,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 14,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 15,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 16,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 17,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 18,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "111111111111111111111111111111",
						label: "cc11111",
					},
					{
						name: "1111111111111111111111111111111111111111111",
						label: "cc",
					},
				]
			},
			{
				Name: "小张",
				sex: "男",
				schoolNumber: 1,
				checked: false,
				id: 19,
				adress: "浙江省XXX市",
				phonenumber: "132XXXXX4578",
				testArray: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				],
				testArray3: [
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
					{
						name: "11",
						label: "cc",
					},
				]
			},
		]
	},
	// 选择框点击事件
	checked(e) {
		let { checked } = e.currentTarget.dataset;
		let index = this.data.tableData.findIndex(t => t.id == checked.id);
		let tableData = this.data.tableData;
		if (index != -1) {
			tableData[index].checked = !tableData[index].checked;
			this.setData({
				tableData
			})
		}
	},
	// 选择框全选--请将所有选择数据塞入要勇于勾选的数据
	changeChoice(e) {
		this.setData({
			tableData: e.detail
		})
	},
	// 子组件返回点击事件数据
	rowClick(e) {
		console.log(e.detail);
	},
	opration(e) {
		console.log(e.currentTarget.dataset.row, "操作列点击");
	}
})
