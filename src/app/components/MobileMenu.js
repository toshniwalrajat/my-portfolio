'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const wrapperRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Update menu height for smooth open/close
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div className="relative" ref={wrapperRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ease-in-out"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <svg
            className={`w-8 h-8 text-gray-800 dark:text-gray-300 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Dropdown Menu */}
        <nav
          id="mobile-menu"
          ref={menuRef}
          style={{
            maxHeight: isOpen ? menuHeight : 0,
            opacity: isOpen ? 1 : 0,
            transition: 'max-height 300ms ease, opacity 300ms ease',
            overflow: 'hidden',
          }}
          className="absolute right-0 top-full mt-2 w-56 xs:w-64 bg-white dark:bg-gray-800 shadow-lg rounded-md py-3 flex flex-col space-y-2 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <MobileLink href="/" setIsOpen={setIsOpen}>
            Home
          </MobileLink>
          <MobileLink href="/about" setIsOpen={setIsOpen}>
            About
          </MobileLink>
          <MobileLink href="/projects" setIsOpen={setIsOpen}>
            Projects
          </MobileLink>
          <MobileLink href="/resume" setIsOpen={setIsOpen}>
            Resume
          </MobileLink>
          <MobileLink href="/contact" setIsOpen={setIsOpen}>
            Contact
          </MobileLink>
        </nav>
      </div>
    </>
  );
}

function MobileLink({ href, children, setIsOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 focus:bg-indigo-200 dark:focus:bg-indigo-600 font-medium rounded-md transition-colors duration-200"
      role="menuitem"
      tabIndex={0}
    >
      {children}
    </Link>
  );
}
