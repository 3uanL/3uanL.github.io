import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://3uanL.github.io');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', base).href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
