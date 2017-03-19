module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      url: 'rebase'
    },
    'postcss-cssnext': {},
    cssnano: env === 'production' && {
      safe: true,
      autoprefixer: false
    }
  }
});
