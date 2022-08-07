export default {
  dev: {
    '/api': '',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
  test: {},
};
