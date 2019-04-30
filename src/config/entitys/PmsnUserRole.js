export const PmsnUserRole = {

	//SysTab信息
	minorType : '5',
	aliasTabName : '用户角色关联',
	tabName : 'pmsn_user_role',
	majorType : '10401',

	//SysFld信息
	sysFld: [
	{
		aliasColName : '用户id',
		dispOrder : '1',
		addController : '1',
		queryController : '2',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'pmsn_user_role',
		dataType : '5',
		colName : 'user_id',
		editController : '1',
	}, {
		aliasColName : '角色id',
		dispOrder : '2',
		addController : '1',
		queryController : '2',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'pmsn_user_role',
		dataType : '5',
		colName : 'role_id',
		editController : '1',
	}],

	//SysFldVal信息
	sysFldVal: {
	},
};