/* eslint-disable import/no-commonjs */
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = (ctx) => {
  ctx.modifyWebpackChain(args => {
    const chain = args.chain

    chain.optimization.minimize(true)
    chain.optimization.minimizer('esBuildMinifyPlugin').use(ESBuildMinifyPlugin, [{ target: 'es2015' }])
    chain.module.rule('scss').oneOf('0').use('esbuildLoader').loader('esbuild-loader').options({
      loader: 'css',
      minify: true,
      target: [
        'chrome58',
      ]
    }).before('2')
    chain.module.rule('scss').oneOf('1').use('esbuildLoader').loader('esbuild-loader').options({
      loader: 'css',
      minify: true,
      target: [
        'chrome58',
      ]
    }).before('2')
  })
}
