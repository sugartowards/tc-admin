var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//动态生成HTML
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理输出目录文件

module.exports = {
    context: path.join(__dirname),
    entry: {
        main: './src/app.js',
        ctnui: ['CtnUi'],
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader?cacheDirectory',
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ['transform-decorators-legacy', 'transform-decorators']
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                loader: "url-loader?limit=512&name=images/[name].[ext]"
            }
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: "js/bundle.js?v=[chunkhash:8]",
        chunkFilename: 'js/[name].bundle.js?v=[chunkhash:8]',
        publicPath: '/tc-admin/dist/',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             下面这个地址对应webpack.dll.config.js中生成的那个json文件的路径
             这样webpack打包时，就先直接去这个json文件中把那些预编译的资源弄进来
             **/
            manifest: require('./assets/vendor-manifest.json')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ctnui',
            filename: './assets/[name].bundle.js?v=[chunkhash:8]',
            minChunks: function (module) {
                return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('CtnUi') >= 0;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'chunkhash',
            filename: './js/[name].bundle.js?v=[chunkhash:8]',
            chunks: ['ctnui']
        }),
        // 压缩
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: true, // remove all comments
            },
            mangle: true,
            compress: {
                warnings: false,
                drop_debugger: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ]
};
