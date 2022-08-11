module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'src/components/*', 'src/layouts/*', 'src/app/*'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        depth: 3,
      },
    ],
    // 'no-undef': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
};
