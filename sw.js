const withCache = async (request) => {
  try {
    const responseFromNetwork = await fetch(request);
    await (await caches.open("v1")).put(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch(_) {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", e => {
  e.respondWith(withCache(e.request));
});
