const { StorybookWebpackFederationPlugin } = require("storybook-webpack-federation-plugin");
const TsconfigPathsPlugin = require( 'tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require("path")
const process = require("process")

module.exports = {
  cache: false,
  
  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "storybook-static/federation"),
    publicPath: `//localhost:3030/federation/`,
  },

  plugins: [
    new StorybookWebpackFederationPlugin({
      name: "designSystem",
      files: { 
        paths: ["./src/**/*.ts{,x}"],      
      },
    }),
    new Dotenv()
  ],
};
