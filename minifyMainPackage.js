/* eslint-disable import/no-commonjs */
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (ctx) => {
  ctx.modifyWebpackChain(args => {
    const chain = args.chain
    // chain.optimization.delete('minimizer')
    chain.merge({
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: ['common.js', 'taro.js', 'vendors.js', 'app.js', 'pages/home/index.js'],
            parallel: true,
            // minify: TerserPlugin.swcMinify,
            cache: true,
            extractComments: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                arrows: false,
                collapse_vars: false,
                comparisons: false,
                computed_props: false,
                hoist_funs: false,
                hoist_props: false,
                hoist_vars: false,
                inline: false,
                loops: false,
                negate_iife: false,
                properties: false,
                reduce_funcs: false,
                reduce_vars: false,
                switches: false,
                toplevel: false,
                typeofs: false,
                booleans: true,
                if_return: true,
                sequences: true,
                unused: true,
                conditionals: true,
                dead_code: true,
                evaluate: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
          }),
        ],
      },
    })
  })
}
