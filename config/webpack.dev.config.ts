import Merge from 'webpack-merge'
import { resolve } from 'path'
import BaseConfig from './webpack.base.config'
import { Configuration } from 'webpack'

const mainConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../debug/main')
    }
}

const rendererConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../debug/renderer')
    }
}

export default [Merge(BaseConfig[0], mainConfig), Merge(BaseConfig[1], rendererConfig)]