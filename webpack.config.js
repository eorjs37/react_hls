const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx','.json'],
    },  
    devServer: {
        historyApiFallback: true,
        port: 3000,  
        static: './dist',
        hot: true,
        open: true
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
            template:'./public/index.html'
        })
    ],
    module: {
        rules: [
          {
            // babel-loader를 이용해 규칙에 적용
            test: /\.jsx?/,
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
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