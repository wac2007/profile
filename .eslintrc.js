module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['compat'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
};
