@echo off
setlocal
cd /d "%~dp0"
echo === Vishwjeet portfolio: first-time setup ===
where node >nul 2>&1
if errorlevel 1 goto missing_node
where npm.cmd >nul 2>&1
if errorlevel 1 goto missing_node
node scripts\check-runtime.mjs
if errorlevel 1 goto failed
echo Installing the exact packages from package-lock.json...
call npm.cmd ci
if errorlevel 1 goto failed
echo Checking TypeScript and building the production site...
call npm.cmd run build
if errorlevel 1 goto failed
echo.
echo Setup complete. Double-click start.cmd to run the website.
if /i not "%~1"=="--no-pause" pause
exit /b 0
:missing_node
echo Install Node.js with npm from https://nodejs.org/en/download
echo Then close this window and run setup.cmd again.
:failed
echo.
echo Setup did not finish. Read the error above and START-HERE.md.
if /i not "%~1"=="--no-pause" pause
exit /b 1
