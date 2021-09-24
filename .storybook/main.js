const fs = require('fs');
const path = require('path');

module.exports = {
  stories: [
    //'../{packages,packages-node}/!(ajax)*/README.md',
    //'../{packages,packages-node}/*/docs/*.md',
    //'../{packages,packages-node}/*/docs/!(assets)**/*.md',
    '../README.md',
    '../packages/!(ajax)*/README.md',
  ],
  addons: [
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
  },
  rollup: config => {
    // temporarily hard copy all needed global files as all tested rollup plugins flatten the
    // directory structure
    // `rollup-plugin-copy` might work if issue 37 is resolved
    // https://github.com/vladshcherbin/rollup-plugin-copy/issues/37
    config.plugins.push({
      generateBundle() {
/*        this.emitFile({
          type: 'asset',
          fileName: 'packages/form-integrations/dev-assets/FormatMixinDiagram-1.svg',
          source: fs.readFileSync(
            path.join(
              __dirname,
              '../packages/form-integrations/dev-assets/FormatMixinDiagram-1.svg',
            ),
          ),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'packages/form-integrations/dev-assets/FormatMixinDiagram-2.svg',
          source: fs.readFileSync(
            path.join(
              __dirname,
              '../packages/form-integrations/dev-assets/FormatMixinDiagram-2.svg',
            ),
          ),
        });
        this.emitFile({
          type: 'asset',
          fileName: 'packages/form-integrations/dev-assets/FormatMixinDiagram-3.svg',
          source: fs.readFileSync(
            path.join(
              __dirname,
              '../packages/form-integrations/dev-assets/FormatMixinDiagram-3.svg',
            ),
          ),
        });*/
      },
    });
  },
};
