const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { watch, watchFile } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode : 'development',
    devtool : 'eval-source-map',
    devServer : {
        watchFiles : ["./src/template.html"]
    }
})