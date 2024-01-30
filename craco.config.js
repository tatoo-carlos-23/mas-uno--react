// const webpack = require("webpack");
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
    },
  },
};