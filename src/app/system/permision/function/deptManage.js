/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
export const DeptManageFunc = {

    /**
     * 新增
     */
    insertData: function () {
        let {urlPath} = this.context;
        this.insert({
            app: this.app,
            formOptions: {
                super_id: {
                    app: urlPath.pmsn.deptTree,
                }
            }
        });
    },

    /**
     * 查看
     * @param rows
     */
    queryData: function (rows) {
        let {urlPath} = this.context;
        this.query({
            formOptions: {
                defaultValue: rows[0],
                super_id: {
                    app: urlPath.pmsn.deptTree,
                }
            }
        });
    },

    /**
     * 删除
     * @param rows
     */
    deleteData: function (rows) {
        this.delete({
            app: `${this.app}/${rows[0].id}`,
        });
    },

    /**
     * 编辑
     * @param rows
     */
    updateData: function (rows) {
        let {urlPath} = this.context;
        this.update({
            app: `${this.app}/${rows[0].id}`,
            formOptions: {
                defaultValue: rows[0],
                super_id: {
                    app: urlPath.pmsn.deptTree,
                }
            }
        });
    },

};