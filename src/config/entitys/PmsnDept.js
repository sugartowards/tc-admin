export const PmsnDept = {

	//SysTab信息
	minorType : '3',
	aliasTabName : '部门',
	tabName : 'pmsn_dept',
	majorType : '10401',

	//SysFld信息
	sysFld: [
	{
		aliasColName : '部门id',
		dispOrder : '1',
		addController : '0',
		queryController : '0',
		nullable : '0',
		dispType : '5',
		showController : '0',
		tabName : 'pmsn_dept',
		dataType : '5',
		colName : 'id',
		editController : '0',
	}, {
		aliasColName : '部门名称',
		dispOrder : '2',
		addController : '2',
		queryController : '2',
		nullable : '0',
		dispType : '1',
		showController : '1',
		tabName : 'pmsn_dept',
		dataType : '1',
		colName : 'name',
		editController : '2',
	}, {
		aliasColName : '上级部门',
		dispOrder : '3',
		addController : '2',
		queryController : '0',
		nullable : '0',
		dispType : '302',
		showController : '1',
		tabName : 'pmsn_dept',
		dataType : '5',
		colName : 'super_id',
		editController : '1',
	}, {
		aliasColName : '负责人',
		dispOrder : '7',
		addController : '2',
		queryController : '0',
		nullable : '1',
		dispType : '1',
		showController : '1',
		tabName : 'pmsn_dept',
		dataType : '1',
		colName : 'leader',
		editController : '2',
	}, {
		aliasColName : '负责人电话',
		dispOrder : '8',
		addController : '2',
		queryController : '2',
		nullable : '1',
		dispType : '104',
		showController : '1',
		tabName : 'pmsn_dept',
		dataType : '1',
		colName : 'mobile',
		editController : '2',
	}],

	//SysFldVal信息
	sysFldVal: {
	},
};