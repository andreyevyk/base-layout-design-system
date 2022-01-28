const TsconfigPathsPlugin = require( 'tsconfig-paths-webpack-plugin');
const { withStorybookModuleFederation} = require('storybook-module-federation');

const storybookConfig = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: 'webpack5',
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
      
    ];
    return config;
  }
};
const moduleFederationConfig = {
  name: "design_system",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Button": "./src/components/Button"
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};

module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);