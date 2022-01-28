const { StorybookWebpackFederationPlugin } = require("storybook-webpack-federation-plugin");
const  HtmlWebPackPlugin  = require("html-webpack-plugin");
const TsconfigPathsPlugin = require( 'tsconfig-paths-webpack-plugin');

const path = require("path")

module.exports = {
  output: {
    path: path.resolve(__dirname, "storybook-static/federation"),
    publicPath: "//localhost:3030/federation/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()]
  },
  devServer: {
    port: 4005,
    historyApiFallback: true,
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
  plugins: [
    new StorybookWebpackFederationPlugin({
      name: "designSystem",
      files: { 
        paths: ["./src/components/*.ts{,x}"],
      },
    }),
  ],
};
