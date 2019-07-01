module.exports = {
  "./src/**/*.ts?(x)": [
    "yarn lint",
    "git add"
  ],
  "**/*.{json,md,yaml,yml}": [
    "git add"
  ]
}
