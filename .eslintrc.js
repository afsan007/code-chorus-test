const sharedNamingConventions = [
  {
    selector: 'parameter',
    modifiers: ['destructured'],
    format: null,
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
  },
  {
    selector: 'objectLiteralProperty',
    format: null /** to cover some package options */,
  },
];

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: ['prefer-arrow', 'unicorn', 'jsdoc', 'import', 'prettier', '@next/next'],
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // prettier
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'off', // conflicts with prettier

    // enabled eslint rules
    'unicorn/explicit-length-check': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'no-useless-return': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-var': 'error',
    'no-redeclare': 'off',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'no-unused-expressions': 'error',
    'no-new-func': 'error',
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     pathGroups: [
    //       {
    //         pattern: '$*/**',
    //         group: 'internal',
    //       },
    //       {
    //         pattern: 'react',
    //         group: 'builtin',
    //         position: 'before',
    //       },
    //     ],
    //     groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
    //     pathGroupsExcludedImportTypes: ['react'],
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'spaced-comment': 'error',
    'no-param-reassign': 'error',

    // prefer-arrow rules
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      { singleReturnOnly: true, classPropertiesAllowed: true },
    ],

    // import rules
    // TODO: disabled due to many conflicts with yarn pnp
    // 'import/no-duplicates': 'error',
    // 'import/no-extraneous-dependencies': 'error',
    // 'import/no-unresolved': [
    //   'error',
    //   { ignore: ['\\$.*$'] }, // all our aliases start with a $ sign
    // ],

    // disabled eslint rules
    'jsdoc/valid-types': 'off',
    'arrow-body-style': 'off', // TODO: this may be improved
    'arrow-parens': ['off', 'as-needed'],
    complexity: 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'one-var': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'valid-typeof': 'off',
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: ['error', 'smart'],
    'no-shadow': 'error',

    // jsdoc rules
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/newline-after-description': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
        // setting project option to undefined increases performance and prevents memory leak in the last versions:))
        // we may need to set this to undefined again if leak happens
        // project: undefined,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // enabled typescript rules
        '@typescript-eslint/naming-convention': [
          'error',
          ...sharedNamingConventions,
          {
            selector: 'variable',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-redeclare': ['error'],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Function: false, // e.g getProcessorName
              object: false, // is different with Object e.g. HttpError
            },
          },
        ],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/typedef': [
          'error',
          {
            arrowParameter: false,
            propertyDeclaration: false,
            memberVariableDeclaration: false,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],

        // comment these if you don't want to specify projects option on TypeScript parser
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],

        'spaced-comment': ['error', 'always', { markers: ['/'] }], // e.g. next-env.d.ts
        'no-undef': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-shadow': 'off',
        'no-unused-vars': 'off',

        // unsupported tslint rules
        // TODO: please refer to https://github.com/typescript-eslint/typescript-eslint/blob/90b36ddac2f6de006fd59f2a9234df1eb2d1606e/packages/eslint-plugin/ROADMAP.md
        // 'object-shorthand-properties-first'
        // tslint-consistent-codestyle
        // tslint-microsoft-contrib
      },
    },
    {
      files: ['*.tsx'],
      settings: {
        react: {
          version: '17.0.2',
        },
        linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
      },
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      plugins: ['react-hooks', '@next/eslint-plugin-next'],
      rules: {
        // Turn off rules that are no longer necessary in React 17 and in Next.js
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        // react rules
        // react propTypes are not needed in a TypeScript only environment
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' },
        ],
        'react/jsx-pascal-case': 'error',
        'react/self-closing-comp': 'error',
        'jsdoc/require-returns': 0,

        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          ...sharedNamingConventions,
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase' /** cover styled components */],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: [
              'camelCase',
              'UPPER_CASE',
              'PascalCase' /** cover styled components */,
            ],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            modifiers: ['exported'],
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              FunctionComponent: {
                message: 'use React.FC instead',
                fixWith: 'FC',
              },
            },
          },
        ],
      },
    },
    {
      files: ['**/src/pages/**/*.tsx'],
      rules: {
        'max-lines': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
      },
    },
    {
      files: ['**/src/application/components/**/*.tsx'],
      rules: {
        'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
      },
    },
  ],
};
