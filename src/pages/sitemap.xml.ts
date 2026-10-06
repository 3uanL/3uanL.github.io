import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { nav } from '../config';
import { projects } from '../data/projects';

/** 自动生成 sitemap.xml，方便搜索引擎收录 */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://3uanL.github.io');
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const paths = [
    ...nav.map((item) => item.href),
    '/news',
    ...projects.map((project) => `/research/${project.id}`),
    ...posts.map((post) => `/blog/${post.id}/`),
  ];

  const urls = [...new Set(paths)]
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
