var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        guide: path.resolve(__dirname, 'source/components/guide/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/guide'),
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
            tip: path.resolve(__dirname, 'source/lib/tip/tip')
        }
    }
};

module.exports = config;
