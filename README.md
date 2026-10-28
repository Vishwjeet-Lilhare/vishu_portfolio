# Vishwjeet Lilhare — Gameplay Portfolio

A static-first, responsive portfolio for Vishwjeet Vinod Lilhare, focused on UEFN gameplay programming and Verse. Includes three reusable case studies, original CSS environment illustrations, grouped skills, education and development journey, accessible contact actions, and mobile navigation.

## Stack and setup

**Received this project as a ZIP? Read [START-HERE.md](START-HERE.md) first.** Windows users can run `setup.cmd` once and then `start.cmd`. Prerequisites are listed in `requirements.txt`; npm dependencies are locked in `package-lock.json`.

React, TypeScript, Vite, Motion for React, Lucide React, and plain CSS. No database, backend, secret keys, or paid service is required. Node.js 22.12+ is required. Dependencies are locked in `package-lock.json`.

```powershell
# Open a terminal in the extracted project folder first.
npm ci
npm run dev
```

Open the localhost URL printed by Vite. To verify and preview the production bundle:

```powershell
npm run build
npm run preview
```

`npm run build` checks TypeScript and writes deployable static files to `dist/`. Preview is a local check, not a hosting service.

## Content and files

| Location                  | Purpose                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------ |
| `src/data/projects.ts`    | All three projects, systems, status, case-study text, and optional links/media       |
| `src/data/site.ts`        | Name, contact details, navigation, skills, education, certifications, resume setting |
| `src/types/project.ts`    | Typed project and media model                                                        |
| `src/sections/`           | Hero, Projects, About, Skills, Journey, Contact                                      |
| `src/components/`         | Navigation, reusable case-study dialog, CSS environment, footer                      |
| `src/styles/global.css`   | Design tokens, layout, responsive styles, CSS illustrations, reduced motion          |
| `public/projects/`        | Place real project screenshots and gameplay videos here                              |
| `public/resume/`          | Place the reviewed resume PDF here                                                   |
| `public/social-card.png`  | Social-sharing artwork                                                               |
| `vite.config.ts`          | Build-time canonical, Open Graph image URL, robots.txt and optional sitemap          |
| `tests/portfolio.spec.ts` | Browser interaction, accessibility, and responsive checks                            |

Change content in the typed data files, rather than duplicating it in components. Project dates, public source links, and playable links are optional; omit them when unknown. Phone display defaults to off; set `showPhone: true` only if you want it visible. Public client-side configuration is never a place for private data.

The case-study notes intentionally label unverified development challenges and lessons as draft prompts. Replace these with concrete, owner-verified observations when available. Farming Simulator stays **In development**: compiling does not establish runtime correctness, and NPC navigation and the complete sales loop are not claimed to work reliably.

## Add screenshots and video

All current scenes are original CSS illustrations labeled as concepts, not screenshots. Add optimized WebP/AVIF/JPEG images and MP4/WebM video to a project directory, for example `public/projects/horror-escape/`. Then edit its entry:

```ts
featuredImage: {
  src: '/projects/horror-escape/escape-door.webp',
  alt: 'Describe what this real screenshot shows',
  type: 'image',
},
gallery: [
  { src: '/projects/horror-escape/escape-door.webp', alt: 'Describe the real gameplay view', type: 'image' },
  { src: '/projects/horror-escape/gameplay.mp4', alt: 'Caption or description of the gameplay clip', type: 'video' },
],
```

Use an image for `featuredImage`. Gallery videos have native controls and do not autoplay. Provide captions/transcripts for meaningful speech or sound when adding video; the initial site has no videos. Prefer thumbnails under about 250 KB and avoid uploading large uncompressed captures. `sourceUrl` and `playUrl` show buttons only when supplied. Only use real URLs.

## Resume

No resume was found, so there is no download button. Review the PDF's contents before publishing, then place it at:

```text
public/resume/Vishwjeet_Lilhare_Game_Developer_Resume.pdf
```

In `src/data/site.ts`, change `resumeUrl` to `'/resume/Vishwjeet_Lilhare_Game_Developer_Resume.pdf'`. Build, preview, and confirm the download. Nothing is generated or uploaded automatically.

## Contact

The email buttons open the visitor's mail application. They do not submit to a server. Clipboard copying uses the browser Clipboard API and provides success/failure feedback; clipboard access requires HTTPS or localhost. Social links use the supplied GitHub and LinkedIn profiles.

## GitHub and Vercel

Create an empty GitHub repository in your account. From this directory, run the following, replacing `YOUR_REPOSITORY` with the repository you created:

