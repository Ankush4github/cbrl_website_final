// Service Worker for CBRL Website
// Implements caching strategies for better performance

const CACHE_NAME = 'cbrl-v1';
const STATIC_CACHE = 'cbrl-static-v1';
const DYNAMIC_CACHE = 'cbrl-dynamic-v1';
const IMAGE_CACHE = 'cbrl-images-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/research',
  '/publications',
  '/members',
  '/facilities',
  '/gallery',
  '/contact',
  '/manifest.json',
  '/_next/static/css/app/layout.css',
  '/_next/static/css/app/globals.css'
];

// Cache static assets with improved error handling
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS)
        .catch(error => {
          console.error('Failed to cache all resources during install:', error);
          // Continue with installation even if some resources fail to cache
        });
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(handleStaticAssets(request));
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Cache-first strategy for images with timeout and better error handling
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Return cached response immediately
      return cachedResponse;
    }
    
    // Use a timeout for network requests to prevent hanging
    const networkPromise = new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('Network request timeout for image'));
      }, 5000); // 5 second timeout
      
      fetch(request)
        .then(response => {
          clearTimeout(timeoutId);
          resolve(response);
        })
        .catch(error => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
    
    const networkResponse = await networkPromise;
    
    if (networkResponse.ok) {
      // Clone before using the response
      const responseToCache = networkResponse.clone();
      // Use a non-blocking cache write
      cache.put(request, responseToCache).catch(err => {
        console.warn('Failed to cache image:', err);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Image request failed:', error);
    // Try to return a fallback image from cache
    try {
      const fallbackCache = await caches.open(STATIC_CACHE);
      const fallbackResponse = await fallbackCache.match('/images/empty_dp.jpg');
      if (fallbackResponse) {
        return fallbackResponse;
      }
    } catch (fallbackError) {
      console.error('Fallback image also failed:', fallbackError);
    }
    
    // Create a simple SVG placeholder as absolute fallback
    return new Response(
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="sans-serif" font-size="24" text-anchor="middle" fill="#999">
          Image Error
        </text>
      </svg>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}

// Cache-first strategy for static assets
async function handleStaticAssets(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Static asset request failed:', error);
    throw error;
  }
}

// Network-first strategy for API requests
async function handleAPIRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('API request failed, trying cache:', error);
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale-while-revalidate strategy for pages with improved error handling
async function handlePageRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    // Create a network request with timeout
    const networkPromise = new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('Network request timeout for page'));
      }, 8000); // 8 second timeout for pages
      
      fetch(request)
        .then((networkResponse) => {
          clearTimeout(timeoutId);
          
          if (networkResponse.ok) {
            // Clone before using the response
            const responseToCache = networkResponse.clone();
            // Use a non-blocking cache write
            cache.put(request, responseToCache).catch(err => {
              console.warn('Failed to cache page:', err);
            });
          }
          
          resolve(networkResponse);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
    
    // Return cached version immediately if available
    if (cachedResponse) {
      // Revalidate in the background
      networkPromise.catch(err => {
        console.warn('Background fetch failed:', err);
      });
      return cachedResponse;
    }
    
    // Otherwise wait for network with fallback
    try {
      return await networkPromise;
    } catch (networkError) {
      console.error('Network request failed:', networkError);
      
      // If we have a cached response for any version of this page, return it
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Try to return the homepage as a fallback
      const homepageResponse = await cache.match('/');
      if (homepageResponse) {
        return homepageResponse;
      }
      
      // Create a simple offline page as absolute fallback
      return new Response(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Offline - CBRL</title>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 20px; }
            h1 { color: #333; }
            p { color: #666; }
            button { padding: 10px 20px; background: #0070f3; color: white; border: none; border-radius: 4px; cursor: pointer; }
          </style>
        </head>
        <body>
          <h1>You are offline</h1>
          <p>Please check your internet connection and try again.</p>
          <button onclick="window.location.reload()">Retry</button>
        </body>
        </html>`,
        {
          status: 503,
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store'
          }
        }
      );
    }
  } catch (error) {
    console.error('Page request handler failed:', error);
    // Return a simple error response
    return new Response('Service unavailable', { status: 503 });
  }
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Implement background sync for contact form submissions
    console.log('Syncing contact form submissions...');
    // This would typically retrieve queued form data from IndexedDB
    // and submit it when the connection is restored
  } catch (error) {
    console.error('Contact form sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Research',
          icon: '/icon-explore.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-close.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/research')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});