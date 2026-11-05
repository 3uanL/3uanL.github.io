/**
 * News / 动态。只留真正拿得出手的两条（按你的要求砍掉了其余条目）。
 *
 * date 格式：
 *   '2026-10'  → 显示为 "Oct 2026"
 *   '2026'     → 显示为 "2026"（只知道年份时这么写）
 *
 * 想恢复被删掉的条目：参考 git 历史，或者直接按下面的格式重新写一条。
 */

export type NewsItem = {
  date: string;
  /** 一句话，建议 10–25 个词 */
  text: string;
  /** 可选：点进去看详情（站内路径或外部链接） */
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026',
    text: 'First-author paper “Physics-Aware UAV Trajectory Design for Mission-Driven Fire Rescue Tasks” published at ACC6G 2026.',
    href: '/publications',
  },
  {
    date: '2025-09',
    text: 'National First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM 2025).',
    href: '/research',
  },
];

/** 首页显示几条（现在是全部） */
export const newsOnHomepage = 6;
