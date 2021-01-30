import createEmotion from '@emotion/css/create-instance';

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache
} = createEmotion({
  key: 'exif',
  // TODO: Enable this correctly
  nonce: '2726c7f26c'
});