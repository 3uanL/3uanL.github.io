@echo off
chcp 936 >nul
cd /d "%~dp0"
title 发布到网上 - Yuanhao Liu 主页

echo ============================================
echo   发布到 GitHub：推上去 1-2 分钟后线上自动更新
echo ============================================
echo.

git --version >nul 2>&1
if errorlevel 1 (
  echo 还没装 Git。
  echo.
  echo 在 PowerShell 里执行这一行，装完重开窗口再双击本文件：
  echo     winget install --id Git.Git -e --source winget
  echo.
  echo 详细步骤见 DEPLOY.md 第 1 步。
  pause
  exit /b 1
)

if not exist ".git" (
  echo 还没初始化仓库，或者还没连上 GitHub。
  echo.
  echo 请先按 DEPLOY.md 的第 2、3 步做一次，只需做一次。
  pause
  exit /b 1
)

echo 这次会提交这些改动：
git status --short
echo.

set "msg="
set /p "msg=这次改了什么？直接回车表示更新内容: "
if "%msg%"=="" set "msg=Update content"

echo.
echo 正在提交并推送...
git add .
git commit -m "%msg%"
if errorlevel 1 (
  echo.
  echo 没有改动可提交，或者提交失败。请看上面的信息。
  pause
  exit /b 1
)

git push
if errorlevel 1 (
  echo.
  echo 推送没成功。常见原因：没登录 GitHub，或者网络问题。
  echo 再双击一次本文件可以重试。
  pause
  exit /b 1
)

echo.
echo 推送成功。约 1-2 分钟后打开 https://3uanL.github.io 就能看到。
echo 想看构建进度：仓库页面的 Actions 标签页。
pause
