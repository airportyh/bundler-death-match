const rollupTypescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

export default {
    input: 'src/main.ts',
    plugins: [
        rollupTypescript(),
        resolve(),
        commonjs(),
        terser()
    ],
    output: {
      file: 'rollup-dist/bundle.js',
      format: 'iife'
    }
  };