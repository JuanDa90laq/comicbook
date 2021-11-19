module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://getxkcd.vercel.app/',
    host: 'localhost',
    https: true
  }
}
