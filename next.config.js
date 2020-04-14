const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ttf)$/,
      use: {
        loader: 'url-loader'
      }
    })

    return config
  }
})