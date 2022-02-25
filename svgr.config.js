module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeTitle',
        active: false,
      },
    ],
  },
};
