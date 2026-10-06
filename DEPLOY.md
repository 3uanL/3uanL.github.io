# 部署到 GitHub Pages

目标：`https://3uanL.github.io` 显示这个主页，以后你改完内容只要三条命令，2 分钟后线上自动更新。

整套流程只有**第一次**麻烦，之后每次更新就是复制粘贴三条命令。

---

## 第 1 步：装 Git（一次性）

你的电脑上还没装 Git。按 `Win` 键，搜索 **PowerShell**，打开后粘贴：

```powershell
winget install --id Git.Git -e --source winget
```

装完**关掉这个窗口重新开一个**（让 PATH 生效），然后验证：

```powershell
git --version
```

能打印出版本号（例如 `git version 2.5x.x`）就成功了。

> 如果 winget 报错，也可以去 https://git-scm.com/download/win 下载安装包，一路默认「下一步」即可。

---

## 第 2 步：在 GitHub 上建仓库（一次性）

1. 打开 https://github.com/new
2. **Repository name 必须填 `3uanL.github.io`**（要和你的用户名完全一致 —— 只有这样网址才是 `https://3uanL.github.io`，否则会变成 `https://3uanL.github.io/仓库名/`）
3. 选 **Public**
4. **不要**勾选 "Add a README file"、不要加 .gitignore、不要选 license（保持空仓库，避免第一次推送冲突）
5. 点 **Create repository**

---

## 第 3 步：首次推送（一次性）

打开 PowerShell，逐段粘贴（先 `cd` 到项目目录）：

```powershell
cd D:\WORK\3uanL.github.io

git init
git add .
git commit -m "Initial commit: personal homepage"
git branch -M main
git remote add origin https://github.com/3uanL/3uanL.github.io.git
git push -u origin main
```

第一次 `push` 会弹出一个浏览器窗口让你登录 GitHub 并授权，点同意即可（Git Credential Manager 会自动处理，不需要你手动输入密码，也不需要 token）。

> 推送前建议先 `git status` 看一眼：`node_modules/`、`dist/`、`_build/` 都不应该出现在列表里（`.gitignore` 已经排除了它们）。

---

## 第 4 步：把 Pages 的来源设成 GitHub Actions（一次性）

1. 打开仓库页面 → **Settings**（右上）
2. 左侧栏 → **Pages**
3. 在 **Build and deployment → Source** 下拉里选 **GitHub Actions**（**不要**选 "Deploy from a branch"）

这一步不做的话，网站永远不会更新——这是最容易漏的一步。

---

## 第 5 步：等它跑完

1. 打开仓库的 **Actions** 标签页，会看到一条 "Deploy to GitHub Pages" 正在跑（黄色圆点）
2. 等 1–2 分钟变成绿色对勾
3. 打开 **https://3uanL.github.io** —— 应该就能看到你的主页了

第一次可能需要多等一两分钟（DNS 缓存）。如果显示 404，先确认第 4 步做了，再等 2 分钟刷新。

---

## 以后每次更新内容

改完文件（比如写了篇新博客），在 PowerShell 里：

```powershell
cd D:\WORK\3uanL.github.io
git add .
git commit -m "Add new blog post"
git push
```

就这样。Actions 会自动重新构建并发布，1–2 分钟后线上就是最新的。

> 提交信息（`-m` 后面那句）随便写，用来说明你这次改了什么。养成写清楚的习惯，以后回滚时能看懂。
>
> 如果你更喜欢图形界面：GitHub Desktop（https://desktop.github.com）能点点鼠标完成同样的三件事，装好后 File → Add local repository 选 `D:\WORK\3uanL.github.io` 即可。

---

## 常见问题

**Actions 报错 "Dependencies lock file is not found"**
`package-lock.json` 必须提交到仓库。检查它没被 `.gitignore` 排除（本项目的 `.gitignore` 没有排除它），并且 `git add .` 时确实加进去了。

**线上页面 404**
三种可能：① Settings → Pages 的 Source 没设成 GitHub Actions；② 仓库名不是 `3uanL.github.io`；③ 还没等够 2 分钟。逐个排查。

**线上页面能开，但样式全乱了（没颜色、没排版）**
说明 CSS 文件没被发布。本仓库已经在 `public/` 放了 `.nojekyll` 防止这种情况；如果还不行，确认仓库里确实有 `public/.nojekyll` 这个文件（注意文件名以点开头）。

**想用自己的域名（比如 liuyuanhao.com）**
1. 买域名，在域名商处添加 DNS 记录：4 条 A 记录指向 `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`，再给 `www` 加一条 CNAME 指向 `3uanL.github.io`
2. 在 `public/` 下新建一个名为 `CNAME` 的文件，内容只有一行：你的域名
3. 把 `astro.config.mjs` 里的 `site` 改成 `https://你的域名`（**不要**加 `base`）
4. 在仓库 Settings → Pages → Custom domain 填上域名并勾选 Enforce HTTPS
5. 提交推送

**改坏了想退回上一个版本**

```powershell
git log --oneline          # 看一下历史，复制想回到的那次提交号
git revert <提交号>         # 生成一次"反向提交"（安全，保留历史）
git push
```

不要用 `git reset --hard` 去改已经推送过的历史——那是给老手用的，容易把自己搞晕。

**推送前自查清单**

- [ ] `npm run build` 本地能通过（没有报错）
- [ ] 新简历 PDF / 论文 PDF 里没有电话、住址、身份证号
- [ ] News 和论文列表里的日期、状态（submitted / published）是最新的
- [ ] `src/config.ts` 里的 tagline 和 intro 是你想说的
