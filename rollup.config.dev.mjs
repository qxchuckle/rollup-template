import serve from 'rollup-plugin-serve';
import livereload from "rollup-plugin-livereload";
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import common from './rollup.config.common.mjs';
import { htmlDevTemple } from './html-temple.mjs';

export default Object.assign({}, common, {
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'umd',
      name: "RollupDemo"
    }
  ],
  plugins: [
    ...common.plugins,
    serve({
      port: 3000, // 端口
      contentBase: 'dist', // 输出目录
      openPage: '/index.html', // 打开的是哪个文件
      open: false, // 自动打开浏览器
    }),
    livereload(),
    html(htmlDevTemple),
    postcss({
      extract: 'index.css', // 提取css为独立文件
      minimize: false, // 最小化
      plugins: [], // 支持其它处理css的插件
    }),
  ],
});