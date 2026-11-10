F2S PWA — GitHub Pages personal/user site (domain root)

This package is configured for:
https://sadek-ahmed-raj.github.io/

IMPORTANT: Upload the CONTENTS of this folder to the ROOT of the GitHub
repository named sadek-ahmed-raj.github.io. Do not upload the containing
F2S_Leaderboard_PWA folder as a nested directory.

Required repository-root layout:
  index.html
  manifest.webmanifest
  sw.js
  icons/icon-192.png
  icons/icon-512.png

After committing and waiting for GitHub Pages deployment, test these exact URLs:
  https://sadek-ahmed-raj.github.io/manifest.webmanifest
  https://sadek-ahmed-raj.github.io/sw.js
  https://sadek-ahmed-raj.github.io/icons/icon-192.png
  https://sadek-ahmed-raj.github.io/icons/icon-512.png

Each must load from the same domain (no 404, no GitHub HTML error page).
Then open https://sadek-ahmed-raj.github.io/ directly in Chrome, reload once,
wait a few seconds, and check Chrome menu > Install app.

If Chrome still says "This app cannot be installed", the live deployment must
be inspected in Chrome DevTools > Application > Manifest and Service Workers.
This package cannot confirm what is currently deployed to GitHub Pages.

Offline caching is a basic shell fallback only. Supabase login, realtime,
submissions and other server-backed features still require internet.
