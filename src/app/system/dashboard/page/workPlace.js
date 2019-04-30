/**
 * Created by Sugar on 2018/8/22.
 * 工作台
 */
import React from "react";
import {Page} from "CtnUi";
import {Row, Col} from "antd";
import {
    UserHeader, TaskListCard, LinkGroupCard, NoticeListCard, MenuTreeModal, TaskSilder
} from "../component/workPlace";
import {SysMenu} from "../../../../config/sysTables";
import '../css/workPlace.css';

const LinkData = 'LinkData';
export default class WorkPlace extends Page {

    constructor(props, context) {
        super(props, context);
        this.state = {
            menuModalVisible: false,
            taskSilderVisible: false,
            linkGroupData: JSON.parse(localStorage.getItem(LinkData)) || [],
        };
    }

    componentWillMount() {
        let {urlPath} = this.context;
        this.taskListOptions = {
            app: urlPath.pmsn.menuTree,
            onItemClick: this._handleTaskClick,
        };
        this.linkGroupOptions = {
            onClick: this.context.addTab,
            onAddClick: ()=> {
                this.setState({menuModalVisible: true});
            },
        };
        this.menuTreeOptions = {
            app: urlPath.pmsn.menuTree,
            onOk: this._handleSelectMenu,
            onCancel: ()=> {
                this.setState({menuModalVisible: false});
            }
        };
    }

    render() {
        let {linkGroupData, menuModalVisible, taskSilderVisible}  = this.state;
        let {urlPath} = this.context;
        return (
            <div onClick={this._handleWrapper} className='ca-workplace'>
                <TaskSilder visible={taskSilderVisible}/>
                <div style={{margin: 20}}>
                    <Row style={{marginBottom: 20}}>
                        <UserHeader userInfo={this.userInfo}/>
                    </Row>
                    <Row gutter={24}>
                        <Col span={16}>
                            <TaskListCard {...this.taskListOptions}/>
                        </Col>
                        <Col span={8}>
                            <div style={{marginBottom: 24}}>
                                <LinkGroupCard {...this.linkGroupOptions} data={linkGroupData}/>
                                <MenuTreeModal {...this.menuTreeOptions} checkedData={linkGroupData}
                                               visible={menuModalVisible}/>
                            </div>
                            <NoticeListCard app={urlPath.pmsn.menuTree}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    /**
     * 每个任务的点击响应
     * 1.显示任务侧栏
     * @private
     */
    _handleTaskClick = (task)=> {
        this.setState({taskSilderVisible: true});
    };

    /**
     * 隐藏侧边栏
     * @private
     */
    _handleWrapper = ()=> {
        if (this.state.taskSilderVisible) {
            this.setState({taskSilderVisible: false});
        }
    };

    /**
     * 选择快速开始菜单之后的回调函数
     * 1.构建数据
     * 2.存储数据到localStorage
     * 3.更新数据
     * @param menuData
     * @private
     */
    _handleSelectMenu = (menuData)=> {
        let linkData = [];
        for (let data of menuData) {
            if (data[SysMenu.FLD_URL]) {
                linkData.push({
                    [SysMenu.FLD_ID]: data[SysMenu.FLD_ID],
                    [SysMenu.FLD_TITLE]: data[SysMenu.FLD_TITLE],
                    [SysMenu.FLD_URL]: data[SysMenu.FLD_URL],
                });
            }
        }
        localStorage.setItem(LinkData, JSON.stringify(linkData));
        this.setState({menuModalVisible: false, linkGroupData: linkData});
    };
}
