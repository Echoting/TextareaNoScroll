const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './demo/test-entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
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
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'demo/index.html'
        })
    ],
};