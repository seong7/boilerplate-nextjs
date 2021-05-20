module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['react-hooks', 'jest', 'prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-shadow': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
    'no-unused-expressions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'warn',
    'prefer-destructuring': 'warn',
    'arrow-body-style': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'no-var-requires': 'off',
    'no-unused-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
  },
};