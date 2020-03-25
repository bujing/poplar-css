const webpack = require('webpack')
const rimraf = require('rimraf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { version } = require('../package.json')

rimraf('./dist', () => {})

const config = {
  entry: {
    poplar: './src/poplar.scss'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].${version}.css`
    })
  ]
}

webpack(config).run((err, stats) => {
  if (err) {
    if (!err.message) {
      console.log('failure, unknown error')
    } else {
      console.log(`failure, ${err.message}`)
    }
  } else {
    if (stats.compilation.errors.length) {
      console.log(stats.compilation.errors[0])
    } else {
      console.log('success')
      // 删除 poplar.js
      rimraf('./dist/poplar.js', () => {})
    }
  }
})
