/**
 * 站点级配置 —— 所有页面都从这里读数据。
 * 想改名字、方向、邮箱、链接、导航，只改这一个文件就够了。
 */

export const site = {
  /** 页面上显示的名字 */
  name: 'Yuanhao Liu',
  /** 英文名（想显示成 "Yuanhao (Euan) Liu" 就把下面这句填上，留空则不显示） */
  englishName: 'Euan',
  /** 中文名：英文站默认不显示；以后做中文页会用到 */
  chineseName: '刘元昊',

  /**
   * 首屏上方那行小字（研究方向）。想改直接改这一行。
   */
  tagline: 'AI for Communications · Agent Communication · Semantic Communications',

  /** 学位与学校 */
  affiliation: 'B.Eng. in Communications Engineering, Southern University of Science and Technology',
  affiliationNote: 'Expected graduation: June 2027',

  /**
   * 首屏那段自我介绍。
   * 现在用的是你自己给的那句（英文版 A）——想换语气直接改这一行。
   */
  intro:
    'A slowly-improving enthusiast of communications, AI, and embodied intelligence. My favourite line: “You will never succeed by doing only what you are already able to do.”',

  /** 公开联系方式（你确认可以公开邮箱；电话/住址一律不放） */
  email: '12313527@mail.sustech.edu.cn',
  location: 'Shenzhen, China',

  /** 外部链接：留空字符串的会自动隐藏，不会出现死链 */
  links: {
    github: 'https://github.com/3uanL',
    bilibili: 'https://space.bilibili.com/3707083245488320',
    scholar: '', // TODO: 有 Google Scholar 主页后把链接填这里
    linkedin: '', // TODO: 有 LinkedIn 后填这里
    orcid: '', // TODO: 有 ORCID 后填这里
    cv: '/cv/Yuanhao_Liu_CV.pdf', // 简历 PDF（已生成，电话信息已移除）
  },

  /** 微信：填上就会在页脚显示（留空则隐藏） */
  wechat: '', // TODO: 例如 'your-wechat-id'

  /** 页脚显示"最后更新时间"时用构建日期 */
  useBuildDate: true,
} as const;

/**
 * 访问统计（Umami 或百度统计）。
 * 填上 id 才会注入脚本；留空则完全不加载任何第三方代码 —— 页面零追踪。
 */
export const analytics = {
  umami: {
    websiteId: '', // TODO: 例如 'a1b2c3d4-....'
    scriptUrl: '', // TODO: 例如 'https://cloud.umami.is/script.js'
  },
  baidu: {
    id: '', // TODO: 例如 '0123456789abcdef'
  },
};

/** 顶部导航。顺序即显示顺序。Search 从导航里移出，改在页脚进入。 */
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/publications', label: 'Publications' },
  { href: '/research', label: 'Research' },
  { href: '/learning', label: 'Learning Log' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/gallery', label: 'Gallery' },
];

/** 版权信息里的年份起始值 */
export const copyrightFrom = 2026;
