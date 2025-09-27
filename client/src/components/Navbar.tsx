import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
<nav className="border-gray-200" style={{ backgroundColor: '#05125d' }}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./src/assets/xx.png" className="h-16 w-auto" alt="Logo" style={{ backgroundColor: 'transparent' }} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap" style={{ fontFamily: "'Cinzel Decorative', serif", color: '#cfb654' }}>Elite Care Travel</span>
  </a>
  <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        aria-haspopup="menu"
        aria-expanded={isLangOpen}
        onClick={() => setIsLangOpen((v) => !v)}
      >
        <svg className="w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#f93" d="M0 0h512v512H0z"/>
              <path fill="#fff" d="M0 170.7h512v170.6H0z"/>
              <path fill="#128807" d="M0 341.3h512V512H0z"/>
              <circle cx="256" cy="256" r="43.3" fill="#008"/>
              <circle cx="256" cy="256" r="39.4" fill="#fff"/>
              <circle cx="256" cy="256" r="25" fill="#008"/>
        </svg>
        <span>English</span>
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
      </button>
      {isLangOpen && (
        <div
          role="menu"
          aria-label="Choose Language"
          className="absolute right-0 top-12 z-20 w-44 rounded-md border border-gray-200 bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400">Choose Language</div>
          <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-blue-900" />
            English
          </button>
          <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-blue-600" />
            Français
          </button>
          <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-green-600" />
            العربية
          </button>
          </div>
      )}
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-language"
        aria-expanded={isMobileOpen}
        onClick={() => setIsMobileOpen((v) => !v)}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
  </div>
  <div className={`${isMobileOpen ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-language">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Accueil</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link to="/services" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to="/pricing" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
}
