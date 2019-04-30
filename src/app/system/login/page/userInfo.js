/**
 * author            Suger
 * time              2018/9/3
 * class:            UserInfo
 * description:      个人中心页面
 */
import React from "react";
import {Row, Col, Card, Divider, Tabs} from "antd";
import {Page, Form, Util} from "CtnUi";
import UploadAvatar from "../component/UploadAvatar";
import UpdatePsw from "../component/UpdatePsw";
import {PmsnUser} from "../../../../config/sysTables";
import "../css/userInfo.css";

const {Meta} = Card;
const {TabPane} = Tabs;
export default class UserInfo extends Page {

    constructor(props, context) {
        super(props, context);
        this.maj = PmsnUser.MAJOR_TYPE;
        this.min = PmsnUser.MINOR_TYPE;
        this.state = {
            image: this.userInfo.image,
        };
    }

    componentWillMount() {
        super.componentWillMount();
        this.userFormOptions = {
            sysEntity: this.sysEntity,
            defaultValue: this.userInfo,
            modal: Form.SHOW,
        };
        this.oploadAvatarOptions = {
            app: `${this.context.servicePath}${this.context.urlPath.file.url}`,
            success: this._handleImageUpload,
        };
        this.updatePswOptions = {
            app: `${this.context.urlPath.pmsn.user}/${this.userInfo[PmsnUser.FLD_ID]}`,
            user: this.userInfo,
            nameField: PmsnUser.FLD_LOGIN_NAME,
            pswField: PmsnUser.FLD_PASSWORD,
        };
    }

    render() {
        return (
            <Row className='ca-userinfo' gutter={36}>
                <Col span={6}>
                    <div className='userinfo-left ant-card-hoverable'>
                        <Card bordered={false} cover={<img alt="头像" src={this.state.image}/>}>
                            <Divider />
                            <Meta title="电话" description={this.userInfo[PmsnUser.FLD_TEL]}/>
                            <Meta title="手机" description={this.userInfo[PmsnUser.FLD_MOBILE]}/>
                            <Meta title="邮箱" description={this.userInfo[PmsnUser.FLD_EMAIL]}/>
                        </Card>
                    </div>
                </Col>
                <Col span={18}>
                    <div className='userinfo-right'>
                        <Tabs>
                            <TabPane tab='个人信息' key="1">
                                <Form {...this.userFormOptions}/>
                            </TabPane>
                            <TabPane tab='更新密码' key="2">
                                <UpdatePsw {...this.updatePswOptions}/>
                            </TabPane>
                            <TabPane tab='上传头像' key="3">
                                <UploadAvatar {...this.oploadAvatarOptions}/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        );
    }

    /**
     * 头像上传成功
     * @param image
     * @private
     */
    _handleImageUpload = ({url: image}) => {
        this.setState({image});
        Util.Fetch.put(`${this.context.urlPath.pmsn.user}/${this.userInfo.id}`, {image}, ()=> {
            this.context.updateUserInfo({image});
        });
    };
}