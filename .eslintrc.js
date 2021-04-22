// eslint-disable-next-line import/no-extraneous-dependencies
const config = require('eslint-config-react-app')

const { overrides: tsOverrides } = config

const jsRules = {
  ...config.rules,
  'spaced-comment': 'error',
  'valid-jsdoc': 'warn',
  'dot-notation': 'off',
  'no-fallthrough': 'error',
  'no-trailing-spaces': 'error',
  'no-var': 'error',
  'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  'object-shorthand': 'error',
  'prefer-const': 'error',
  quotes: ['error', 'single', { avoidEscape: true }],
  'jsx-quotes': ['error', 'prefer-double'],
  semi: ['error', 'never'],
  'space-in-parens': 'error',
  eqeqeq: 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: false,
    },
  ],
  'arrow-parens': 'off',
  'arrow-body-style': 'off',
  'guard-for-in': 'off',
  'no-cond-assign': 'off',
  'no-console': 'off',
  'no-debugger': 'off',
  'no-eval': 'off',
  'no-shadow': 'off',
  'import/no-internal-modules': 'off',
  'import/order': 'warn',
  'import/no-cycle': 'error',
  'import/no-self-import': 'error',
  radix: 'off',
  'eol-last': 'off',
  'max-len': 'off',
  'no-multiple-empty-lines': 'off',
  'space-before-function-paren': 'off',
  'sort-keys': 'off',
  'no-restricted-globals': 'off',
  'array-callback-return': 'off',
}

const tsRules = {
  ...tsOverrides[0].rules,
  'no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: 'styled-components',
          message: 'Please import from styled-components/native.',
        },
      ],
      patterns: ['!styled-components/native'],
    },
  ],
  'import/no-cycle': 'error',
  'import/no-self-import': 'error',
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': ['error'],
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  '@typescript-eslint/array-type': ['warn', { array: true }],
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        Object: 'Avoid using the `Object` type. Did you mean `object`?',
        Function:
          'Avoid using the `Function` type. Prefer a specific function type, like `() => void`, or use `ts.AnyFunction`.',
        Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
        Number: 'Avoid using the `Number` type. Did you mean `number`?',
        String: 'Avoid using the `String` type. Did you mean `string`?',
      },
    },
  ],
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/no-object-literal-type-assertion': 'off',
  '@typescript-eslint/no-var-requires': 'off',
}

module.exports = {
  ...config,
  rules: jsRules,
  overrides: [
    {
      ...tsOverrides[0],
      parserOptions: {
        ...tsOverrides[0].parserOptions,
        project: './tsconfig.json',
      },
      rules: tsRules,
    },
    {
      files: ['**/*.test.js'],
      rules: {
        ...jsRules,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        ...tsRules,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
}
