/**
 * author            Suger
 * time              2018/9/5
 * class:            UpdatePsw
 * description:      更新密码组件
 */
import React from "react";
import PropTypes from "prop-types";
import {Form, Input, Button, Icon, Row} from "antd";
import {Util} from "CtnUi";

const FormItem = Form.Item;
const FROM_OBJ = 'form';
export default class UpdatePsw extends React.PureComponent {

    static propTypes = {
        app: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        nameField: PropTypes.string.isRequired,
        pswField: PropTypes.string.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
        };
    }

    componentWillMount() {
        this.formOptions = {
            ref: FROM_OBJ,
            pswField: this.props.pswField,
            onSubmit: this._handleFormSubmit,
        };
    }

    render() {
        return (
            <UpdatePswForm {...this.formOptions} loading={this.state.loading}/>
        );
    }

    /**
     * 提交更新更新密码请求
     * @private
     */
    _handleFormSubmit = (params) => {
        this.setState({loading: true});
        let {app, nameField, pswField, user} = this.props;
        params = {[pswField]: Util.MD5.hex_md5(user[nameField] + params[pswField])};
        Util.Fetch.put(app, params, ()=> {
            this.refs[FROM_OBJ].resetFields();
            this.setState({loading: false});
            Util.Notification.success('更新密码操作成功！');
        });
    };
}

/**
 * 更新密码的表单组件
 */
class _UpdatePswForm extends React.PureComponent {

    render() {
        let formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 14}};
        let {form: {getFieldDecorator}, pswField, loading} = this.props;
        let prefix = <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>;
        return (
            <Form>
                <FormItem label="新密码：" {...formItemLayout}>
                    {getFieldDecorator(pswField, {
                        rules: [{required: true, message: '请输入新密码'}, {min: 6, message: '密码长度不够6位'}],
                        initialValue: null,
                    })(
                        <Input prefix={prefix} type="password"/>
                    )}
                </FormItem>
                <FormItem label="确认密码：" {...formItemLayout}>
                    {getFieldDecorator('password_repeat', {
                        rules: [{required: true, message: '请确认新密码'}, {validator: this._validator}],
                        initialValue: null,
                    })(
                        <Input prefix={prefix} type="password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Row type='flex' justify="center">
                        <Button loading={loading} type="primary" onClick={this._handleOnSubmit}>更新密码</Button>
                    </Row>
                </FormItem>
            </Form>
        );
    }

    _handleOnSubmit = ()=> {
        let errorArray = [];
        this.props.form.validateFields((err) => {
            err && (errorArray.push(err));
        });
        if (errorArray.length === 0) {
            this.props.onSubmit(this.props.form.getFieldsValue());
        }
    };

    /**
     * 确认密码的自定义验证，与第一个密码框一致
     * @private
     */
    _validator = (rule, value, callback)=> {
        let oldValue = this.props.form.getFieldValue(this.props.pswField);
        if (value != oldValue) {
            callback('两次输入密码不一致');
        } else {
            callback();
        }
    };
}
const UpdatePswForm = Form.create()(_UpdatePswForm);