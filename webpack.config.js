/**
 * Created by xianghiafeng on 2019/12/12.
 */
console.log('打包入口文件')
const path = require('path')
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {  // 出口文件
    // 添加hash可以防止文件缓存，每次都会生成4位的hash串
    filename: '[name].[hash:4].js',
    path: path.resolve('dist')
  },
  module: {  // 处理对应模块
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use:ExtractTextWebpackPlugin.extract({
          use:'css-loader'
        }),
        include: path.resolve(__dirname,'src'),
        exclude: /node_modules/
      },
      {
        test:/\.scss$/,
        use:[
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use:{
          loader:'url-loader',
          options:{
            outputPath:'images/',
            limit:5*1024
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      filename: 'index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
      minify: {removeAttributeQuotes:true}
    }),
    new ExtractTextWebpackPlugin('css/style/css'),
    // 打包前先清空
    new CleanWebpackPlugin()
  ], // 对应的插件
  devServer: { // 开发服务器配置
    contentBase: './dist',
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    compress: true
  },
  mode: "development" // 模式配置
}