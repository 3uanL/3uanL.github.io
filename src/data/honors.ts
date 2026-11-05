/**
 * 荣誉 / 服务 / 教育 / 技能。
 *
 * 拆成两块：
 * - honors：真正是"奖"的东西（竞赛）
 * - service：学术服务与志愿活动 —— TPC member 不是奖，放这里更合理
 */

export type Honor = {
  year: number | string;
  title: string;
  meta?: string;
};

/** 竞赛类奖项 */
export const honors: Honor[] = [
  {
    year: 2025,
    title: 'National First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM)',
  },
  {
    year: 2026,
    title:
      'Honorable Mention, Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM)',
  },
];

/** 学术服务与志愿活动 */
export const service: Honor[] = [
  {
    year: 2024,
    title: '“Outstanding Individual” Award, SUSTech Alma Mater Visit Program (volunteer outreach)',
  },
  {
    year: 2025,
    title: 'Technical Program Committee (TPC) Member, IEEE Wireless Communications and Networking Conference (WCNC)',
  },
  {
    year: 2026,
    title:
      'Technical Program Committee (TPC) Member, Aerospace Information Perception and Intelligent Processing (AIPIP)',
  },
];

/** 教育背景（显示在 CV 页；首页不展示绩点） */
export const education = {
  school: 'Southern University of Science and Technology (SUSTech)',
  degree: 'Bachelor of Engineering in Communications Engineering',
  period: 'Expected June 2027',
  location: 'Shenzhen, China',
  gpa: '3.79/4.0', // 不想公开就把这一行删掉（CV 页会自动隐藏）
  ielts: '7.0', // 同上
  advisors: ['Prof. Xiaoyang Li', 'Prof. Shuxiang Guo'],
};

/** 技能（只在 CV 页展示，首页不放） */
export const skills: { group: string; items: string }[] = [
  {
    group: 'Programming & Systems',
    items: 'Python, MATLAB, C/C++, Linux, LaTeX, Keil',
  },
  {
    group: 'Algorithms',
    items:
      'Reinforcement Learning, Convex Optimization, Array & Sparse Signal Processing, Physics-Informed Learning',
  },
  {
    group: 'Engineering Tools',
    items: 'SolidWorks, COMSOL, HFSS, STM32/ESP32, Raspberry Pi, OpenMV',
  },
];
