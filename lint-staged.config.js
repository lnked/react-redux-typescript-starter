module.exports = {
  "**/*.{ts,tsx,js,jsx}": ["tslint --fix", "git add"],
  "**/*.{json,md,scss,yaml,yml}": ["git add"],
};
