export const SysTab = {

	//SysTab信息
	minorType : '2',
	aliasTabName : '表信息表',
	tabName : 'sys_tab',
	majorType : '10101',

	//SysFld信息
	sysFld: [
	{
		aliasColName : '主类型',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '7',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '5',
		colName : 'major_type',
		editController : '1',
	}, {
		aliasColName : '子类型',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '7',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '5',
		colName : 'minor_type',
		editController : '1',
	}, {
		aliasColName : '关联主类型',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '7',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '5',
		colName : 'asso_major',
		editController : '1',
	}, {
		aliasColName : '关联子类型',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '7',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '5',
		colName : 'asso_minor',
		editController : '1',
	}, {
		aliasColName : '中文表名',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '1',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '1',
		colName : 'tab_name',
		editController : '1',
	}, {
		aliasColName : '英文表名',
		dispOrder : '1',
		addController : '1',
		queryController : '1',
		nullable : '1',
		dispType : '1',
		showController : '1',
		tabName : 'sys_tab',
		dataType : '1',
		colName : 'alias_tab_name',
		editController : '1',
	}],

	//SysFldVal信息
	sysFldVal: {
	},
};