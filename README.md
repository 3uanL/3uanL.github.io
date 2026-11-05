# Yuanhao Liu — 个人主页

一个静态学术个人主页：Astro 7 构建，Markdown 写作，构建时生成全文搜索索引，可以直接托管在 GitHub Pages 上。

- 线上地址（部署后）：https://3uanL.github.io
- 页面：首页（News / Research / Learning Log / Honors / Service）、Publications、Research（每个项目一个详情页）、**Learning Log**（文档站式学习笔记，三层目录）、Blog、CV、Gallery、Search、404
- 特性：**英文站**；浅色/深色主题（跟随系统 + 手动切换）；Pagefind 全文搜索；简历 PDF 下载；论文 PDF 下载位；项目配图；相册位；自动 sitemap.xml / robots.txt；零第三方字体、零追踪脚本（除非你自己填统计 ID）

---

## 1. 本地跑起来

需要 Node.js 20 以上（你机器上是 v24，够了）。

```bash
npm install        # 第一次，或者 package.json 改动后
npm run dev        # 本地开发：http://localhost:4321
npm run build      # 生成静态站到 dist/，同时跑 Pagefind 生成搜索索引
npm run preview    # 预览 dist/ 的构建结果（搜索功能只有构建后才有）
```

> **注意**：`npm run dev` 下搜索页不可用（搜索索引是构建产物）。要试搜索就 `npm run build && npm run preview`。

### 1.1 三个双击脚本（推荐，不用记命令）

项目根目录有三个 `.bat` 文件，双击就能用：

| 双击这个 | 干什么 | 什么时候用 |
| --- | --- | --- |
| `1-dev.bat` | 启动本地预览并自动打开 http://localhost:4321 | 改内容、写文章时（保存即自动刷新） |
| `2-preview.bat` | 先构建，再预览成品（**搜索可用**） | 想确认"最终发出去的样子"时 |
| `3-publish.bat` | 提交并推送到 GitHub，1–2 分钟后线上自动更新 | 改完想上线时 |

窗口别关，关了服务就停了（`1`/`2` 都是）。要停服务：在窗口里按 `Ctrl + C`。

`3-publish.bat` 会先列出这次改了哪些文件，再让你输入一句说明（直接回车也行）。

---

## 2. 日常维护：你只会碰这几个文件

| 想改什么 | 改哪个文件 |
| --- | --- |
| 名字、首屏那句话、邮箱、GitHub/Bilibili/Scholar 链接、微信、访问统计 | [`src/config.ts`](src/config.ts) |
| 论文列表（标题、作者、期刊、状态、DOI/PDF 链接） | [`src/data/publications.ts`](src/data/publications.ts) |
| 首页 News 动态（现在只留 2 条） | [`src/data/news.ts`](src/data/news.ts) |
| 科研项目（首页哪些卡片带图、`/research/xxx` 详情页） | [`src/data/projects.ts`](src/data/projects.ts) |
| 荣誉、学术服务、教育背景、技能 | [`src/data/honors.ts`](src/data/honors.ts) |
| Learning Log 的领域与课程名 | [`src/data/learning.ts`](src/data/learning.ts) |
| Learning Log 的笔记正文 | `src/content/learning/<领域>/<课程>/*.md` |
| 博客文章 | `src/content/blog/*.md` |
| 简历 PDF | `public/cv/Yuanhao_Liu_CV.pdf` |
| 论文 / 报告 PDF | `public/files/` |
| 项目配图 | `public/figures/` |
| 头像 | `src/assets/portrait.jpg` |
| 相册照片 | `src/assets/gallery/` |
| 配色、字号、栏宽 | [`src/styles/global.css`](src/styles/global.css) 顶部那一组 CSS 变量 |

**首页里没有"技能栈"板块**——你当初没选这项，技能只出现在 CV 页。想加的话在 [`src/pages/index.astro`](src/pages/index.astro) 里加一个 `<Section>` 引用 `skills` 即可（`skills` 已经在 [`src/data/honors.ts`](src/data/honors.ts) 里了）。

### 2.1 改名字 / 研究方向（最常改的一处）

打开 [`src/config.ts`](src/config.ts)：

```ts
export const site = {
  name: 'Yuanhao Liu',
  englishName: 'Euan',
  // 首屏那句研究方向 —— 方向定了就改这一行
  tagline: 'AI for Communications · Agent Communication · Semantic Communications',
  intro: '……首屏那段自我介绍……',
  email: '12313527@mail.sustech.edu.cn',
  links: { github: 'https://github.com/3uanL', scholar: '', cv: '/cv/Yuanhao_Liu_CV.pdf' },
  // ...
};
```

