const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(project_name, project_desc, theme) {
  return new HtmlWebpackPlugin({
    inject: false,
    template: require('html-webpack-template'),
    bodyHtmlSnippet: '<noscript>You need to enable JavaScript to run this app.</noscript>',
    headHtmlSnippet: '<base href="/"/>',
    headHtmlSnippet: '<link rel="apple-touch-icon" href="images/public/icon_152x152.png">',
    headHtmlSnippet: '<link rel="apple-touch-icon" sizes="152x152" href="images/public/icon_152x152.png">',
    headHtmlSnippet: '<link rel="apple-touch-icon" sizes="180x180" href="images/public/icon_180x180.png">',
    headHtmlSnippet: '<link rel="apple-touch-icon" sizes="167x167" href="images/public/icon_167x167.png">',
    filename: './index.html',
    title: project_name,
    appMountId: 'root',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'
      },
      {
        name: 'description',
        content: project_desc
      },
      {
        name: 'apple-mobile-web-app-title',
        content: project_name
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: theme.colorPrimary
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no'
      }
    ]
  })
}