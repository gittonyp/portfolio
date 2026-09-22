import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isAccountSite = repositoryName?.endsWith('.github.io');
const githubPagesBase = repositoryName && !isAccountSite ? `/${repositoryName}/` : '/';

// Local previews and custom domains use `/`. GitHub project Pages builds derive
// `/repository-name/` automatically, with VITE_BASE_PATH available as an override.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? githubPagesBase : '/'),
  plugins: [...svelte()]
});
