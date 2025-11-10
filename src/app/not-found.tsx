'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
// Import our custom ErrorMicroscope component
import ErrorMicroscope from '@/components/ErrorMicroscope';

export default function NotFound() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Microscope SVG Icon */}
        <div className="mx-auto w-32 h-32 relative text-primary dark:text-blue-400">
          <ErrorMicroscope className="w-full h-full" />
        </div>
        
        
        {/* 404 Error Text */}
        <div className="mt-8">
          <h1 className="text-8xl font-bold text-primary dark:text-primary/90">404</h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">ERROR</p>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Specimen Not Found</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The page you're looking for appears to be missing<br />
            from our laboratory database.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/facilities" 
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            View Our Facilities
          </Link>
        </div>
        
        {/* Support Link */}
        <div className="mt-8 text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Need assistance?{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}