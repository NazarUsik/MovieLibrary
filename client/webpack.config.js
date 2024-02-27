const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const sourcePath = path.join(__dirname, './src')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            // `css` files are parsed using `css-loader`
            {
                test: /\.css$/i,
                use: 'css-loader',
            },
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            components: sourcePath,
            '@src': path.resolve(__dirname, './src'),
            // '@typings': path.resolve(__dirname, './typings'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new Dotenv(),
        new CopyWebpackPlugin({patterns: [{from: 'public', filter: filepath => !filepath.includes('index.html')}]}),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 10000,
    },
}
