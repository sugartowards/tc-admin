var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            /** 这下面配置项目中用到的NPM依赖 **/
            'react',
            'react-dom',
            'prop-types',
            'react-router',
            'react-router-dom',
            'mobx',
            'mobx-react',
            'antd',
            'isomorphic-fetch',
            'moment',
            'numeral',
            'rc-queue-anim',
            'classnames',
            'react-dnd',
            'react-dnd-html5-backend',
            'immutability-helper',
            'file-saver',
            '@antv/g6',
            '@antv/data-set',
            'bizcharts',
            'react-color',
            'wangeditor',

            'html-entities',
            'loglevel',
            'punycode',
            'url',
        ]
    },
    output: {
        path: path.join(__dirname, 'assets'), // 生成的dll.js路径，存在/assets中
        filename: '[name].dll.js', // 生成的文件名字
        library: '[name]_library'  // 生成文件的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        // 使用DllPlugin插件编译上面配置的NPM包
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, 'assets', '[name]-manifest.json'),
            name: '[name]_library' // 与上面output中配置对应
        }),
    ]
};