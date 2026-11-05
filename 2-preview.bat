@echo off
chcp 936 >nul
cd /d "%~dp0"
title 构建并预览 - Yuanhao Liu 主页

echo ============================================
echo   构建 + 预览成品：这个模式下搜索功能才可用
echo ============================================
echo.
echo 正在构建，请稍等...
echo.

if not exist "node_modules" (
  echo 第一次运行，正在安装依赖...
  call npm install
)

call npm run build
if errorlevel 1 (
  echo.
  echo 构建报错了。把上面的报错信息发给 AI 助手。
  pause
  exit /b 1
)

echo.
echo 构建成功。浏览器打开 http://localhost:4321
echo 关掉：按 Ctrl + C 或直接关窗口。
echo.

start "" http://localhost:4321
call npm run preview
pause
