import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 博客文章集合。
 * 新增文章：在 src/content/blog/ 下新建一个 .md 文件，写好下面这些字段即可。
 * 详细写法见根目录 README.md 的「怎么写一篇新文章」。
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** 发布日期，格式 2026-10-06 */
    date: z.coerce.date(),
    /** 摘要，会显示在列表和搜索结果里 */
    description: z.string().default(''),
    tags: z.array(z.string()).default([]),
    /** 草稿：true 时不会出现在网站上（写完改 false 或删掉这一行） */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
