const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: {
        index: "./main.js" 
    },
    output: {
        filename: "[name].bundle.[hash].js",//[hash]会在后面生成随机hash值
        path: path.join(__dirname, "dist")
    },
    module: { // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]//处理css
            }
        ]
    },
    plugins:[ //配置插件的节点
        // 创建一个htmlWebpackPlugin插件 HTML 放到内存里面
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin() //VueLoaderPlugin 
    ],
    module: {// 这个节点 用于配置所有的第三方模块加载器
        rules: [ //所有的第三方模块的 匹配规则
            {test:/\.css$/,use :['style-loader','css-loader']},//配置处理 .css 文件的第三方loader规则
            {test:/\.less$/,use :['style-loader','css-loader','less-loader']},//配置处理.less 文件的第三方loader规则
            {test:/\.scss$/,use :['style-loader','css-loader','sass-loader']},//配置处理.scss .sass 文件的第三方loader规则
            {test:/\.(JPG|jpg|png|gif|bmp|jpeg)$/,use : 'url-loader?limit=1024&name=[name]-[hash:8].[ext]'},//配置处理 图片路径的 第三方loader规则 limit 是图片大小 如果图片大小小于limit 不会转成base64 大于limit 会转成base64 为了防止图片的重名
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use : 'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}, //处理ES6高级语法
            { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: { //配置 引入VUE 的别名
            'vue$': 'vue/dist/vue.js'
        }
    }
}