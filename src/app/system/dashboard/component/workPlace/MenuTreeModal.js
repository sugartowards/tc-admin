/**
 * author            Suger
 * time              2018/8/30
 * class:            MenuTreeModal
 * description:      菜单树对话框
 */
import React from "react";
import PropTypes from "prop-types";
import {Tree, Dialog, Util} from "CtnUi";
import {SysMenu} from "../../../../../config/sysTables";

const TreeObj = 'TreeObj';
export default class MenuTreeModal extends React.PureComponent {

    static propTypes = {
        visible: PropTypes.boolean,
        app: PropTypes.string.isRequired,
        checkedData: PropTypes.array,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
    };

    static defaultProps = {
        onOk: ()=>null,
        onCancel: ()=>null,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        let {app, checkedData, onCancel} = this.props;
        this.dialogOptions = {
            title: '快速开始',
            onOk: this._handleOk,
            onCancel: onCancel,
        };
        this.treeOptions = {
            ref: TreeObj,
            checkable: true,
            checkedKeys: checkedData.map(data => data[SysMenu.FLD_ID]),
            dataKey: {
                key: SysMenu.FLD_ID,
                title: SysMenu.FLD_TITLE,
            },
        };
    }

    render() {
        let {data} = this.state;
        let {visible} = this.props;
        return (
            <Dialog {...this.dialogOptions} visible={visible}>
                <Tree {...this.treeOptions} data={data}/>
            </Dialog>
        );
    }

    componentDidMount() {
        Util.Fetch.get(this.props.app, null, (menuData)=> {
            this.setState({data: this._handleMenuData(menuData)});
        });
    }

    /**
     * 获取菜单，递归去掉按钮、不显示菜单
     * @param menuData
     * @returns {Array}
     * @private
     */
    _handleMenuData = (menuData)=> {
        let newMenuData = [];
        menuData.forEach(menu => {
            if (menu[SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_CD && menu[SysMenu.FLD_VISIBLE] == SysMenu.FLDVAL_VISIBLE_XS) {
                let children = menu.children || [];
                if (children.length && children[0][SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_CD) {
                    menu.children = this._handleMenuData(children);
                } else {
                    delete menu.children;
                }
                if (menu.children && !menu.children.length) {
                    delete menu.children;
                }
                newMenuData.push(menu);
            }
        });
        return newMenuData;
    };

    /**
     * 响应
     * @private
     */
    _handleOk = ()=> {
        let menuArr = this.refs[TreeObj].getChecked();
        menuArr = menuArr.map(menuTreeObj => menuTreeObj.attribute);
        this.props.onOk(menuArr);
    }
}