import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import html from 'rollup-plugin-fill-html';
import copy from 'rollup-plugin-copy';
// import htmlEntry from 'rollup-plugin-html-entry';
import autoExternal from 'rollup-plugin-auto-external';
// import url from 'rollup-plugin-url';
// import image from 'rollup-plugin-image';
import svg from 'rollup-plugin-svg';
import { stylus } from 'svelte-preprocess';

// import rollupStartDev from './rollup_start_dev';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',

  output: {
    sourcemap: true,
    format: 'cjs',
    name: 'app',
    file: 'public/bundle.js'
  },

  plugins: [
    html({
      template: 'src/main.html',
      filename: 'index.html'
    }),

    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css');
      },

      preprocess: [stylus()]
    }),

    copy({
      targets: [
        { src: 'src/images/favicon.png', dest: 'public' }
      ]
    }),

    // url({ limit: 0 }),
    // image(),
    svg(),

    json({
      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: false // Default: true
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: false,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
      preferBuiltins: true
    }),

    commonjs(),

    autoExternal(),

    // In dev mode, call `npm run start:dev` once
    // the bundle has been generated
    // !production && rollupStartDev,

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    // !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
