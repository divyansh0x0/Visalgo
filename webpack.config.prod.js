const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.',
                    globOptions: {
                        ignore: ['**/index.html'] // HtmlWebpackPlugin handles this
                    }
                }
            ]
        })
    ]
});
