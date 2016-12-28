var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        filter: path.resolve(__dirname, 'source/components/filter/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/filter'),
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
            countdown: path.resolve(__dirname, 'source/lib/countdown/countdown'),
            carselect: path.resolve(__dirname, 'source/lib/carselect/carselect'),
            location: path.resolve(__dirname, 'source/lib/location/location'),
            cityselect: path.resolve(__dirname, 'source/lib/cityselect/cityselect'),
            mask: path.resolve(__dirname, 'source/lib/mask/mask'),
            dialog: path.resolve(__dirname, 'source/lib/dialog/dialog'),
            testdrive: path.resolve(__dirname, 'source/lib/testdrive/testdrive'),
            pikaday: path.resolve(__dirname, 'source/lib/pikaday/pikaday')
        }
    }
};

module.exports = config;
