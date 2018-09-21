// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  name: 'MyModule',
  plugins: [
    resolve(),
    commonjs()
  ]
};