import Merge from 'webpack-merge'
import BaseConfig from './webpack.base.config'
import { Configuration } from 'webpack'
import { resolve } from 'path'

const mainConfig: Configuration = {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../release/main')
    }
}

const rendererConfig: Configuration = {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../release/renderer')
    }
}

export default [Merge(BaseConfig[0], mainConfig), Merge(BaseConfig[1], rendererConfig)]