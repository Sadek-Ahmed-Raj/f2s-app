F2S PWA — GitHub Pages project-site package

Target website:
https://sadek-ahmed-raj.github.io/f2s-app/

IMPORTANT: Upload the CONTENTS of this package to the ROOT of the GitHub
repository named f2s-app (not into a nested folder).

Required root structure:
  index.html
  manifest.webmanifest
  sw.js
  icons/icon-192.png
  icons/icon-512.png

Deployment steps:
1. Open https://github.com/sadek-ahmed-raj/f2s-app
2. Confirm GitHub Pages publishes the intended branch/folder (usually main / root).
3. Replace index.html with this package's index.html.
4. Upload manifest.webmanifest, sw.js, and the icons folder into repository root.
5. Commit and wait for GitHub Pages deployment.

Verify these exact URLs:
https://sadek-ahmed-raj.github.io/f2s-app/manifest.webmanifest
https://sadek-ahmed-raj.github.io/f2s-app/sw.js
https://sadek-ahmed-raj.github.io/f2s-app/icons/icon-192.png
https://sadek-ahmed-raj.github.io/f2s-app/icons/icon-512.png

All four must load without 404. Then open the website directly in Chrome,
reload, wait a few seconds, and try More > Install F2S App or Chrome menu > Install app.

Do not upload these files to sadek-ahmed-raj.github.io root for this project site.
