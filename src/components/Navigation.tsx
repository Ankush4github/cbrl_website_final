'use client';

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon, BeakerIcon, CameraIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/context/ThemeContext'
import * as React from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { 
        name: 'About Us', 
        href: '/about',
        icon: UserGroupIcon,
        description: 'Learn about our mission and team'
      },
      { 
        name: 'Projects', 
        href: '/projects',
        icon: BeakerIcon,
        description: 'Explore our projects'
      },
      { 
        name: 'Gallery', 
        href: '/gallery',
        icon: CameraIcon,
        description: 'View lab activities and events'
      }
    ]
  },
  { name: 'Publications', href: '/publications' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Members', href: '/members' },
  { name: 'Contact', href: '/contact' },
]

// Enhanced HeaderContent Component with aligned navigation
function HeaderContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenDropdown(null);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-white dark:bg-gray-900 shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group relative p-2 hover:scale-105 transition-transform duration-200 flex items-center"
              title="Clinical Biomarkers Research Laboratory"
            >
              <Image
                src="/cbrl-logo.png"
                alt="CBRL Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-2 text-xl font-bold text-primary dark:text-white">CBRL</span>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 dark:bg-gray-700 text-white p-3 rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none">
                Clinical Biomarkers Research Laboratory
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></span>
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation - ALL ITEMS ALIGNED AT SAME LEVEL */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.dropdown ? (
                  <div
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                      <button 
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium group transition-colors duration-200 h-10"
                        aria-expanded={openDropdown === item.name}
                        aria-haspopup="true"
                        type="button"
                        tabIndex={0}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem) => {
                              const IconComponent = dropdownItem.icon;
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="group flex items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 hover:shadow-md hover:scale-[1.02] transform"
                                  tabIndex={0}
                                >
                                  <div className="flex-shrink-0 mr-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-gray-500 dark:group-hover:to-gray-600 transition-all duration-300">
                                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                                      {dropdownItem.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                  <div className="flex-shrink-0 ml-2">
                                    <ChevronDownIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform -rotate-90 group-hover:translate-x-1 transition-all duration-200" />
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 px-4 py-3 border-t border-gray-100 dark:border-gray-600">
                            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                              Discover more about our research lab
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium group transition-colors duration-200 h-10"
                    >
                      {item.name}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                    </Link>
                  )}
                </div>
              ))}
            <ThemeToggleButton />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggleButton />
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - ALIGNED MENU ITEMS */}
        <div 
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          } ${
            isScrolled 
              ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm' 
              : 'bg-white dark:bg-gray-900'
          }`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-3 text-base font-medium rounded-md transition-all duration-200 min-h-[48px]"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                        {item.dropdown.map((dropdownItem) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="group flex items-center p-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:shadow-sm min-h-[56px]"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-gray-500 dark:group-hover:to-gray-600 transition-all duration-300">
                                <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex-1 flex flex-col justify-center">
                                <div className="text-sm font-medium leading-tight">{dropdownItem.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-3 text-base font-medium rounded-md transition-all duration-200 min-h-[48px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function Navigation() {
  return <HeaderContent />;
}
