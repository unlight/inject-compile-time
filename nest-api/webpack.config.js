const transformer = require('ts-di-transformer/transformer').default;
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    bundle: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  // Set target to `node` as this is being run in a Node environment.
  target: 'node',
  externals: [nodeExternals({
    additionalModuleDirs: ['../node_modules']
  })],
  mode: 'development',

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: false,

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            options: {
              // transpileOnly: true, // do not enable
              getCustomTransformers: program => ({
                before: [
                  transformer(program)
                ]
              })
            },
            loader: 'ts-loader',
          },
        ],
      }
    ]
  }
};