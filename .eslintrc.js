module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:boundaries/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'prettier/@typescript-eslint',
    './.eslint.typescript.js',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['@babel', 'react', 'react-hooks', 'boundaries', 'prettier', 'sonarjs', 'smells'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'smells/no-switch': 1,
    'smells/no-setinterval': 1,
    'smells/no-complex-chaining': 1,
    'smells/no-complex-switch-case': 1,
    'smells/no-setinterval': 1,
    'smells/no-this-assign': 1,
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    complexity: ['warn', { max: 5 }],
    'max-params': ['warn', 4],
    'arrow-parens': [1, 'as-needed'],
    'prefer-spread': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'operator-linebreak': [
      1,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'no-extra-semi': 1,
    semi: ['warn', 'always'],
    'semi-spacing': [1, { before: false, after: true }],
    'comma-spacing': ['warn', { before: false, after: true }],
    'space-before-function-paren': [
      1,
      {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
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
      },
    ],
    'boundaries/no-private': [0, { allowUncles: false }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'boundaries/elements': [
      {
        type: 'helpers',
        pattern: 'helpers/*',
      },
      {
        type: 'components',
        pattern: 'components/*',
      },
      {
        type: 'fragments',
        pattern: 'fragments/*',
      },
      {
        type: 'pages',
        pattern: 'pages/*',
      },
      {
        type: 'modules',
        pattern: 'modules/*',
      },
      {
        type: 'layouts',
        pattern: 'layouts/*',
      },
      {
        type: 'helpers',
        pattern: 'helpers/*',
      },
    ],
    'boundaries/ignore': ['src/**/*.spec.(j|t)sx?', 'src/**/*.test.(j|t)sx?'],
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
