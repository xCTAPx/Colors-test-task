let path = require("path");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: [
        "babel-polyfill",
        "./src/js/index.js"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules)/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    MiniExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts",
                    publicPath: "fonts"
                }
            }
        ]
    },
    plugins: [
        new MiniExtractPlugin({
            filename: "styles.css"
        }),
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/imgs/favicon.png',
            minify: false
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets/imgs',
            to: 'imgs'
        }])
    ]
};

module.exports = (environment, options) => {
    let production = options.mode === "production";

    config.devtool = production ? false : "eval-sourcemap";

    return config;
}