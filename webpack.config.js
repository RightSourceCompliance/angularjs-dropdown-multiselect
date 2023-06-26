const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/angularjs-dropdown-multiselect.js",
  output: {
    filename: 'angularjs-dropdown-multiselect.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
