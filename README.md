# CLOSEFLOW AI

An English-language prelaunch marketing site for US/UK online fitness coaches. Astro, strict TypeScript and Tailwind CSS 4; static output for GitHub Pages. No backend, account integration, AI calls or data collection. All product examples are explicitly simulated. No testimonials, revenue claims or unconfirmed prices.

## Start locally

Install Node.js 22.12 or newer (Node 22 LTS recommended). In this folder:

```sh
npm install
npm run dev
```

Open the address printed by Astro. Before deployment:

```sh
npm run build
npm run preview
```

`build` runs Astro’s TypeScript/component checks first and writes the static site to `dist/`. A dependency lockfile is included; use `npm ci` for repeat installations. The production build passed with zero errors, warnings or hints. Desktop and mobile browser checks confirmed the demo stage changes, FAQ disclosure and mobile layout without horizontal overflow. Sitemap and repository subpath generation were also checked.

## Publish on GitHub Pages — first-time setup

1. Finish creating your GitHub account and verify your email.
2. Create a **public** repository named `closeflow-ai`. Do not add an initial README if uploading this project using Git.
3. Upload the **contents** of this folder to the repository root, including `.github/workflows/deploy.yml`, `.gitignore`, and `package-lock.json` if generated locally. Do not upload `node_modules`, `.astro`, `.npm-cache` or `dist`. GitHub Desktop is an easy option: add this folder as a local repository, create a commit and publish it as a public repository. Check that the workflow appears on GitHub under `.github/workflows/`.
4. Open repository **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy CLOSEFLOW AI to Pages → Run workflow**, choose `main`, and run. Future pushes to `main` deploy automatically.
6. Wait for both build and deploy jobs to finish. Open the URL shown by the deployment, normally `https://YOUR-USERNAME.github.io/closeflow-ai/`.

The included workflow reads the real origin and base path from GitHub’s Pages configuration. No username needs to be hard-coded. It also generates a canonical URL, sitemap and robots file. For a user repository named `YOUR-USERNAME.github.io`, the same workflow supports the root path. Manual/local builds need `SITE_URL` and `BASE_PATH` set in the shell if you want production metadata; `.env.example` documents them (the Astro config reads shell environment variables).

Optional Git command route, run from this folder after creating the empty repository:

```sh
git init
git add .
git commit -m "Build CLOSEFLOW AI prelaunch landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/closeflow-ai.git
git push -u origin main
```

Official instructions: [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) · [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Activate demo requests

Until a real booking destination is configured, the page says **“Demo requests opening soon”** and links to the simulated preview. There is no fake success form and no enquiry is stored.

When your booking page is ready, go to **Settings → Secrets and variables → Actions → Variables → New repository variable**. Name it `PUBLIC_DEMO_URL` and enter your full `https://` scheduling URL. Run the deployment workflow again. The CTA will then open that URL in a new tab, with a prelaunch label. This is a public URL, never a secret or API key. Test the booking destination and its privacy notice before inviting prospects.

For local development, copy `.env.example` to `.env` and set only `PUBLIC_DEMO_URL`. Never commit `.env` files.

## Edit and maintain

- `src/pages/index.astro`: marketing content, FAQs, prelaunch CTA.
- `src/components/Demo.astro`: three fictional conversation stages and lightweight browser interaction.
- `src/styles/global.css`: design tokens, Tailwind integration, responsive layout, reduced-motion support.
- `src/layouts/Layout.astro`: page title, description, canonical and social metadata.
- `src/config.ts`: CTA validation and site description.
- `astro.config.mjs`: static build, base-path handling and sitemap integration.
- `.github/workflows/deploy.yml`: build and Pages deployment.

System fonts avoid external font requests. CSS/SVG illustrations avoid stock-photo dependencies. Semantic sections, visible keyboard focus, skip link, native FAQ disclosures, button states and a polite live region support keyboard and assistive technology users. Without JavaScript, the first demo stage remains readable; all marketing content and FAQs work.

`public/social.svg` is an editable social artwork source. Some social platforms do not accept SVG cards: export a 1200×630 PNG and update `Layout.astro` before a social campaign.

## Before launch

- Confirm your company identity, final offer and booking destination. Keep the prelaunch disclosures while the product is still a concept.
- Test every demo stage and FAQ using keyboard, phone and desktop. Check the live URL rather than opening `dist/index.html` directly.
- Confirm favicon, canonical, sitemap and 404 behaviour on the deployed repository URL.
- If adding analytics, forms or integrations, update privacy information to match actual processing and establish appropriate consent/retention practices.
- GitHub Pages hosts the marketing site only. The AI product needs separate infrastructure and supported platform integrations.

## Troubleshooting

- **No deployment workflow:** make sure the hidden `.github` folder was included at the repository root.
- **Pages permission/deployment error:** select GitHub Actions in Settings → Pages; confirm Actions is allowed and the branch is `main`.
- **Styles missing:** use the provided workflow, which supplies the base path, rather than uploading raw source as a branch-hosted site.
- **Demo requests still “opening soon”:** set the repository variable, then run a fresh deployment.
- **Custom domain:** configure it in Settings → Pages and update DNS using GitHub’s instructions. Re-run deployment so metadata reflects the domain. A domain name is optional and purchased separately.

No public deployment or GitHub account changes are performed by this source delivery.

