export const PmsnRole = {

	//SysTab信息
	minorType : '4',
	aliasTabName : '角色',
	tabName : 'pmsn_role',
	majorType : '10401',

	//SysFld信息
	sysFld: [
	{
		aliasColName : '角色id',
		dispOrder : '1',
		addController : '0',
		queryController : '0',
		nullable : '0',
		dispType : '5',
		showController : '0',
		tabName : 'pmsn_role',
		dataType : '5',
		colName : 'id',
		editController : '0',
	}, {
		aliasColName : '角色名称',
		dispOrder : '2',
		addController : '2',
		queryController : '2',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'pmsn_role',
		dataType : '1',
		colName : 'name',
		editController : '2',
	}, {
		aliasColName : '备注',
		dispOrder : '3',
		addController : '2',
		queryController : '0',
		nullable : '1',
		dispType : '2',
		showController : '1',
		tabName : 'pmsn_role',
		dataType : '1',
		colName : 'comment',
		editController : '2',
	}],

	//SysFldVal信息
	sysFldVal: {
	},
};