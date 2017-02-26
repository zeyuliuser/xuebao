var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry:{
          page1:"./src/js/index.js",
          page2:"./src/js/lend.js",
          page3:"./src/js/new.js",
          page4:"./src/js/login.js",
          page5:"./src/js/register.js"
          },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['react-html-attrs'],
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    output: {
        path: __dirname,
        filename: "./src/[name].bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};
