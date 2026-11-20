const CACHE_NAME = 'tareas-pwa-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './js/app.js',
    './img/icono-192.png',
    './img/icono-512.png',
    './css/estilos.css'
];

// Instalación: Guarda los archivos estáticos en caché
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activación: Limpia cachés antiguas si cambias la versión
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Estrategia de respuesta: Cache First, fallback a Network
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(e.request);
            })
    );
});