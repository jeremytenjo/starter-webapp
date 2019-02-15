module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    { loader: 'eslint-loader' },
    {
      loader: 'linaria/loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    },
  ],
}
