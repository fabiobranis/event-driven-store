import webpackMerge from 'webpack-merge';
import common from './webpack.config.js';

export default webpackMerge.merge(common, {
  mode: 'production',
});
