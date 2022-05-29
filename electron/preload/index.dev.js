// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-dynamic-require */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-commonjs */
const { join } = require('path');
const babel = require('@babel/register');
const { babelConfig } = require('@modern-js/electron-tools');

babel(
  Object.assign(babelConfig, {
    extensions: ['.ts', '.js'],
  }),
);
require(join(__dirname, 'index.ts'));
