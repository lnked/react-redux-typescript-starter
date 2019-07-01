module.exports = {
  "./src/**/*.ts?(x)": [
    "yarn lint",
    "git add -A"
  ],
  "**/*.{json,md,yaml,yml}": [
    "git add -A"
  ]
}
