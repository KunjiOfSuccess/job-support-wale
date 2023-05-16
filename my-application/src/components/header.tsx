import { useState } from 'react';
import { logoPath } from '@/constants/constants';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-6 px-6 shadow sticky top-0 w-full z-[1]">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" passHref legacyBehavior>
            <a>
              <img src={logoPath} alt="Logo" className="w-8 h-8" />
            </a>
          </Link>
        </div>
        <div className='hidden md:block'>
        <div className={`flex items-center space-x-6  md:block`}>
          <Link href="/" passHref legacyBehavior>
            <a className="text-black hover:text-gray-500">Home</a>
          </Link>
          <Link href="/job-support" passHref legacyBehavior>
            <a className="text-black hover:text-gray-500">Job Support</a>
          </Link>
          <Link href="/join-us" passHref legacyBehavior>
            <a className="text-black hover:text-gray-500">Join Us</a>
          </Link>
          <Link href="/contact-us" passHref legacyBehavior>
            <a className="text-black hover:text-gray-500">Contact Us</a>
          </Link>
          <Link href="/book-demo" passHref legacyBehavior>
            <a className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">Book a Demo</a>
          </Link>
        </div>
        </div>
        <div className="sm:hidden">
          <button
            className="text-black hover:text-gray-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Collapsible Menu */}
      <div className={`mt-4 sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" passHref legacyBehavior>
          <a className="block py-2 text-black hover:text-gray-500">Home</a>
        </Link>
        <Link href="/job-support" passHref legacyBehavior>
          <a className="block py-2 text-black hover:text-gray-500">Job Support</a>
        </Link>
        <Link href="/join-us" passHref legacyBehavior>
          <a className="block py-2 text-black hover:text-gray-500">Join Us</a>
        </Link>
        <Link href="/contact-us" passHref legacyBehavior>
          <a className="block py-2 text-black hover:text-gray-500">Contact Us</a>
        </Link>
        <Link href="/book-demo" passHref legacyBehavior>
          <a className="block py-2 px-4 mt-2 text-white bg-black rounded-md hover:bg-gray-800">
            Book a Demo
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;