```powershell
git init -b main
git add .
git commit -m "Build gameplay developer portfolio"
git remote add origin https://github.com/Vishwjeet-Lilhare/YOUR_REPOSITORY.git
git push -u origin main
```

If already initialized, skip `git init`. No repository has been created or pushed automatically.

1. Sign into Vercel and choose **Add New → Project**.
2. Import your GitHub repository and keep the project root as the root directory.
3. Select the **Vite** preset. Build command: `npm run build`. Output: `dist`. Install: `npm ci`.
4. Deploy. The base website needs no environment variables.
5. Open the assigned Vercel URL and check mobile navigation, project dialogs, and contact links.
6. Add `VITE_SITE_URL` with that final HTTPS URL in the Vercel project's environment settings, then redeploy to include absolute canonical/social URLs and a sitemap.
7. Subsequent pushes to the connected production branch trigger deployments.

This personal static portfolio is designed for Vercel's free Hobby workflow, subject to current eligibility, limits, and terms. Official references: [Vite deployment](https://vite.dev/guide/static-deploy#vercel), [Vercel Vite](https://vercel.com/docs/frameworks/frontend/vite), [Hobby plan](https://vercel.com/docs/plans/hobby).

For a custom domain, add it under your Vercel project's **Settings → Domains**, then set the exact DNS records Vercel supplies at your domain registrar. Set `VITE_SITE_URL` to the final preferred origin and redeploy. A custom domain purchase is optional; the Vercel subdomain works on its own. No invented production domain is embedded in this project.

## Environment and SEO

Copy `.env.example` to `.env.local` only if you want to configure the final URL locally. `VITE_SITE_URL` is public metadata, not a secret. Supply your actual absolute HTTPS origin. With it omitted, the build deliberately omits canonical, og:url, og:image, and sitemap rather than publishing fake URLs. The page title, description, other Open Graph metadata, favicon, and robots.txt still exist.

Replace `public/social-card.png` with your own 1200×630 artwork if desired. Use the same filename or edit the metadata plugin. The portfolio uses a single page with section anchors and native dialogs, so no SPA catch-all rewrites or fabricated project routes are needed.

## Verification

```powershell
npx playwright install chromium
npm test
```

Tests run in Chromium at desktop and mobile sizes, exercise all case-study controls, focus containment/return, clipboard success/failure, navigation, reduced motion, anchor destinations, viewport overflow, and axe WCAG A/AA checks. Screenshots are written to ignored `artifacts/`; failed-test traces to ignored `test-results/`.

Verified during implementation: `npm run build` passed, all 8 Playwright tests passed, and the final local production-preview Lighthouse mobile audit scored **98 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**. The audit JSON is in ignored `artifacts/lighthouse.json`. These are local lab results, not guarantees for deployed performance; hosting, devices, and later content changes can affect scores. Desktop and mobile screenshots were also visually reviewed. No GitHub push or hosting deployment was performed.

Automated accessibility checks do not replace manual assistive-technology testing. Lighthouse scores are not claimed unless an audit is actually run. Fonts are bundled locally in `public/fonts/` with their SIL Open Font Licenses; no external font service is needed at runtime. System fallbacks remain available. Run `node scripts/download-fonts.mjs` only when deliberately refreshing the fonts. Motion never hides initial content, and reduced-motion preferences are respected. The application itself requires JavaScript; a noscript contact fallback is provided.

## Troubleshooting

- **Node engine error:** upgrade to Node 22.12+ or a compatible newer LTS version, then run `npm ci`.
- **Port in use:** use `npm run dev -- --port 5174`.
- **Missing image/PDF:** confirm the file is under `public/`; URLs begin with `/projects/` or `/resume/`, never `/public/`. Paths are case-sensitive on hosting.
- **Missing metadata after editing an environment variable:** rebuild/redeploy; it is generated at build time.
- **Clipboard blocked:** use localhost or HTTPS, or select the email text manually.
- **Email button does not open an application:** configure a mail handler or copy the address into your email service.
- **Cannot push:** authenticate Git with your own GitHub account and verify the remote repository exists. Never place credentials in source files.
- **Browser-test setup:** run the Chromium install command above; tests start their own dev server on port 4173.

## Remaining owner-supplied material

Real gameplay screenshots/clips, the reviewed resume PDF, any public source/play links, specific development logs/lessons, and verified Farming Simulator runtime status. The final production URL must be configured after deployment.

#   v i s h u _ p o r t f o l i o  
 