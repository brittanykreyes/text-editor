import { precaching, registerRoute } from 'workbox-precaching';
import { CacheFirst } from 'workbox-strategies';

self.__WB_MANIFEST = []; // Will be populated by Workbox

precaching.precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style',
    new CacheFirst({
        cacheName: 'static-resources',
    })
);
