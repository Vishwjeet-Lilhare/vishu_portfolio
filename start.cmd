@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 goto setup_needed
where npm.cmd >nul 2>&1
if errorlevel 1 goto setup_needed
node scripts\check-runtime.mjs
if errorlevel 1 goto failed
if not exist "node_modules\vite\bin\vite.js" goto setup_needed
echo Opening the local portfolio. Keep this window open while editing.
echo Press Ctrl+C to stop the server.
call npm.cmd run dev -- --open
if errorlevel 1 goto failed
exit /b 0
:setup_needed
echo Run setup.cmd first. Node.js and the project dependencies must be installed.
:failed
pause
exit /b 1
