const { resolve } = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// project: './tsconfig.json',
		project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
	},
	extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
	],
  plugins: [
    '@typescript-eslint',
  ],
	rules: {
    '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/member-delimiter-style': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     "selector": "default",
    //     "format": ["camelCase"]
    //   },
    //   {
    //     "selector": "variable",
    //     "format": ["camelCase", "UPPER_CASE", "PascalCase", "StrictPascalCase"]
    //   },
    //   {
    //     "selector": "parameter",
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "allow"
    //   },
    //   {
    //     "selector": "memberLike",
    //     "modifiers": ["private"],
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "require"
    //   },
    //   {
    //     "selector": "typeLike",
    //     "format": ["PascalCase"]
    //   }
    // ],

		// '@typescript-eslint/array-type': ['warn', {default: 'generic'}],
		'@typescript-eslint/await-thenable': 'warn',
		'@typescript-eslint/ban-ts-comment': 'off',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['warn', '1tbs'],
		'@typescript-eslint/explicit-function-return-type': 'off', // should probably be on
		'@typescript-eslint/explicit-member-accessibility': 'off',
		// '@typescript-eslint/member-delimiter-style': ['warn',
		// 	{
		// 		singleline: {
		// 			delimiter: 'comma',
		// 			requireLast: false
		// 		},
		// 		multiline: {
		// 			delimiter: 'comma',
		// 			requireLast: true
		// 		}
		// 	}
		// ],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-extra-parens': 'off',
		// '@typescript-eslint/no-extra-parens': 'warn',
		'@typescript-eslint/no-extraneous-class': 'warn',
		'@typescript-eslint/no-for-in-array': 'warn',
		'@typescript-eslint/no-inferrable-types': ['warn', {'ignoreParameters': true}],
		'@typescript-eslint/no-misused-promises': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/no-require-imports': 'warn',
		'@typescript-eslint/no-this-alias': [
			'warn',
			{
				allowDestructuring: true,
				allowedNames: ['that']
			}
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-includes': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/prefer-string-starts-ends-with': 'off',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/require-array-sort-compare': 'warn',
		'@typescript-eslint/require-await': 'warn',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/unbound-method': 'warn',
	}
};
