const path = require('path');
module.exports = {
    entry: "./src/app.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    module: {
    // configuration regarding modules

        rules: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }]
  }
}
