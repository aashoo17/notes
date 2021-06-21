const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.min.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 10000,
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    devServer:{
        port: 3000,
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin()
    ]
}

module.exports = config