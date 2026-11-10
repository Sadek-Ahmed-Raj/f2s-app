
const CACHE_NAME = "f2s-pwa-v5";
const BASE_PATH = new URL("./", self.location.href);

self.addEventListener("install", (event) => {
  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith("f2s-pwa-") &&
              key !== CACHE_NAME
          )
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only handle requests from this F2S website.
  if (url.origin !== self.location.origin) return;

  if (!url.pathname.startsWith(BASE_PATH.pathname)) return;

  // Never cache Supabase or external API requests.
  if (
    url.hostname.includes("supabase") ||
    url.pathname.includes("/rest/") ||
    url.pathname.includes("/auth/") ||
    url.pathname.includes("/realtime/")
  ) {
    return;
  }

  // Network-first navigation with offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cached = await caches.match(
          new URL("index.html", BASE_PATH).href
        );

        return cached || Response.error();
      })
    );

    return;
  }

  // Cache successful same-origin static GET responses.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);

      if (cached) return cached;

      const response = await fetch(request);

      if (response.ok && response.type === "basic") {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    })()
  );
});
