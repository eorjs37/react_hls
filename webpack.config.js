// eslint-disable-next-line no-undef, @typescript-eslint/no-require-imports
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: './dist',
    hot: true,
    open: true,
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
        test: /\.css$/,
        use: [
          'style-loader',
          // You have to put in after `css-loader` and before any `pre-precessing loader`
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          'scoped-css-loader',
        ],
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
}
