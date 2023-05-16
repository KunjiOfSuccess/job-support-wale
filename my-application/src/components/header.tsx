import { useState } from 'react'
import { logoPath } from '@/constants/constants'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white py-6 px-6 shadow sticky top-0 w-full z-1">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <span>
              <Image src={logoPath} alt="Logo" className="w-8 h-8" />
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className={`flex items-center space-x-6  md:block`}>
            <Link href="/">
              <span className="text-black hover:text-gray-500">Home</span>
            </Link>
            <Link href="/job-support">
              <span className="text-black hover:text-gray-500">
                Job Support
              </span>
            </Link>
            <Link href="/join-us">
              <span className="text-black hover:text-gray-500">Join Us</span>
            </Link>
            <Link href="/contact-us">
              <span className="text-black hover:text-gray-500">Contact Us</span>
            </Link>
            <Link href="/book-demo">
              <span className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
                Book a Demo
              </span>
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
        <Link href="/">
          <span className="block py-2 text-black hover:text-gray-500">
            Home
          </span>
        </Link>
        <Link href="/job-support">
          <span className="block py-2 text-black hover:text-gray-500">
            Job Support
          </span>
        </Link>
        <Link href="/join-us">
          <span className="block py-2 text-black hover:text-gray-500">
            Join Us
          </span>
        </Link>
        <Link href="/contact-us">
          <span className="block py-2 text-black hover:text-gray-500">
            Contact Us
          </span>
        </Link>
        <Link href="/book-demo">
          <span className="block py-2 px-4 mt-2 text-white bg-black rounded-md hover:bg-gray-800">
            Book a Demo
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
