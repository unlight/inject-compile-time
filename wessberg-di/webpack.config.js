const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {di} = require('@wessberg/di-compiler');

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
  externalsPresets: { node: true },
  externals: [nodeExternals({
    additionalModuleDirs: ['../node_modules']
  })],
  // externals: {
  //   'request': 'commonjs2 request',
  //   '@wessberg/di': 'commonjs2 @wessberg/di'
  // },
  mode: 'development',

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            options: {
              getCustomTransformers: (program) => di({program}),
            },
            loader: 'ts-loader',
          },
        ],
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader',
      //   options: {
      //     // ... other loader's options
      //     getCustomTransformers: program => ({
      //       before: [
      //         transformer(program)
      //       ]
      //     })
      //   }
      // }
    ]
  }
};