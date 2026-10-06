/**
 * 论文列表。改论文只改这个文件。
 *
 * 说明：
 * - authors 写成普通字符串即可，「Yuanhao Liu」会被自动加粗（在 PubList 组件里按 site.name 匹配）。
 * - links 里没有的字段会自动隐藏，所以留空不会出现死链。
 * - 想加论文 PDF 下载：把 PDF 放到 public/files/ 下，然后 links.pdf = '/files/你的文件名.pdf'。
 */

export type Publication = {
  id: string;
  /** 作者列表，按论文上的顺序写 */
  authors: string;
  /** 标题 */
  title: string;
  /** 期刊或会议名（会显示为斜体） */
  venue: string;
  year: number | string;
  /**
   * 状态：published（已发表）/ accepted（已录用）/ submitted（已投稿）/
   * under-review（审稿中）/ preprint（预印本）/ in-prep（撰写中）
   */
  status: 'published' | 'accepted' | 'submitted' | 'under-review' | 'preprint' | 'in-prep';
  /** 可选补充说明，例如 "First author" */
  note?: string;
  links?: {
    doi?: string;
    arxiv?: string;
    pdf?: string;
    code?: string;
    slides?: string;
    poster?: string;
  };
};

export const publications: Publication[] = [
  {
    id: 'uav-fire-rescue',
    authors:
      'Yuanhao Liu, Leheng Qi, Nan Sun, Xiaoyang Li, Changsheng You, Zidong Han, and Yi Gong',
    title: 'Physics-Aware UAV Trajectory Design for Mission-Driven Fire Rescue Tasks',
    venue: 'Submitted to ACC6G',
    year: 2026,
    status: 'submitted',
    note: 'First author',
    links: {
      // TODO: 论文有 DOI/arXiv 后填在这里，例如 doi: '10.1109/XXX.2026.1234567'
    },
  },
  {
    id: 'pose-self-calibration',
    authors:
      'Miaozhang Shen, Zixu Wang, Yuyue Yang, Chunying Li, Yuanhao Liu, and Shuxiang Guo',
    title:
      'An Online Pose Self-Calibration Framework for Deformable Magnetmeter Arrays to Enable Accurate Capsule Endoscope Tracking',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    year: 2025,
    status: 'published',
    links: {
      // TODO: 建议补上 DOI 链接
    },
  },
  {
    id: 'soft-robotic-bandage',
    authors: 'Zixu Wang, Miaozhang Shen, Yuanhao Liu, and Shuxiang Guo',
    title: 'A Novel Flexible Soft Robotic-bandage for Gastrointestinal Wound Coverage Function',
    venue: 'IEEE International Conference on Mechatronics and Automation (ICMA)',
    year: 2025,
    status: 'published',
    links: {},
  },
  {
    id: 'isac-beamforming',
    authors: 'Leheng Qi, Yuanhao Liu, and Xiaoyang Li',
    title: 'Safety-Prioritized ISAC Beamforming for Human-Robot Collaborative Smart Factories',
    venue: 'Manuscript in preparation',
    year: 2026,
    status: 'in-prep',
    links: {},
  },
];
