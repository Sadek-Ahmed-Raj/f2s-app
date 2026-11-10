F2S PWA — GitHub Pages personal/user site (domain root)

Configured for: https://sadek-ahmed-raj.github.io/

Upload the CONTENTS of this package to the ROOT of the repository named
sadek-ahmed-raj.github.io. Do not put these files inside another folder.

Required layout:
  index.html
  manifest.webmanifest
  sw.js
  icons/icon-192.png
  icons/icon-512.png

After commit and GitHub Pages deployment, open each URL directly:
  https://sadek-ahmed-raj.github.io/manifest.webmanifest
  https://sadek-ahmed-raj.github.io/sw.js
  https://sadek-ahmed-raj.github.io/icons/icon-192.png
  https://sadek-ahmed-raj.github.io/icons/icon-512.png

All four must load from the same domain without 404 or a GitHub error page.
Then open https://sadek-ahmed-raj.github.io/ in Chrome, reload, wait 5–10 seconds,
and check Chrome > Settings > Site settings > All sites > sadek-ahmed-raj.github.io
for service-worker/site data status if installation still fails.

This v3 worker intentionally does not require caching the 6 MB HTML file during
its install event. Optional app-shell caching failures therefore cannot prevent
worker activation. API/auth/realtime requests remain network-only.

Supabase login, realtime, submissions and other server-backed features still
require internet. A successful service worker alone does not guarantee Chrome
installability; the live manifest and icons must also be valid and same-origin.
