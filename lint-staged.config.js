module.exports = {
  'src/**/*.{js?(x),ts?(x),json}': [
    'yarn lint',
    'prettier --write',
  ],
}
