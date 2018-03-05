const path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ["./static/js/main/routers.js"],
    output: {
        path: path.resolve(__dirname, "./static/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  query: {
                    presets: ['es2015', 'react']
                  }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
