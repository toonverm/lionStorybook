const fs = require('fs');
const path = require('path');
const babel = require("@rollup/plugin-babel");
const {DEFAULT_EXTENSIONS} = require("@babel/core");
const {Plugin} = require("rollup");

const prebuiltDir = require
  .resolve('@web/storybook-prebuilt/package.json')
  .replace('/package.json', '');

module.exports = {
  stories: [
    //'../{packages,packages-node}/!(ajax)*/README.md',
    //'../{packages,packages-node}/*/docs/*.md',
    //'../{packages,packages-node}/*/docs/!(assets)**/*.md',
    '../README.md',
    '../packages/!(ajax)*/README.md',
  ],
  addons: [],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
  },
  rollupConfig(config) {
    config.plugins.filter(t => t.name === 'babel')[0].targets = [
      'last 3 Chrome major versions',
      'last 3 ChromeAndroid major versions',
      'last 3 Firefox major versions',
      'last 3 Edge major versions',
      'last 3 Safari major versions',
      'last 3 iOS major versions',
    ];

    config.output.format = 'es';

    return config;
  },
};
