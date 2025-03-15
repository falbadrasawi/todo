const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'react-native$': 'react-native-web'
    },
    configure: (webpackConfig) => {
      // Add a rule to transpile react-native-ratings (if needed)
      webpackConfig.module.rules.push({
        test: /\.(js|mjs|jsx)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-native-ratings')
        ],
        use: {
          loader: 'babel-loader',
          options: {
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
