const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const { VuetifyPlugin } = require('webpack-plugin-vuetify')*/
/*const MiniCssExtractPlugin = require("mini-css-extract-plugin");*/
const path = require("path");
const rootPath = path.resolve(__dirname);
const distPath = rootPath + "/wwwroot/dist";



module.exports = function (env, argv) {
    return {
        entry: './wwwroot/src/js/app.js',
        output: {
            path: distPath,
            publicPath: '/wwwroot/dist',
            filename: '[name].js'
        },
        resolve: {
            extensions: [".scss", ".ts", ".js", ".css"],
        },
        module: {
            rules: [
                {
                    test: /\.js$./,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    loader: 'sass-loader'
                }              
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            //new MiniCssExtractPlugin({
            //    filename: './css/[name].css'
            //}),
            new HtmlWebpackPlugin({
                filename: "index.cshtml",
                template: 'Resources/templates/template-layout.cshtml',
                inject: true,
                // favicon: 'src/images/favicon.ico',
                publicPath: "~/dist"
            })            
        ],
        devServer: {
            writeToDisk: true,
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'async',
                minSize: 20000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                }
            }
        }
    }

}