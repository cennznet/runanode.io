const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['svg-react-loader'],
        },
      ],
    },
  });
};
