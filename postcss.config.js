export default {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {
      mixinsFiles: ['./src/shared/css/mixins.css']
    },
    'postcss-nested': {},
    '@csstools/postcss-global-data': {
      files: ['./src/shared/css/breakpoints.css']
    },
    'postcss-custom-media': {},
    '@csstools/custom-units': {},
    autoprefixer: {}
  }
}
