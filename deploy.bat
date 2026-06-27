@echo off
echo Sending fixed code to GitHub for Vercel...
git remote set-url origin https://github.com/vishwadudhat15-arch/mr-car.git
git add .
git commit -m "Fix unused variables for Vercel build"
git push -u origin main
echo.
echo If you see "Everything up-to-date" or "main -> main", the fix is now on GitHub!
echo Vercel is now building your game.
pause
