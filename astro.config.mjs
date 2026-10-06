// @ts-check
import { defineConfig } from 'astro/config';
// Astro 7 默认用新的 Sätteri 处理器。因为要在博客里写数学公式，
// 这里显式切回官方支持的 unified 处理器（remark/rehype 管线）并挂上 KaTeX。
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// 站点级配置。改域名/仓库名时，只需要改这里的 site。
// 用户名是 3uanL，仓库名是 3uanL.github.io（GitHub Pages 根站点约定）。
export default defineConfig({
  site: 'https://3uanL.github.io',
  // 静态站：构建产物直接放到 dist/，GitHub Pages 托管
  output: 'static',
  trailingSlash: 'ignore',
  markdown: {
    // 支持 Markdown 里写数学公式：$行内公式$ 与 $$独立公式$$
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    // 代码块双主题：浅色/深色各一套，由 global.css 里的 --shiki-* 变量切换
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-default' },
      defaultColor: false,
      wrap: true,
    },
  },
});
