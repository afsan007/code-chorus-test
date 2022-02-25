const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    'storybook-addon-locale/register',
  ],
  stories: [
    '../src/application/**/*.stories.mdx',
    '../src/application/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  features: {
    postcss: false,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  staticDirs: ['../public'],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.stats = 'minimal';
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': require.resolve('styled-components'),
      'next/router': require.resolve('next/router'),
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    );

    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        logger: {
          infrastructure: 'silent',
          issues: 'webpack-infrastructure',
        },
        typescript: {
          enabled: true,
          mode: 'write-references',
          diagnosticOptions: {
            syntactic: true,
            semantic: true,
          },
        },
        eslint: {
          enabled: false,
          files: ['./src/**/*.{ts, tsx, js, jsx, json}'],
        },
      }),
    );

    return config;
  },
};
