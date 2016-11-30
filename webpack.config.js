var webpack = require('webpack');
var path = require('path');
var Modernizr = path.resolve(__dirname, 'source/lib/modernizr/modernizr.js');

var config = {
    entry: {
        topbar: path.resolve(__dirname, 'source/components/topbar/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/topbar'),
        filename: '[name].js'
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

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;
