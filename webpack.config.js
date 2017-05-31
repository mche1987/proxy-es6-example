const path = require("path");
const webpack = require("webpack");

const webpackConfig = {
    entry: {
        app: path.join(__dirname, "src")
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "build.js"
    },

    module: { // loaders - rules that tells webpack what loader to use when dealing with a certain file type in the app
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 200000
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },

    devServer: { // configuring a dev environment
        hot: true,
        host: process.env.HOST, // defaults to localhost
        port: process.env.PORT, // defaults to 8080
        stats: "errors-only",
        historyApiFallback: true,
        overlay: {
            errors: true,
            warnings: true
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // adding the autoreloading plugin. No full refresh of page required
    ]

};

module.exports = function(){
    return webpackConfig;
}