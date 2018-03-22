module.exports = ({env = 'development'}) => {
  let plugins = {
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {
        browsers: ['last 2 versions', '> 5%']
      }
    }
  };

  if (env !== 'development') {
    plugins['postcss-clean'] = {}
  }

  return plugins
}