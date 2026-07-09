# crust-wiki
The source of truth for Crust

## Cloudflare Workers + Assets deployment

This repository is configured to deploy the generated Docusaurus site with Workers Assets via `wrangler.jsonc`.

1. Install website dependencies:
   ```bash
   yarn --cwd website install --frozen-lockfile
   ```
2. Build static assets:
   ```bash
   yarn --cwd website build
   ```
3. Deploy to Cloudflare:
   ```bash
   npm run deploy:cf
   ```

Build output served by Workers Assets: `website/build/crust-wiki`.

Required environment variables for deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
