/**
 * Created by CtnFrame-Admin on 2018/5/7.
 */
export const RoleManageFunc = {

    /**
     * 角色赋权
     * @param rows
     */
    menuPermission: function (rows) {
        this.context.addTab({
            title: '角色赋权',
            url: 'system/permision/rolePermission',
            attribute: {
                role: rows[0]
            },
        });
    },

};