module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:boundaries/recommended',
    './.eslint.typescript.js',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    '@babel',
    'react',
    'react-hooks',
    'boundaries',
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
    'complexity': ['warn', { max: 5 }],
    'max-params': ['warn', 4],
    'arrow-parens': [1, 'as-needed'],
    'prefer-spread': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': ['warn', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      ignoreDOMComponents: true,
    }],
    'react/jsx-fragments': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'operator-linebreak': [1, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'no-extra-semi': 1,
    'semi': ['warn', 'always'],
    'semi-spacing': [1, { before: false, 'after': true }],
    'comma-spacing': ['warn', { before: false, 'after': true }],
    'space-before-function-paren': [1, {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    'no-restricted-imports': ['error', {
      paths: [
        {
          name: 'styled-components',
          message: 'Please import from styled-components/macro.',
        },
        {
          name: 'reflexbox',
          message: 'Please import from reflexbox/styled-components.',
        },
      ],
      patterns: ['!styled-components/macro', '!reflexbox/styled-components'],
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'boundaries/types': ['helpers', 'models', 'views', 'controllers'],
    'boundaries/ignore': ['src/**/*.spec.(j|t)sx?', 'src/**/*.test.(j|t)sx?'],
    'boundaries/alias': {
      components: 'src/components',
      helpers: 'src/helpers',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