`links` 里留空的项（比如 `scholar`）**会自动隐藏**，所以先留空不会出现死链。

---

## 3. 写内容（博客 / Learning Log）

### 3.1 博客文章

1. 在 `src/content/blog/` 下新建一个 `.md` 文件，文件名就是网址：`uav-trajectory-notes.md` → `/blog/uav-trajectory-notes/`。
2. 文件开头写这一段（frontmatter）：

```md
---
title: VoI 最小化到底在优化什么
date: 2026-10-20
description: 一句话摘要，会显示在列表和搜索结果里
tags: [optimization, UAV]
---

正文从这里开始……
```

3. 字段说明：

| 字段 | 作用 |
| --- | --- |
| `title` | 标题（必填） |
| `date` | 日期，`YYYY-MM-DD`（必填） |
| `description` | 摘要，建议 1 句 |
| `tags` | 标签数组，可省略 |
| `draft` | 写 `true` 时**不会出现在网站上**；写完删掉这行或改 `false` 才发布 |

4. 支持的东西：
   - 常规 Markdown（**加粗**、*斜体*、`代码`、列表、表格、引用、图片）
   - **数学公式**（已内置 KaTeX）：行内 `$h(t)=\sqrt{d^2+z^2}$`，独立一行用 `$$ ... $$`
   - 代码块（带语法高亮，浅色/深色各一套主题）
   - 图片：放到 `public/images/`，然后 `![说明](/images/xxx.png)`

5. 预览：`npm run dev`，打开 http://localhost:4321/blog

`src/content/blog/example-post.md` 是一个可以直接复制改写的模板（它是 `draft: true`，所以不会出现在网站上）。

**写作建议**（真的会让主页更有说服力）：一篇笔记只讲清一件小事——「我踩了什么坑、怎么想明白的」。比如「Lyapunov 优化第一眼看不懂的三个符号」「FAT-MPC 为什么要在滚动时域上重解」——这类内容比综述式长文更容易被导师读懂，也更容易长期坚持。

### 3.2 Learning Log（学习记录）

Learning Log 是"结构化"的笔记：领域 → 课程 → 单篇笔记，网址就是目录结构。
左侧目录树和"上一页 / 下一页"都是自动生成的，你只需要写 Markdown。

**加一篇笔记**（最常见）：

1. 找到对应目录，例如强化学习：`src/content/learning/ai/reinforcement-learning/`
2. 新建 `mdp-basics.md`，开头写：

```md
---
title: 马尔可夫决策过程到底在定义什么
description: 一句话摘要，会出现在列表里
order: 1
tags: [rl, mdp]
---

正文……
```

3. 保存 → `npm run dev` 里立刻出现在 `/learning/ai/reinforcement-learning/mdp-basics`，同时进左侧目录树和搜索索引。

**加一门新课**：在 [`src/data/learning.ts`](src/data/learning.ts) 的 `courses` 里加一条（`domain` 用已有的四个之一，`slug` 会成为网址的一段），再建同名目录写 md 即可。
**加一个新领域**：在同一文件 `domains` 里加一条，然后建 `src/content/learning/<新领域>/` 目录。

**注意**：`slug` 用英文小写和减号；改成中文会让网址变成一长串百分号编码。
目前里面有两篇示例笔记（「How I read a paper」「Reading a 3GPP specification without drowning」），是我按通用方法论写的脚手架 —— **换成你自己的话，或者直接删掉**。

---

## 4. 换头像 / 加相册 / 放论文 PDF

**头像**：把一张正方形照片命名为 `portrait.jpg` 放进 `src/assets/`，重新构建即可；现在显示的是 "YL" 字母占位圆，检测到照片会自动替换。

**相册**：把照片放进 `src/assets/gallery/`（jpg/png/webp/avif），文件名会变成说明文字，例如 `shenzhen-bay-sunset.jpg` → "shenzhen bay sunset"。单张建议 ≤ 1 MB。

**论文 PDF**：文件放进 `public/files/`，然后在 [`src/data/publications.ts`](src/data/publications.ts) 对应条目里加一行：

```ts
links: { pdf: '/files/uav-trajectory.pdf', doi: 'https://doi.org/10.xxxx/xxxxx' },
```

