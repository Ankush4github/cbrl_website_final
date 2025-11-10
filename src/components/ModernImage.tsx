'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ModernImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  lazy?: boolean;
}

const ModernImage: React.FC<ModernImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  sizes,
  fill = false,
  objectFit = 'cover',
  placeholder = 'blur',
  blurDataURL,
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate WebP source if original is not WebP
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.endsWith('.webp')) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  // Generate fallback blur data URL
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
  };

  // Check if WebP is supported
  const supportsWebP = (): boolean => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  useEffect(() => {
    // Use WebP if supported, otherwise use original
    const webpSrc = getWebPSrc(src);
    const shouldUseWebP = supportsWebP() && webpSrc !== src;
    
    if (shouldUseWebP) {
      // Test if WebP version exists
      const img = new (window as any).Image() as HTMLImageElement;
      img.onload = () => setCurrentSrc(webpSrc);
      img.onerror = () => setCurrentSrc(src);
      img.src = webpSrc;
    } else {
      setCurrentSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original format if WebP fails
    if (currentSrc.endsWith('.webp')) {
      setCurrentSrc(src);
    }
  };

  // Intersection Observer for lazy loading with improved error handling
  useEffect(() => {
    if (!lazy || priority) {
      // If not lazy or has priority, load immediately
      setIsLoaded(true);
      return;
    }

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver not supported, loading image immediately');
      setIsLoaded(true);
      return;
    }

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '100px', // Increased margin for earlier loading
          threshold: 0.1
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } catch (error) {
      console.error('Error with IntersectionObserver:', error);
      // Fallback: load image immediately if observer fails
      setIsLoaded(true);
    }
  }, [lazy, priority]);

  const imageProps = {
    src: currentSrc,
    alt,
    quality,
    onLoad: handleLoad,
    onError: handleError,
    className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`,
    placeholder: placeholder as any,
    blurDataURL: generateBlurDataURL(),
    ...(width && { width }),
    ...(height && { height }),
    ...(sizes && { sizes }),
    ...(fill && { fill }),
    ...(objectFit && { style: { objectFit } })
  };

  return (
    <div ref={imgRef} className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {/* Picture element for better browser support */}
      <picture>
        {/* WebP source */}
        {!currentSrc.endsWith('.webp') && (
          <source
            srcSet={getWebPSrc(currentSrc)}
            type="image/webp"
          />
        )}
        
        {/* Fallback image */}
        {(priority || !lazy || isLoaded) && (
          <Image
            {...imageProps}
            priority={priority}
          />
        )}
      </picture>
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${fill ? '' : `w-${width} h-${height}`}`}>
          <div className="flex items-center justify-center h-full">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div className={`absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${fill ? '' : `w-${width} h-${height}`}`}>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernImage;