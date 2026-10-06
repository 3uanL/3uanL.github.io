/**
 * News / 动态。按时间倒序显示（最新的写在最上面）。
 *
 * date 格式：
 *   '2026-10'  → 显示为 "Oct 2026"
 *   '2026'     → 显示为 "2026"（只知道年份时这么写）
 *
 * ⚠️ 下面这些条目是我从你的简历里整理出来的，日期只精确到简历上写了什么。
 *    请自己核对一遍，尤其是只写了年份的那几条；改完保存即可。
 */

export type NewsItem = {
  date: string;
  /** 一句话，建议 15–40 个词 */
  text: string;
  /** 可选：点进去看详情（站内路径或外部链接） */
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-07',
    text: 'Started a project on safety-prioritized ISAC beamforming for human–robot collaborative smart factories (manuscript in preparation).',
    href: '/research/isac-beamforming',
  },
  {
    date: '2026',
    text: 'First-author paper “Physics-Aware UAV Trajectory Design for Mission-Driven Fire Rescue Tasks” submitted to ACC6G 2026.',
    href: '/publications',
  },
  {
    date: '2026',
    text: 'Received an Honorable Mention in the Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM 2026).',
  },
  {
    date: '2026',
    text: 'Selected as Project Lead of a University Student Innovation and Entrepreneurship Training Program project.',
  },
  {
    date: '2026',
    text: 'Joined the SUSTech “Climbing Plan” Special Research Funding program as a project member.',
  },
  {
    date: '2026',
    text: 'Technical Program Committee (TPC) member, Aerospace Information Perception and Intelligent Processing (AIPIP 2026).',
  },
  {
    date: '2025-11',
    text: 'Started the UAV fire-rescue trajectory design project at ICElab, SUSTech, as first author.',
    href: '/research/uav-fire-rescue',
  },
  {
    date: '2025-09',
    text: 'Won the National First Prize in the China Undergraduate Mathematical Contest in Modeling (CUMCM 2025).',
    href: '/research/cumcm-2025',
  },
  {
    date: '2025',
    text: 'Technical Program Committee (TPC) member, IEEE Wireless Communications and Networking Conference (WCNC 2025).',
  },
  {
    date: '2025',
    text: 'Paper on online pose self-calibration for deformable magnetometer arrays published in IEEE Trans. Instrum. Meas. (TIM).',
    href: '/publications',
  },
  {
    date: '2025',
    text: 'Paper on a flexible soft robotic bandage for gastrointestinal wound coverage presented at IEEE ICMA 2025.',
    href: '/publications',
  },
  {
    date: '2025-03',
    text: 'Joined Guolab, SUSTech, working on magnetic localization for capsule robots.',
    href: '/research/magnetic-dipole-pinn',
  },
];

/** 首页只显示最新几条，完整的在 /news */
export const newsOnHomepage = 6;
