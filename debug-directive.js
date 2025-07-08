const babel = require('@babel/core');
const plugin = require('./async-to-promises.js');

const code = `"use transform-async-to-promises-runtime";`;

const result = babel.transformSync(code, {
  plugins: [[plugin, { externalHelpers: 'global' }]],
  parserOpts: {
    sourceType: 'module'
  }
});

console.log('Input:', code);
console.log('Output:', result.code);
