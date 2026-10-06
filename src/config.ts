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
   * 首屏那一句话研究方向。
   * ⚠️ 这是你自己说要"后续再改"的地方 —— 方向没定之前先放这句，
   *    想改直接改这一行，无需动任何页面代码。
   */
  tagline: 'AI for Communications · Agent Communication · Semantic Communications',

  /** 学位与学校 */
  affiliation: 'B.Eng. in Communications Engineering, Southern University of Science and Technology',
  affiliationNote: 'Expected graduation: June 2027',

  /**
   * 首屏那段 2–3 句的自我介绍（优秀学术主页的通行做法：访客不用滚动就知道你是谁）。
   * 想改语气直接改文本。
   */
  intro:
    'I am a final-year undergraduate at SUSTech working with Prof. Xiaoyang Li (ICElab) and Prof. Shuxiang Guo (Guolab). I build models and algorithms that make wireless systems aware of the physical world around them — from UAV networks flying through smoke to sensing and communication sharing one spectrum safely.',

  /** 公开联系方式（你确认可以公开邮箱；电话/住址一律不放） */
  email: '12313527@mail.sustech.edu.cn',
  location: 'Shenzhen, China',

  /** 外部链接：留空字符串的会自动隐藏，不会出现死链 */
  links: {
    github: 'https://github.com/3uanL',
    scholar: '', // TODO: 有 Google Scholar 主页后把链接填这里
    linkedin: '', // TODO: 有 LinkedIn 后填这里
    orcid: '', // TODO: 有 ORCID 后填这里
    cv: '/cv/Yuanhao_Liu_CV.pdf', // 简历 PDF（已生成，电话信息已移除）
  },

  /** 微信：填上就会在 About 区显示（留空则隐藏） */
  wechat: '', // TODO: 例如 'your-wechat-id'

  /** 每页底部显示的最后更新时间；改内容时可以手动更新，或让它自动用构建日期 */
  useBuildDate: true,
} as const;

/**
 * 访问统计（Umami 或百度统计）。
 * 填上 id 才会注入脚本；留空则完全不加载任何第三方代码 —— 页面零追踪。
 *
 * Umami：注册后拿到 website-id 和脚本地址，填在下面。
 * 百度统计：把 hm.js 的 id 填进 baidu.id。
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

/** 顶部导航。顺序即显示顺序。 */
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/publications', label: 'Publications' },
  { href: '/research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/search', label: 'Search' },
];

/** 版权信息里的年份起始值 */
export const copyrightFrom = 2026;

/**
 * About 区的自我介绍。
 * 下面这段是我从你简历里的事实（实验室、导师、方向）整理的，没有编造成分；
 * 想改语气直接改文本，想加段落就再往数组里加一条字符串。
 */
export const about = {
  bio: [
    'I am a final-year undergraduate in Communications Engineering at the Southern University of Science and Technology (SUSTech), where I work with Prof. Xiaoyang Li at ICElab and Prof. Shuxiang Guo at Guolab.',
    'My interests are centred on AI for communications, agent communication, and semantic communication — broadly, how optimization and learning can make wireless systems both more efficient and safer. So far that has meant physics-aware UAV trajectory design for fire rescue, ISAC beamforming with human-safety priorities, and physics-informed learning for magnetic localization in capsule robots.',
    'I am currently preparing applications for graduate study, and I am always happy to talk about research ideas, collaboration, or anything at the intersection of wireless systems and learning.',
  ],
  /**
   * 课外/兴趣一句话。
   * ⚠️ 我不知道你的真实爱好，所以留空 —— 留空就完全不显示这一行，不会编造。
   *    想显示就填，例如：'Outside the lab: street photography and long-distance running.'
   */
  hobbies: '',
};

