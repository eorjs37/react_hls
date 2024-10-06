const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
        another: './src/another-module.js',
    },
    devServer: {
        static: './dist',
    },
    devtool: 'inline-source-map',
    output: {
      filename:`[name].bundle.js`,
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },    
    plugins:[
        new HtmlWebpackPlugin({
            title: "HLS REACT",
            template:'./index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
        ],
    },
};