# Tony Prajapati — portfolio

This is a Svelte/Vite portfolio designed for static hosting on GitHub Pages. The site is built from the project data in `src/`, so adding or updating a project should not require changing the page layout.

## Run locally

Use Node.js 20 or newer:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Before publishing, run the production checks:

```sh
npm run check
npm run build
npm run preview
```

`npm ci` is used by the GitHub Actions deployment, so commit `package-lock.json` whenever dependencies change.

## Add a project

Projects are intentionally data-driven. Add one object to the `projects` array near the top of `src/App.svelte`, then provide its name, kind, description, outcomes, stack, and links in the same shape as the neighboring entries. The page layout renders the array automatically.

For a new project, follow this workflow:

1. Copy an existing project entry and replace its values.
2. Set the project’s `liveUrl` and `repoUrl`. Use `https://` links. An empty `liveUrl` hides the live-site link.
3. Choose one of the existing `tone` values (`amber`, `coral`, `lime`, or `blue`) for its diagram accent.
4. Run `npm run check` and `npm run build`.
5. Commit and push to `main`; the Pages workflow publishes the change automatically.

The schema of an existing entry is the source of truth, so future design changes stay independent from portfolio content.

## GitHub Pages deployment

`.github/workflows/deploy.yml` builds the site with Node 20 and deploys `dist/` using GitHub’s current Pages artifact/deployment actions. In the repository settings, select **Settings → Pages → Build and deployment → Source: GitHub Actions**. Pushes to `main` then trigger the workflow; the deployment URL is shown in the workflow summary and the `github-pages` environment.

For this repository, the default project-site URL will be `https://gittonyp.github.io/<repo>/` (replace `<repo>` with the GitHub repository name). The Vite config must use that repository base path in production (usually `base: '/<repo>/'`, or an equivalent `BASE_PATH` environment setting). Keep that existing app configuration in sync with the repository name. A user/organization site (`https://gittonyp.github.io/`) uses `/` as its base path.

The workflow does not rewrite Vite configuration, so it remains safe to run from either a repository Pages site or a user/organization Pages site. If links or assets 404 only after deployment, check the Vite `base` value first.

## Custom domain and project subdomains

GitHub Pages supports one custom domain per Pages site. To attach a domain to this main portfolio site:

1. Add the domain in **Settings → Pages → Custom domain**.
2. Add the matching `CNAME` file containing only the hostname (for example, `portfolio.example.com`) to `public/CNAME`, then commit it.
3. At the DNS provider, create a `CNAME` record from that hostname to `ACCOUNT.github.io` (for an apex/root domain, use the four current GitHub Pages A/AAAA records documented by GitHub instead).
4. Wait for DNS propagation, then enable **Enforce HTTPS** after GitHub validates the domain.

The file in `public/CNAME` is copied into `dist/` by Vite and therefore survives the Pages artifact deployment. Do not commit a `CNAME` with a URL, path, protocol, or trailing slash—use only the hostname.

Project links can include a subdomain, for example `https://labs.example.com`, in that project’s `liveUrl`. That link is useful when the project is hosted elsewhere, but adding a field to this portfolio does not create DNS or a second GitHub Pages site. GitHub Pages cannot route unlimited project subdomains to different folders in one Pages deployment.

For a real project subdomain, host the project separately (for example, a separate GitHub repository Pages site, Cloudflare Pages, or another static host), give that project host its own `CNAME` file/custom-domain setting, and add a DNS `CNAME` for `labs.example.com` to that host. Keep the portfolio project’s `liveUrl`/`demoUrl` pointed at the resulting hostname. GitHub Pages does not magically create the subdomain from a data entry: the project repository/site and its DNS record must exist first. If every project must share one host, use paths such as `portfolio.example.com/projects/labs/` instead of subdomains.

## Branch and domain notes

- The workflow deploys only `main`; change the branch trigger if the repository uses another default branch.
- Do not use a wildcard DNS record to pretend GitHub Pages provides per-project routing; GitHub’s Pages custom-domain and certificate validation still apply to each hosted site.
- DNS changes can take time to propagate. Keep the repository Pages URL available as a fallback while a custom domain is being validated.
