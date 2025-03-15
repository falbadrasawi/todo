const path = require('path');

module.exports = {
  webpack: {
    alias: {
      // Map react-native to react-native-web
      'react-native$': 'react-native-web'
    },
    configure: (webpackConfig) => {
      // Add a new rule to transpile react-native-ratings (and its JSX)
      webpackConfig.module.rules.push({
        test: /\.(js|mjs|jsx)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-native-ratings')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            // Ensure we transpile JSX
            presets: ['@babel/preset-react']
          }
        }
      });
      return webpackConfig;
    }
  },
  babel: {
    presets: ['@babel/preset-react']
  }
};

