module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
		'./.eslint.typescript.js',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prefer-spread': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': ['warn', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      ignoreDOMComponents: true,
    }],
    'react/jsx-fragments': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'arrow-parens': [2, 'always'],
    'space-before-function-paren': [2, {
      'asyncArrow': 'always',
      'anonymous': 'never',
      'named': 'never'
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
