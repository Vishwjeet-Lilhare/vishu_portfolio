# Hi Vishu! Start here

This ZIP contains the editable source of your portfolio. You can change it, run it locally, and push it into your own GitHub repository. It does not include someone else's Git history, installed dependencies, or account credentials.

## 1. Extract and install prerequisites

1. **Extract All** from the ZIP. Do not run files inside the ZIP viewer.
2. Keep the entire `Vishwjeet-Portfolio` folder together. You can put it anywhere writable, such as Documents. Avoid a network drive or a folder requiring administrator access.
3. Install **Node.js with npm**, version 22.12 or newer, from https://nodejs.org/en/download. The project was tested with Node 22.18.0 and npm 10.9.3. The optional `.nvmrc` selects that tested Node version for people using a Node version manager.
4. Close and reopen any terminals after installation so they can find Node.
5. Install VS Code if you want an editor, and Git if you want to push to GitHub. Links are in `PREREQUISITES.md`.

`PREREQUISITES.md` explains the prerequisites. The actual project packages are installed with npm using the included lockfile.

## 2. Run it on Windows

1. Double-click **setup.cmd**. It checks Node, runs `npm ci`, and runs the production build. Internet is needed to download packages. Wait for **Setup complete**.
2. Double-click **start.cmd**. It opens the site in your default browser.
3. Leave the terminal window open while you work. Saved source edits update the site automatically.
4. Press **Ctrl+C** in the terminal to stop it. If Windows asks to terminate the batch job, answer `Y`.

The helpers do not install system software, change execution policies, create a GitHub repository, or publish anything.

### Terminal alternative (Windows, macOS, or Linux)

Open the extracted folder in VS Code, then choose **Terminal → New Terminal**. Run:

```sh
node --version
npm --version
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://127.0.0.1:5173`). If PowerShell says `npm.ps1 cannot be loaded`, use `npm.cmd ci` and `npm.cmd run dev`, or select Command Prompt as the VS Code terminal. No execution-policy change is necessary.

## 3. Make your changes

| Change | File or folder |
| --- | --- |
| Project descriptions, status, case-study notes, screenshots, real source/play links | `src/data/projects.ts` |
| Contact details, phone visibility, resume setting, skills, education | `src/data/site.ts` |
| Colors, typography, layout, responsive styling | `src/styles/global.css` |
| Individual page sections | `src/sections/` |
| New real gameplay images and clips | `public/projects/` |
| Resume PDF | `public/resume/` |

Put your reviewed resume at `public/resume/Vishwjeet_Lilhare_Game_Developer_Resume.pdf`, then set `resumeUrl` in `src/data/site.ts` to `'/resume/Vishwjeet_Lilhare_Game_Developer_Resume.pdf'`. The download is hidden until you configure it.

The illustrations are concepts, not gameplay screenshots. Replace them with real screenshots when available. Review the draft case-study prompts before publishing, and keep Farming Simulator marked **In development** until you verify its runtime behavior. Detailed media examples are in `README.md`.

No `.env` file or API key is required to run the site. Fonts and social-sharing artwork are already included; do not rerun their generation scripts for normal setup.

## 4. Check your changes

```sh
npm run build
npm run preview
```

Open the preview URL and check your content, mobile layout, project dialogs, and contact actions. Stop preview with Ctrl+C.

Optional automated checks (the Chromium download is only needed for these tests):

```sh
npx playwright install chromium
npm test
```

## 5. Push to your GitHub

Sign into **your own** GitHub account and create a new empty repository, without a README, license, or .gitignore (these initial files can cause a conflicting first push). Copy its HTTPS repository URL.

From the extracted project folder, run:

```sh
git init -b main
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB EMAIL OR NOREPLY EMAIL"
git add .
git commit -m "Add my gameplay portfolio"
git remote add origin YOUR_COPIED_REPOSITORY_URL
git push -u origin main
```

Replace the uppercase placeholders with your details; do not type them literally. Use GitHub's browser sign-in flow when prompted. The name/email settings above apply to this project only. Do not put passwords or access tokens into project files. `.gitignore` already excludes dependencies, builds, local environment files, test output, and ZIP artifacts.

For subsequent updates:

```sh
git add .
git commit -m "Update portfolio content"
git push
```

## 6. Deploy when ready

Import your GitHub repository into Vercel, select **Vite**, use build command `npm run build`, and output directory `dist`. There are no required environment variables. After deployment, optionally set `VITE_SITE_URL` to your final HTTPS URL in Vercel and redeploy to generate canonical, social-image, and sitemap URLs. The complete deployment/custom-domain guide is in `README.md`.

## If something goes wrong

- **Node/npm not found:** install Node with npm, then reopen the terminal or setup helper.
- **Dependency install fails:** check your internet/proxy and rerun `setup.cmd` or `npm ci`. Keep the lockfile; do not use `npm update` to troubleshoot.
- **A port is busy:** Vite usually selects another available port. Use the URL it prints, or run `npm run dev -- --port 5174`.
- **Changes do not appear:** edit files in `src/`, not `dist/`; restart the dev server if needed.
- **Missing image:** check capitalization and use a path starting `/projects/`, not `/public/projects/`.
- **Git not recognized:** install Git, then reopen the terminal.
- **Git push denied:** confirm your GitHub account has access and the remote URL matches the repository you created.
- **Need help:** share the full error message, `node --version`, and `npm --version`. Do not share credentials.
