# marissamcdonnell.com

Art portfolio site — React Router v7 · shadcn/ui · Vercel Blob · Dark mode

## Dev

```bash
pnpm install
pnpm dev         # http://localhost:5173
```

## Add new art

1. Drop original photos (any format/size) into `./images-source/oil-paintings/` or `./images-source/other-arts/`
2. Make sure `BLOB_READ_WRITE_TOKEN` is in your `.env`
3. Run `pnpm art:upload` — it compresses, uploads, and prints metadata
4. Paste the output into `app/lib/artworks.ts`
5. `git push` — Vercel redeploys automatically

## Environment variables

Copy `.env.example` → `.env` and fill in values.

| Variable | Description |
|---|---|
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read/write token |
| `APPS_SCRIPT_URL` | Google Apps Script `/exec` URL for contact form |

## Deploy

Push to GitHub. Vercel auto-deploys on every push to `main`.

## Contact form

See `apps-script/Code.gs` for the Google Apps Script backend. Paste it at [script.google.com](https://script.google.com), deploy as a web app, and paste the `/exec` URL into Vercel env vars.

## DNS (marissamcdonnell.com)

Add these at your domain registrar (Squarespace → Domains):

| Type | Host | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |
