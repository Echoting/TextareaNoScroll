const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './demo/test-entry.js',
    output: {
        filename: 'demo.[hash].js',
        path: path.resolve(__dirname, '../public'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({

            filename: path.resolve(__dirname, '../public/index.html'),
        }),
    ],

    externals: [nodeExternals()]
};