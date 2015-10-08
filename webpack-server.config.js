module.exports = {
    context: __dirname + "/src/main/resources/js",
    entry: "./server-entry.js",
    output: {
        filename: "server-bundle.js",
        path: __dirname + "/src/main/resources/static"
    },
    module: {
        loaders: [
            {
                test: /\.js(x|)?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
    }
};