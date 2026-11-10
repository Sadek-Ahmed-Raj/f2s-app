F2S Leaderboard PWA — GitHub Pages setup

UPLOAD THE CONTENTS OF THIS FOLDER TO THE ROOT OF YOUR EXISTING F2S REPOSITORY.
Keep the directory structure:
  index.html
  manifest.webmanifest
  sw.js
  icons/icon-192.png
  icons/icon-512.png

The modified index.html is based on the HTML you uploaded. It preserves the existing app UI and includes its PWA manifest link, service-worker registration, and More > Install F2S App handler.

After committing, wait for GitHub Pages to deploy, then open:
https://fajr2success.github.io/F2S/

Verify these URLs:
https://fajr2success.github.io/F2S/manifest.webmanifest
https://fajr2success.github.io/F2S/sw.js
https://fajr2success.github.io/F2S/icons/icon-192.png
https://fajr2success.github.io/F2S/icons/icon-512.png

Important:
- Do not open index.html from a file manager or content:// preview. PWA installation must be tested on the published HTTPS website.
- Upload/replace index.html only if this is the intended current main page for the repository.
- This service worker provides a basic offline page fallback; Supabase, login, and live leaderboard data still need internet.
