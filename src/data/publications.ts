/**
 * 论文列表（以 2026-11 版 CV 为准）。
 *
 * 说明：
 * - authors 写普通字符串，「Yuanhao Liu」会自动加粗（PubList 组件按 site.name 匹配）。
 * - projectId 指向 src/data/projects.ts 里的项目 id。首页把「项目 + 对应论文」合并成一张卡片，
 *   靠这个字段把论文行挂到项目卡片下面；没有对应项目就留空。
 * - links 里没有的字段会自动隐藏，不会出现死链。加论文 PDF 下载：
 *   把 PDF 放到 public/files/，然后写 links.pdf = '/files/文件名.pdf'。
 */

export type Publication = {
  id: string;
  authors: string;
  title: string;
  /** 期刊或会议全名 */
  venue: string;
  year: number | string;
  status: 'published' | 'accepted' | 'submitted' | 'under-review' | 'preprint' | 'in-prep';
  note?: string;
  /** 对应项目的 id（首页合并展示用） */
  projectId?: string;
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
    id: 'acc6g-uav',
    authors:
      'Yuanhao Liu, Leheng Qi, Nan Sun, Xiaoyang Li, Changsheng You, Zidong Han, and Yi Gong',
    title: 'Physics-Aware UAV Trajectory Design for Mission-Driven Fire Rescue Tasks',
    venue: '2026 2nd Asia Conference on Communications and 6G (ACC6G)',
    year: 2026,
    status: 'published',
    note: 'First author',
    projectId: 'uav-fire-rescue',
    links: {
      doi: 'https://doi.org/10.1109/ACC6G70208.2026.11605593',
    },
  },
  {
    id: 'icma-bandage',
    authors: 'Zixu Wang, Miaozhang Shen, Yuanhao Liu, and Shuxiang Guo',
    title: 'A Novel Flexible Soft Robotic-bandage for Gastrointestinal Wound Coverage Function',
    venue: 'IEEE International Conference on Mechatronics and Automation (ICMA)',
    year: 2025,
    status: 'published',
    projectId: 'icma-soft-robot',
    links: {
      doi: 'https://doi.org/10.1109/ICMA65362.2025.11120828',
    },
  },
  {
    id: 'isac-beamforming',
    authors: 'Leheng Qi, Yuanhao Liu, and Xiaoyang Li',
    title: 'Safety-Prioritized ISAC Beamforming for Human-Robot Collaborative Smart Factories',
    venue: 'Manuscript in preparation',
    year: 2026,
    status: 'in-prep',
    projectId: 'isac-beamforming',
    links: {},
  },
];

/** 按 projectId 找对应的论文（首页合并卡片用） */
export function publicationForProject(projectId: string) {
  return publications.find((p) => p.projectId === projectId);
}
