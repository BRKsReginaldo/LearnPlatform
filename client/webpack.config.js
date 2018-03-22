const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env, options) => {
  let plugins = [
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new ExtractTextPlugin({filename: '[name].css'})
  ];

  if (options.mode === 'development') {
    plugins.push(new CleanWebpackPlugin(['public']))
  }

  return {
    mode: options.mode,
    entry: './src/index.js',
    output: {
      publicPath: '/',
      path: path.resolve(process.cwd(), 'public'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.styl/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              'postcss-loader',
              'stylus-loader'
            ]
          })
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              'postcss-loader'
            ]
          })
        },
        {
          test: /\.(eot|svg|otf|ttf|woff2?)$/,
          use: 'file-loader'
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  gifsicle: {
                    interlaced: true
                  },
                  mozjpeg: {
                    progressive: true
                  },
                  optipng: {
                    optimizationLevel: 7
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  }
                }
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.(mp4|webm)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        }
      ]
    },
    plugins,
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: [
        '.js',
        '.jsx',
        '.css',
        '.styl',
      ],
      mainFields: [
        'browser',
        'jsnext:main',
        'main'
      ]
    },
    optimization: {
      namedModules: true,
      splitChunks: {
        name: 'vendor',
        minChunks: 2
      }
    },
    target: 'web',
  }
}