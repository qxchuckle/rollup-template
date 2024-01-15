import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import common from './rollup.config.common.mjs';
import { htmlProdTemple } from './html-temple.mjs';

export default Object.assign({}, common, {
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'umd',
      name: "RollupDemo"
    },
    {
      dir: 'dist',
      entryFileNames: '[name].min.js',
      format: 'umd',
      name: "RollupDemo",
      plugins: [terser()],
    }
  ],
  plugins: [
    ...common.plugins,
    html(htmlProdTemple),
    postcss({
      extract: 'index.css', // 提取css为独立文件
      minimize: true, // 最小化
      plugins: [], // 支持其它处理css的插件
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "runtime",
      extensions: ['.js', '.ts'],
    }),
  ],
});