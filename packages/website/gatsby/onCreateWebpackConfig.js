const path = require('path');

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    externals: {
      // react: 'React',
      // 'react-dom': 'ReactDOM',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/'),
        '@alitajs/antd-plus': path.resolve(__dirname, '../../components/src/index')
      }
    }
  });
};
