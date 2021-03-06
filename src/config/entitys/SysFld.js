export const SysFld = {

	//SysTab信息
	minorType : '3',
	aliasTabName : '字段表',
	tabName : 'sys_fld',
	majorType : '10101',

	//SysFld信息
	sysFld: [
	{
		aliasColName : '实体表明',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '1',
		colName : 'tab_name',
		editController : '1',
	}, {
		aliasColName : '字段名',
		dispOrder : '2',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '1',
		colName : 'col_name',
		editController : '1',
	}, {
		aliasColName : '字段别名',
		dispOrder : '3',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '1',
		colName : 'alias_col_name',
		editController : '1',
	}, {
		aliasColName : '字段顺序',
		dispOrder : '4',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'disp_order',
		editController : '1',
	}, {
		aliasColName : '查询控制',
		dispOrder : '5',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'query_controller',
		editController : '1',
	}, {
		aliasColName : '展示控制',
		dispOrder : '6',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'show_controller',
		editController : '1',
	}, {
		aliasColName : '编辑控制',
		dispOrder : '7',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'edit_controller',
		editController : '1',
	}, {
		aliasColName : '新增控制',
		dispOrder : '8',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'add_controller',
		editController : '1',
	}, {
		aliasColName : '可否为空',
		dispOrder : '9',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'nullable',
		editController : '1',
	}, {
		aliasColName : '展示类型',
		dispOrder : '10',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'disp_type',
		editController : '1',
	}, {
		aliasColName : '数据类型',
		dispOrder : '11',
		addController : '1',
		queryController : '1',
		nullable : '0',
		dispType : '3',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '5',
		colName : 'data_type',
		editController : '1',
	}, {
		aliasColName : '提示语',
		dispOrder : '12',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '1',
		showController : '1',
		tabName : 'sys_fld',
		dataType : '1',
		colName : 'place_holder',
		editController : '1',
	}],

	//SysFldVal信息
	sysFldVal: {
		add_controller: [
		{
			dispOrder : 1,
			dbVal : 0,
			tabName : 'sys_fld',
			colName : 'add_controller',
			dispVal : '不显示',
		}, {
			dispOrder : 2,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'add_controller',
			dispVal : '显示',
		}, {
			dispOrder : 3,
			dbVal : 2,
			tabName : 'sys_fld',
			colName : 'add_controller',
			dispVal : '显示且可以编辑',
		}],
		disp_type: [
		{
			dispOrder : 1,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '文本框',
		}, {
			dispOrder : 2,
			dbVal : 101,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '带前缀的文本框',
		}, {
			dispOrder : 3,
			dbVal : 102,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '密码框',
		}, {
			dispOrder : 4,
			dbVal : 103,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '邮箱框',
		}, {
			dispOrder : 5,
			dbVal : 104,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '手机号框',
		}, {
			dispOrder : 6,
			dbVal : 105,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '电话框',
		}, {
			dispOrder : 7,
			dbVal : 106,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '查询框',
		}, {
			dispOrder : 8,
			dbVal : 107,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '多语言框',
		}, {
			dispOrder : 9,
			dbVal : 108,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '银行卡号框',
		}, {
			dispOrder : 10,
			dbVal : 2,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '普通文本域',
		}, {
			dispOrder : 11,
			dbVal : 201,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '富文本',
		}, {
			dispOrder : 12,
			dbVal : 3,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '下拉框',
		}, {
			dispOrder : 13,
			dbVal : 301,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '下拉多选框',
		}, {
			dispOrder : 14,
			dbVal : 302,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '下拉树',
		}, {
			dispOrder : 15,
			dbVal : 303,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '查询下拉',
		}, {
			dispOrder : 16,
			dbVal : 304,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '下拉可输入框',
		}, {
			dispOrder : 17,
			dbVal : 305,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '查询自定义下拉框',
		}, {
			dispOrder : 18,
			dbVal : 4,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '日期时间框',
		}, {
			dispOrder : 19,
			dbVal : 401,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '日期框',
		}, {
			dispOrder : 20,
			dbVal : 402,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '时间框',
		}, {
			dispOrder : 21,
			dbVal : 403,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '年月框',
		}, {
			dispOrder : 22,
			dbVal : 5,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '数字框',
		}, {
			dispOrder : 23,
			dbVal : 501,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '百分数框',
		}, {
			dispOrder : 24,
			dbVal : 502,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '金币框',
		}, {
			dispOrder : 25,
			dbVal : 6,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '单选Radio',
		}, {
			dispOrder : 26,
			dbVal : 601,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '单选checkbox',
		}, {
			dispOrder : 27,
			dbVal : 7,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '复选checkbox',
		}, {
			dispOrder : 28,
			dbVal : 8,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '图片框',
		}, {
			dispOrder : 29,
			dbVal : 801,
			tabName : 'sys_fld',
			colName : 'disp_type',
			dispVal : '文件框',
		}],
		nullable: [
		{
			dispOrder : 1,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'nullable',
			dispVal : '可以',
		}, {
			dispOrder : 2,
			dbVal : 0,
			tabName : 'sys_fld',
			colName : 'nullable',
			dispVal : '不可以',
		}],
		query_controller: [
		{
			dispOrder : 1,
			dbVal : 0,
			tabName : 'sys_fld',
			colName : 'query_controller',
			dispVal : '不显示',
		}, {
			dispOrder : 2,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'query_controller',
			dispVal : '显示',
		}, {
			dispOrder : 3,
			dbVal : 2,
			tabName : 'sys_fld',
			colName : 'query_controller',
			dispVal : '重点显示',
		}],
		show_controller: [
		{
			dispOrder : 1,
			dbVal : 0,
			tabName : 'sys_fld',
			colName : 'show_controller',
			dispVal : '不显示',
		}, {
			dispOrder : 2,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'show_controller',
			dispVal : '显示',
		}],
		data_type: [
		{
			dispOrder : 1,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '字符串',
		}, {
			dispOrder : 2,
			dbVal : 5,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '数字',
		}, {
			dispOrder : 3,
			dbVal : 4,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '日期时间',
		}, {
			dispOrder : 4,
			dbVal : 401,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '日期',
		}, {
			dispOrder : 5,
			dbVal : 402,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '时间',
		}, {
			dispOrder : 6,
			dbVal : 403,
			tabName : 'sys_fld',
			colName : 'data_type',
			dispVal : '年月',
		}],
		edit_controller: [
		{
			dispOrder : 1,
			dbVal : 0,
			tabName : 'sys_fld',
			colName : 'edit_controller',
			dispVal : '不显示',
		}, {
			dispOrder : 2,
			dbVal : 1,
			tabName : 'sys_fld',
			colName : 'edit_controller',
			dispVal : '显示',
		}, {
			dispOrder : 3,
			dbVal : 2,
			tabName : 'sys_fld',
			colName : 'edit_controller',
			dispVal : '显示且可以编辑',
		}],
	},
};