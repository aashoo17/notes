import path from 'path'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import ProvidePlugin from 'webpack/lib/ProvidePlugin'

const config = {
  entry: './src/index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname,'dist'),
    chunkFilename: '[id].js',
    publicPath: ''
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
        exclude: /node_modules/,
        use:[
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options:{
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers:[
                    "> 1%",
                    "last 2 versions"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]'
      }
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    port:3000,
    hot:true,
    inline:true,
    proxy: {
      "/": "http://localhost:4000"
    }
  },
  plugins:[
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default config