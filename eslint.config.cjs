/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.github/**',
      '**/.vscode/**',
      '**/.git/**',
      '**/.devcontainer/**',
      '**/.husky/**',
      '**/resources/**',
      '**/themes/**',
      '**/public/**',
      '**/static/**',
      '**/package.json',
      '**/package-lock.json',
      '**/.prettierrc.js',
      '**/.eslintignore',
      "**/commitlint.config.js"
    ]
  },
  {
    files: ["**/*.js"],
    linterOptions: {
      noInlineConfig: true,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'), // Include the Prettier plugin
    },
    rules: {
      'prettier/prettier': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'double'],
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2],
      'lines-around-comment': ['error', { beforeBlockComment: true }],
      'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
      'no-extra-semi': 'error',
      'no-console': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'camelcase': ['error', { properties: 'always' }],
      'function-call-argument-newline': ['error', 'consistent']
    }
  }
];
