@echo off
chcp 936 >nul
cd /d "%~dp0"
title 本地预览 - Yuanhao Liu 主页

echo ============================================
echo   本地预览：边改边看
echo ============================================
echo.
echo 启动后浏览器会自动打开 http://localhost:4321
echo 改完文件保存，页面自动刷新。
echo 关掉：在本窗口按 Ctrl + C，或直接关窗口。
echo.

if not exist "node_modules" (
  echo 第一次运行，正在安装依赖，约 1-2 分钟...
  call npm install
  echo.
)

start "" http://localhost:4321
call npm run dev
pause
