import typescript from '@rollup/plugin-typescript';
// import json from '@rollup/plugin-json';
// import html from '@rollup/plugin-html';
import nodeResolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

// import livereload from 'rollup-plugin-livereload';
// import serve from 'rollup-plugin-serve';
// import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import { typescript as tsPreprocess } from 'svelte-preprocess';
// import autoExternal from 'rollup-plugin-auto-external';



const plugins = [
  svelte({
    compilerOptions: { dev: true },
    preprocess: [
      tsPreprocess()
    ],
    emitCss: false
  }),

  alias({
    entries: [
      { find: '~', replacement: 'src' }
    ]
  }),

  nodeResolve({
    browser: true,
    dedupe: ['svelte']
  }),

  commonjs(),

  typescript(),



  // autoExternal()

  // html({
  //   attributes: {
  //     html: { lang: 'en' },
  //     title: 'Exif Renamer'
  //   },
  //   fileName: 'index.html',
  //   publicPath: '/'
  // }),

  // json({
  //   preferConst: true,
  //   indent: '  ',
  //   compact: true,
  //   namedExports: false
  // }),

];

// if (!production) {
//   plugins.push(
//     serve({
//       contentBase: src('/'),
//       historyApiFallback: true, // for SPAs
//       port
//     }),

//     livereload({ watch: out('/') })
//   );
// } else {
//   plugins.push(terser());
// }

export default {
  input: 'src/web.ts',

  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'build/web.js'
  },

  plugins,

  watch: {
    clearScreen: false
  }
};
