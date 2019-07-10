const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './demo/test-entry.js',
    output: {
        filename: 'demo.[hash].js',
        path: path.resolve(__dirname, '../public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
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
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'demo/index.html',
            filename: path.resolve(__dirname, '../public/index.html')
        })
    ],
};