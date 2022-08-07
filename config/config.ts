import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
export default defineConfig({
  ...defaultSettings,
  routes,
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  proxy: proxy['dev'],
  dva: {
    immer: true,
    hmr: false,
  },
  sass: {},
  // mock:false
});
