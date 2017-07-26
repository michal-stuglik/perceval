const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
// require("babel-polyfill");
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),
    // Entry points to the project
    entry: {
        index: ['./index.js',],
        vendor: ['react', 'react-dom', 'react-hot-loader'],
    },
    // Server Configuration options
    devServer: {
        contentBase: path.resolve(__dirname, './src'),  // developer mode
        publicPath: '/assets',
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist/assets'), // developer mode
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },

    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'babel-loader',
        //         query: {
        //             cacheDirectory: true,
        //         },
        //     },
        // ],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /.+\.config.js/],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
            },

            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {
                test: /\.(gif|jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                },
            },
            {test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff"},
            {test: /\.(ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]"},
        ]
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            'ReactDOM': 'react-dom',
            '_': 'lodash',
        }),
        new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true}),
        // new webpack.optimize.UglifyJsPlugin({sourceMap: true, minimize: true}),
        // new webpack.DefinePlugin({
        //     __VERSION__: JSON.stringify(gitRevisionPlugin.version()),
        //     __COMMIT_HASH__: JSON.stringify(gitRevisionPlugin.commithash()),
        //     __BRANCH__: JSON.stringify(gitRevisionPlugin.branch()),
        // }),
    ],
};

