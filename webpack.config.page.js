const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: {
        vendor: [
            'jquery', 'react', 'react-dom'
        ],
        home: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hash:6].[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }, {
                test: /\.(png|woff|svg|ttf|eot)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[hash:6].[name].css'),

        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),

        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),

        new webpack.LoaderOptionsPlugin({minimize: true}),

        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ],

    resolve: {
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
