module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            quality: 50
          },
          pngquant: {
            quality: 50
          }
        }
      }
    ]
  }
]
