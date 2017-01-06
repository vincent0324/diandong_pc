var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        mall: path.resolve(__dirname, 'source/components/mall/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/mall'),
        filename: '[name].debug.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(png|woff|svg|ttf|eot)$/,
                loader: 'url-loader?limit=10000' // 限制大小小于10k的
            }
        ]
    },

    plugins: [],

    resolve: {
        extensions: [
            '', '.js', '.json', '.scss'
        ],
        alias: {
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie'),
            user: path.resolve(__dirname, 'source/lib/user/user'),
            area: path.resolve(__dirname, 'source/lib/area/area'),
            tip: path.resolve(__dirname, 'source/lib/tip/tip'),
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min'),
            swiper3: path.resolve(__dirname, 'source/lib/swiper3/swiper-3.4.1.min'),
            countdown: path.resolve(__dirname, 'source/lib/countdown/countdown')
        }
    }
};

module.exports = config;
