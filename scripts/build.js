const webpack = require('webpack')
const rimraf = require('rimraf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { version } = require('../package.json')

rimraf('./dist', () => {})

const config = {
  entry: {
    'poplar': './src/poplar.scss',
    'poplar-self': './src/poplar-self.scss'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  'postcss-preset-env'
                ]
              }
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
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: `[name].${version}.css`
      filename: '[name].css'
    }),

    new webpack.BannerPlugin(`Poplar CSS v${version}`)
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
      rimraf('./dist/poplar-self.js', () => {})
    }
  }
})
