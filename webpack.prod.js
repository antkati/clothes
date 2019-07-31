const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require("path");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'md4',
            hashDigest: 'base64',
            hashDigestLength: 4
        })
    ],
    optimization: {
        moduleIds: 'hashed',
        minimizer: [
            new UglifyJsPlugin({ sourceMap: false }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
});