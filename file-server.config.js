/**
 * Created by Suger on 2018/1/16.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

// 创建所有目录
var mkdirs = function(dirpath, callback) {
    fs.exists(dirpath, function(exists) {
        if(exists) {
            callback(dirpath);
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), function(){
                fs.mkdir(dirpath, callback);
            });
        }
    });
};

// 支持跨域
app.all('/fileService/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit:'10mb'}));//设置post body数据的大小

//定义文件模版导出功能的服务
app.post('/fileService/exportTemplate', function (req, res) {
    // 获取参数
    var files = req.body.files;
    // 利用fs创建文件夹、写文件
    try {
        files.forEach(function (file) {
            // 1.创建文件夹
            mkdirs(file.path, function () {
                // 2.写入内容，文件已存在的情况下，原内容将被替换
                var filePath = file.path + '/' + file.fileName;
                fs.writeFile(filePath, file.code, function (err) {
                    if(err) console.info(err);
                });
            });
        });
    } catch (e) {
        res.send(JSON.stringify({state: 0, message: '文件写入创建失败！'}));
    }
    // 输出写文件的结果
    res.send(JSON.stringify({state: 1}));
});

//定义文件追加内容模版功能的服务
app.post('/fileService/appendTemplate', function (req, res) {
    // 获取参数
    var files = req.body.files;
    // 利用fs创建文件夹、写文件
    try {
        files.forEach(function (file) {
            // 1.创建文件夹
            mkdirs(file.path, function () {
                fs.readFile(file.path + '/' + file.fileName,{encoding:'utf-8'}, function (err,data) {
                    if(err) console.info(err);
                    if(data.indexOf(file.tabName) == -1){
                        fs.appendFile(file.path + '/' + file.fileName, file.code, function (err) {
                            if(err) console.info(err);
                        });
                    }
                });
            });
        });
    } catch (e) {
        res.send(JSON.stringify({state: 0, message: '文件写入创建失败！'}));
    }
    // 输出写文件的结果
    res.send(JSON.stringify({state: 1}));
});


app.listen(9002, function () {
    console.log('Code Server listening on port 9002');
});
