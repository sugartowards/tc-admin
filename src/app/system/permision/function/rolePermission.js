/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
import {Util} from 'CtnUi';

export const TreeObj = 'treeObj';
export const RolePermissionFunc = {

    /**
     * 保存权限
     */
    saveMenuPermission: function () {
        let selectArr = this.refs[TreeObj].getChecked();
        let roleId = this.state.selectRole.id;
        let rolePmsns = selectArr.map(menu => ({
            role_id: roleId,
            menu_id: menu.id,
        }));
        let {urlPath} = this.context;
        Util.Fetch.post(`${urlPath.pmsn.rolePmsn}/${roleId}`, rolePmsns, () => {
        });
    },

    /**
     * 选择一个角色时候触发
     * @param currentTarget
     */
    onSelectRole: function ({currentTarget}) {
        let id = currentTarget.getAttribute('id');
        let selectRole = this.state.roles.find(role => id == role.id);
        this.func.queryRolePmsn(selectRole.id);
        this.setState({selectRole, selectMenus: null});
    },

    /**
     * 查询角色菜单权限
     * @param roleId
     */
    queryRolePmsn: function (roleId) {
        let {urlPath} = this.context;
        Util.Fetch.get(`${urlPath.pmsn.rolePmsn}/${roleId}`, {}, (menus = []) => {
            this.setState({selectMenus: menus.map(menu => menu.id)});
        });
    },

};