# praveen-dedigamage.github.io

Personal portfolio site — Next.js (App Router, static export) + Tailwind CSS,
deployed via GitHub Actions to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- `src/app/page.tsx` — page sections (About, Research, Projects, CV, Contact)
- `src/lib/projects.ts` — project list, update as repos are added
- `public/cv.pdf` — downloadable CV, replace when updated
- `public/profile.png` — profile photo

## Deployment

Push to `main` — `.github/workflows/deploy.yml` builds (`next build`, static
export via `output: "export"` in `next.config.ts`) and deploys to GitHub
Pages automatically. Enable Pages once, in the repo's Settings → Pages,
source: "GitHub Actions".
