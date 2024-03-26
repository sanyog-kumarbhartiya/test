const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for configuring babel
          },
        },
      },
      // Add more rules for handling different file types (e.g., CSS, images)
    ],
  },
  // Add plugins, resolve options, and other configuration as needed
};
