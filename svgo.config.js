// multipass: true

// plugins:
//   - prefixIds: false
//   - removeViewBox: false
//   - removeDimensions: true

// js2svg:
//   pretty: true
//   indent: '  '

export default {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'removeDimensions',
  ],
};