条目上就会出现 PDF / DOI 按钮；没填的自动隐藏。

**项目配图**：图片放进 `public/figures/`，在 [`src/data/projects.ts`](src/data/projects.ts) 里写 `figure: '/figures/xxx.png'`。配图会出现在首页卡片和详情页；不填就没有图（不会出现开发提示——那种提示只在 `npm run dev` 下可见）。

**简历 PDF**：现在这份 `public/cv/Yuanhao_Liu_CV.pdf` 是从你的 `CV_YuanhaoLiu.docx` 转出来的，**并且已经删掉了手机号**（你要求不公开电话）。更新简历后有两种做法：
- 直接把你导出的新 PDF 覆盖 `public/cv/Yuanhao_Liu_CV.pdf`（记得自己检查里面有没有电话/住址）；
- 或者让 AI 助手再帮你从 docx 转一次并清理隐私信息。

CV 网页版（`/cv`）的内容来自 [`src/data/honors.ts`](src/data/honors.ts)（教育、荣誉、技能）和 `publications.ts` / `projects.ts`，所以**网页版和 PDF 是两份内容**，改了简历别忘同步这里的文字。

---

## 5. 换配色

[`src/styles/global.css`](src/styles/global.css) 最上面是全部设计变量，改这两个块就等于换皮肤（浅色块 + 深色块各一处）：

```css
:root {
  --accent: #c2410c;   /* 主色：链接、按钮、标签（现在是暖橙） */
  --measure: 48rem;    /* 正文栏宽，768px；学术主页普遍 760–800px */
  --font-serif: ...;   /* 标题字体 */
  --font-sans: ...;    /* 正文字体 */
}
```

深色模式的取值在紧邻的 `@media (prefers-color-scheme: dark)` 和 `:root[data-theme='dark']` 里，两处保持一致即可。

主题切换按钮是三态循环：跟随系统 → 浅色 → 深色。首屏不会闪白（初始化脚本是内联同步执行的）。

---

## 6. 访问统计（可选）

默认**什么都不加载**。想统计就去注册一个服务，把 ID 填进 [`src/config.ts`](src/config.ts)：

```ts
export const analytics = {
  umami: { websiteId: '你的-id', scriptUrl: 'https://cloud.umami.is/script.js' },
  baidu: { id: '' }, // 或者用百度统计的 hm.js id
};
```

填了才会注入脚本；留空则连请求都不会发。

---

## 7. 目录结构（了解即可，不影响你改内容）

```
├── astro.config.mjs        站点配置（域名、Markdown/公式/代码高亮）
├── src/
│   ├── config.ts           ★ 姓名、方向、邮箱、链接、统计
│   ├── data/               ★ 论文 / 动态 / 项目 / 荣誉 / 技能
│   ├── content/blog/       ★ 博客 Markdown
│   ├── content/learning/   ★ Learning Log 笔记 Markdown（领域/课程/笔记.md）
│   ├── data/learning.ts    ★ Learning Log 的领域与课程名
│   ├── content.config.ts   博客与笔记的字段校验规则（一般不用动）
│   ├── components/         Header、Hero、卡片、论文列表等组件
│   ├── layouts/            页面外壳（<head>、主题初始化、页头页脚）
│   ├── pages/              每个文件 = 一个网址
│   ├── styles/global.css   ★ 配色与排版
│   └── styles/learning.css  Learning Log 的双栏阅读样式
├── public/                 原样拷贝的文件：favicon、cv/、files/、figures/
└── .github/workflows/      推送到 main 时自动构建部署
```

---

## 8. 构建/预览出问题时

| 现象 | 原因与处理 |
| --- | --- |
| 搜索页提示 "Search index not found" | 你在 `npm run dev` 下。搜索索引只在 `npm run build` 时生成，用 `npm run preview` 预览 |
| 改完内容页面没变 | 确认保存了文件；`dev` 会热更新，`build` 需要重新构建 |
| `npm run build` 报 YAML 错误 | frontmatter 里有特殊字符。含冒号的文本要加引号，例如 `description: "Keep draft: true"` |
| 公式显示成 `$...$` 原文 | 检查是不是用了 `$$` 之外的全角符号，或者公式跨行了 |
| 想推倒重来 | `git checkout -- .`（丢弃未提交改动）或 `git reset --hard <某次提交>` |

---

## 9. 部署

见 [DEPLOY.md](DEPLOY.md)：一次性设置 + 以后每次更新的三条命令。
