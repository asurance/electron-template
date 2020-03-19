import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const mainConfig: Configuration = {
    entry: {
        index: resolve(__dirname, '../main/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    target: 'electron-main'
}

const rendererConfig: Configuration = {
    entry: {
        index: resolve(__dirname, '../renderer/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, './index.html')
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    target: 'electron-renderer'
}

export default [mainConfig, rendererConfig]