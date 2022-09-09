const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: './server/index.js',
    // externalsPresets: { node: true },
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve('server-build'),
      filename: 'index.js'
    },
    module: {
        rules: [
            {
              test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: "file-loader",
              options: {
                name: "public/media/[name].[ext]",
                publicPath: "",
                emit: false
              }
            },
            {
              test: /\.css$/,
              use: "css-loader"
            },
            {
              test: /js$/,
              loader: "babel-loader",
              options: { presets: ["react-app"]}
            }
        ]
    }
}