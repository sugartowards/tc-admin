/**
 * Created by CtnFrame-Admin on 2018/4/11.
 */
import {notification} from 'antd';
import fetch from 'isomorphic-fetch';
import {Util} from 'CtnUi';
import {FilePath} from '../../../../config/pathCfg';
import {SysUrl} from '../../../../config/sysTables';

const NextLineStr = '\r\n';//换行符号
const TabStr = '\t';//制表符号
export const UrlManageFunc = {

    /**
     * 导出UrlCfg
     */
    exportUrl: function () {
        let {urlPath} = this.context;
        Util.Fetch.get(`${urlPath.config.common}/${SysUrl.TAB_NAME}`, {size: 500}, (rows) => {
            let app = urlPath.config.exportTemplate;
            let data = rows;
            let sql = `${NextLineStr}const UrlPath= {${NextLineStr}`;
            //根据模块分成二维数组
            let urlArrMap = {};
            for (let url of data) {
                if (!urlArrMap[url.module]) {
                    urlArrMap[url.module] = [];
                }
                urlArrMap[url.module].push(url);
            }
            for (let module in urlArrMap) {
                sql += `${TabStr}${module}: {${NextLineStr}`;
                urlArrMap[module].forEach(url => {
                    sql += `${TabStr}${TabStr}${url[SysUrl.FLD_NAME]}: '${url[SysUrl.FLD_PATH]}',${NextLineStr}`;
                });
                sql += `${TabStr}},${NextLineStr}`;
            }
            sql += `};${NextLineStr}export default UrlPath;`;
            this.func._writeFile(app, [{
                path: 'src/config',
                fileName: 'urlCfg.js',
                code: sql
            }]);
        });
    },

    /**
     * 调用nodejs发布的FILE服务，将代码目录及文件写入到当前代码环境中
     * @param app
     * @param files [{path: 'src/app/user/page', fileName: 'userManage.js', code: '1234555'}]
     * @private
     */
    _writeFile: function (app, files) {
        fetch(FilePath + app, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({files}),
            mode: 'cors',
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(({state, message})=> {
            if (state) {
                notification.success({message: '友情提示：', description: '导出成功！'});
            } else {
                notification.error({message: '友情提示：', description: message});
            }
        }).catch(({message})=> {
            notification.error({message: '友情提示：', description: message});
        });
    },

};