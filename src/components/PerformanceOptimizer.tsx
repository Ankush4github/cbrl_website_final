'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Browser detection and compatibility fixes
    const initializeBrowserCompatibility = () => {
      try {
        // Detect Chrome and apply specific fixes
        const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        const isEdge = /Edg/.test(navigator.userAgent);
        const isFirefox = /Firefox/.test(navigator.userAgent);
        const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        
        // Add browser-specific classes to body
        if (isChrome) {
          document.body.classList.add('browser-chrome');
        } else if (isEdge) {
          document.body.classList.add('browser-edge');
        } else if (isFirefox) {
          document.body.classList.add('browser-firefox');
        } else if (isSafari) {
          document.body.classList.add('browser-safari');
        }
        
        // Force repaint for Chrome
        if (isChrome) {
          document.body.style.transform = 'translateZ(0)';
          setTimeout(() => {
            document.body.style.transform = '';
          }, 100);
        }
        
      } catch (error) {
        console.warn('Browser compatibility initialization failed:', error);
      }
    };
    
    // Preload critical resources
    const preloadCriticalResources = () => {
      try {
        // Preload hero image with error handling
        const heroImage = new Image();
        heroImage.src = '/images/facilities/waters-ms.jpg';
        
        // Preload other critical images with error handling
        const criticalImages = [
          '/images/facilities/waters-ms.jpg',
          '/images/empty_dp.jpg',
          '/images/MembersDP/member1.jpg',
          '/images/sponsors/sponsor1.png'
        ];
        
        criticalImages.forEach(src => {
          const img = new Image();
          img.onerror = () => console.warn(`Failed to preload image: ${src}`);
          img.src = src;
        });
        
        // Preload critical fonts with error handling
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
        fontLink.as = 'font';
        fontLink.type = 'font/woff2';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
        
        // Check for stored theme preference and apply it
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else if (storedTheme === 'light') {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        } else {
          // No stored preference, check system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
          }
        }
      } catch (error) {
        console.error('Error in preloadCriticalResources:', error);
      }
    };

    // Lazy load non-critical CSS
    const loadNonCriticalCSS = () => {
      const nonCriticalCSS: string[] = [
        // Add any non-critical CSS files here
      ];

      nonCriticalCSS.forEach((href: string) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      });
    };

    // Implement intersection observer for lazy loading
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
          });
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // Resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com',
        'connect.facebook.net',
        'platform.twitter.com',
        'platform.linkedin.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical third-party origins
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    loadNonCriticalCSS();
    setupLazyLoading();
    addResourceHints();
    
    // Register service worker after page load
    window.addEventListener('load', registerServiceWorker);

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);

  return (
    <>
      {/* Critical CSS inline */}
      <style jsx>{`
        /* Inline critical CSS for above-the-fold content */
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.05));
          z-index: 10;
        }
      `}</style>

      {/* Async load Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Async load social media SDKs */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://platform.linkedin.com/in.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default PerformanceOptimizer;