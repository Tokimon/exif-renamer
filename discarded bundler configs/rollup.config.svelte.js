import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import html from '@rollup/plugin-html';
// import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

// import htmlEntry from 'rollup-plugin-html-entry';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
// import copy from 'rollup-plugin-copy';
import autoExternal from 'rollup-plugin-auto-external';
// import svgIcons from 'rollup-plugin-svg-icons';
// import svelteSvg from 'rollup-plugin-svelte-inline-svg';

// import { stylus } from 'svelte-preprocess';

import { src, out, production } from './helpers';



const port = 3000;



const plugins = [
  // htmlEntry(),

  svelte({
    preprocess: sveltePreprocess(),
    emitCss: false
  }),

  typescript(),

  resolve({
    dedupe: ['svelte'],
    preferBuiltins: true
  }),

  alias({
    resolve: ['.svelte', '.js'],
    entries: [
      { find: '@', replacement: 'src' }
    ]
  }),

  html({
    attributes: {
      html: { lang: 'en' },
      title: 'Exif Renamer'
    },
    fileName: 'index.html',
    publicPath: out('/')
  }),


  // copy({
  //   targets: [
  //     { src: src('images/favicon.png'), dest: 'public' }
  //   ]
  // }),

  // image({
  //   exclude: '**/*.svg'
  // }),

  // svelteSvg({
  //   include: '**/inline/**/*.svg',
  //   exclude: '**/*.svg'
  // }),

  // svgIcons({
  //   inputFolder: src('ui/svg/icons'),
  //   output: out('icons.svg')
  // }),

  json({
    preferConst: true,
    indent: '  ',
    compact: true,
    namedExports: false
  }),

  commonjs(),

  autoExternal()
];

if (!production) {
  plugins.push(
    serve({
      contentBase: src('/'),
      historyApiFallback: true, // for SPAs
      port
    }),

    livereload({ watch: out('/') })
  );
} else {
  plugins.push(terser());
}

export default {
  input: src('main.ts'),

  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: out('bundle.js')
  },

  plugins,

  watch: {
    clearScreen: false
  }
};
