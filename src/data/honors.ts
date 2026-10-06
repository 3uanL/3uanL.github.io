/** 荣誉与获奖。倒序写，最新的在最上面。 */

export type Honor = {
  year: number | string;
  title: string;
  /** 可选的补充说明（颁发机构、级别等） */
  meta?: string;
};

export const honors: Honor[] = [
  {
    year: 2026,
    title: 'Honorable Mention, Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM)',
  },
  {
    year: 2026,
    title: 'Project Lead, University Student Innovation and Entrepreneurship Training Program',
  },
  {
    year: 2026,
    title: 'Project Member, SUSTech “Climbing Plan” Special Research Funding',
  },
  {
    year: 2026,
    title: 'Technical Program Committee (TPC) Member, Aerospace Information Perception and Intelligent Processing (AIPIP)',
  },
  {
    year: 2025,
    title: 'National First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM)',
  },
  {
    year: 2025,
    title: 'Technical Program Committee (TPC) Member, IEEE Wireless Communications and Networking Conference (WCNC)',
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

/** 技能（只在 CV 页展示，首页不放 —— 你当时没选这一项） */
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
