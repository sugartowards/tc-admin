启动步骤：
1.首先全局安装
    webpack-dev-server，当前目录下面运行 npm install webpack-dev-server -g
2.启动前端命令：npm run dev 或者 webpack-dev-server
  启动伪后端命令：npm run server 或者 node json-server.config.js
  启动文件操作服务命令：npm run file 或者 node file-server.config.js   --采用express发布的服务

  其他打包命令：
        npm run dll     --打包压缩项目中依赖的moudles
        webpack         --打包代码文件
3.访问地址：http://localhost:9000/
