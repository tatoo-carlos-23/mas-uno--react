// const webpack = require("webpack");
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/shared/components'),
    },
  },
};