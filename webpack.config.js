// eslint-disable-next-line no-undef, @typescript-eslint/no-require-imports
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-require-imports, no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: './dist',
    hot: true,
    liveReload: false,
  },
  devtool: 'inline-source-map',
  output: {
    filename: `[name].bundle.js`,
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HLS REACT',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        // babel-loader를 이용해 규칙에 적용
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/, // 일반 CSS 파일에 대해 적용
        use: ['style-loader', 'css-loader'],
        // eslint-disable-next-line no-undef
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\*.module.css$/, // 일반 CSS 파일에 대해 적용
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
        // eslint-disable-next-line no-undef
        include: path.resolve(__dirname, 'src'),
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
  },
}
