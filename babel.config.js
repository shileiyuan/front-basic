const presets = [
  [
    '@babel/env',
    {
      targets: { node: '4' },
      // usage会使 polyfill 自动按需引入
      // 如果设置了plugin-tranform-runtime， 那么静态方法的按需引入由transform-runtime完成
      // 实例方法的按需引入仍然由这个usage完成
      useBuiltIns: 'usage',
    },
  ],
];
const plugins = [
  ['@babel/plugin-transform-runtime', { 'corejs': 2 }],
  ["@babel/plugin-syntax-dynamic-import"],
  // 按需加载ramda，如果没有这个rollup会报错
  // https://github.com/rollup/rollup/issues/1220
  ['ramda']
]

module.exports = { presets, plugins }
