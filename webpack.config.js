const { withExpo } = require('@expo/webpack-config');

module.exports = function (env, argv) {
  const config = withExpo(env, argv);

  // Change the public path to use the correct base path for GitHub Pages
  config.output.publicPath = '/todo/'; // Update to match your GitHub Pages URL path

  return config;
};
