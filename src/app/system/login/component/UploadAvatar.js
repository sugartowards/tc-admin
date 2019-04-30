/**
 * author            Suger
 * time              2018/9/3
 * class:            UploadAvatar
 * description:      上传头像
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Upload, Icon, message} from 'antd';

export default class UploadAvatar extends React.PureComponent {

    static propTypes = {
        app: PropTypes.string,
        name: PropTypes.string,
        success: PropTypes.func,
    };

    static defaultProps = {
        name: 'file',
        success: ()=>null,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            imageUrl: null,
        };
    }

    render() {
        let {imageUrl, loading} = this.state;
        let {app, name} = this.props;
        let type = loading ? 'loading' : 'plus';
        return (
            <Upload name={name} listType="picture-card" className="ca-uploadavatar" showUploadList={false}
                    withCredentials={true} action={app} beforeUpload={this.beforeUpload} onChange={this.handleChange}>
                {imageUrl ? <img src={imageUrl} alt="个人头像"/> :
                    <div><Icon type={type}/>
                        <div className="ant-upload-text">上次头像</div>
                    </div>}
            </Upload>
        );
    }

    beforeUpload = (file)=> {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            this.props.success(info.file.response);
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };

    getBase64 = (img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

}