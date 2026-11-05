/**
 * Learning Log 的目录结构（顶层领域 → 课程）。
 *
 * 笔记本身是 Markdown 文件，放在：
 *   src/content/learning/<domain>/<course>/<note>.md
 * 例如：src/content/learning/ai/reinforcement-learning/mdp.md
 *
 * 这里只定义"领域/课程怎么显示"。加一门新课 = 这里加一条 + 建对应目录 + 写 md。
 */

export type Domain = {
  slug: string;
  title: string;
  /** 一句话说明这个领域记什么 */
  blurb: string;
};

export type Course = {
  domain: string;
  slug: string;
  title: string;
  blurb: string;
  /** 排序用，小的在前 */
  order?: number;
};

export const domains: Domain[] = [
  {
    slug: 'paper-reading',
    title: 'Paper Reading',
    blurb: 'Papers I read closely enough to re-derive, plus what I took away from them.',
  },
  {
    slug: 'math',
    title: 'Math & Optimization',
    blurb: 'Convex optimization, probability and linear algebra — the parts I had to redo to really get them.',
  },
  {
    slug: 'communications',
    title: 'Communications',
    blurb: 'Wireless systems, signal processing, and the 3GPP specifications behind them.',
  },
  {
    slug: 'ai',
    title: 'AI',
    blurb: 'Reinforcement learning, learning theory, and the machine-learning toolkit I actually use.',
  },
];

export const courses: Course[] = [
  {
    domain: 'paper-reading',
    slug: 'reading-list',
    title: 'Reading list',
    blurb: 'One note per paper: the problem, the key idea, and what I would do differently.',
    order: 1,
  },
  {
    domain: 'math',
    slug: 'convex-optimization',
    title: 'Convex optimization',
    blurb: 'From convex sets to duality, with the derivations I had to write out by hand.',
    order: 1,
  },
  {
    domain: 'communications',
    slug: '3gpp',
    title: '3GPP & standards',
    blurb: 'Reading TS/TR documents without drowning: how to find the clause that matters.',
    order: 1,
  },
  {
    domain: 'communications',
    slug: 'wireless-systems',
    title: 'Wireless systems',
    blurb: 'Channel models, MIMO, and the physical layer intuition behind the equations.',
    order: 2,
  },
  {
    domain: 'ai',
    slug: 'reinforcement-learning',
    title: 'Reinforcement learning',
    blurb: 'Working through an RL course, one chapter at a time — derivations and experiments.',
    order: 1,
  },
];

export function coursesOf(domain: string) {
  return courses.filter((c) => c.domain === domain).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function findDomain(slug: string) {
  return domains.find((d) => d.slug === slug);
}

export function findCourse(domain: string, slug: string) {
  return courses.find((c) => c.domain === domain && c.slug === slug);
}
