启动步骤：

    1.首先全局安装：
    webpack-dev-server，当前目录下面运行 npm install webpack-dev-server -g
    2.启动前端命令：
	npm run dev 或者 webpack-dev-server
	  启动伪后端命令：
    npm run server 或者 node json-server.config.js
      启动文件操作服务命令：
    npm run file 或者 node file-server.config.js
      其他打包命令：    
        npm run dll     --打包压缩项目中依赖的moudles
        webpack         --打包代码文件
    3.访问地址：
	https://sugartowards.github.io/tc-admin/

代码目录结构：

    app                                               --	所有功能代码
        ...
        system                                        --	系统管理(一级功能)
            ....
            permission                                --	用户权限(二级功能)
                page                                  --	页面
                    userManage                        --	用户管理(三级功能)
                    ...
                function                              --	功能函数
                    userManage                        --	用户功能
                    ...
                css                                   --	样式
    config                                            --	配置代码
        ...
        sysTable.js                                   --	表字段等信息
        sysEntitys.js                                 --	表配置等信息
        menuCfg.js                                    --	菜单路由
        appCfg.js                                     --	辅组app.js文件
        app.js                                        --	代码入口