import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';

import { src, out, production } from './helpers';


const plugins = [
  typescript(),

  resolve({
    browser: false,
    preferBuiltins: true
  }),

  alias({
    resolve: ['.ts', '.js'],
    entries: [
      { find: '@', replacement: 'src' }
    ]
  }),

  json({
    preferConst: true,
    indent: '  ',
    compact: true,
    namedExports: false
  }),

  commonjs(),

  autoExternal(),

  production && terser()
];

export default {
  input: src('electron/main.ts'),

  output: {
    sourcemap: false,
    format: 'cjs',
    name: 'app',
    file: out('electron.js')
  },

  external: ['electron'],

  plugins,

  watch: {
    clearScreen: false
  }
};
