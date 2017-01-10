var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {

    entry: {
        vendor: [
            'jquery', 'react', 'react-dom'
        ],
        home: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        // filename: '[name].js'
        filename: '[hash:6].[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015', 'react'
                    ],
                    plugins: ['transform-es3-property-literals', 'transform-es3-member-expression-literals']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }, {
                test: /\.(png|woff|svg|ttf|eot)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    plugins: [
        // new ExtractTextPlugin('[name].css'),
        new ExtractTextPlugin('[hash:6].[name].css'),

        // 不变
        // new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: '[hash:6].vendor.bundle.js'}),

        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),

        // 设置成生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

    resolve: {
        extensions: [
            '', '.js', '.json', '.scss'
        ],
        alias: {
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie'),
            user: path.resolve(__dirname, 'source/lib/user/user'),
            area: path.resolve(__dirname, 'source/lib/area/area'),
            tip: path.resolve(__dirname, 'source/lib/tip/tip'),
            countdown: path.resolve(__dirname, 'source/lib/countdown/countdown'),
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min'),
            swiper3: path.resolve(__dirname, 'source/lib/swiper3/swiper-3.4.1.min')
        }
    }
};

module.exports = config;
