import Image from 'next/image'
import Link from 'next/link'
import { Phone, Email } from '@mui/icons-material'
import { logoPath } from '@/constants/constants'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8">
                <Image src={logoPath} alt="Logo" width={32} height={32} />
              </div>
              <span className="ml-2">Your Logo</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white">Facebook</span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white">Instagram</span>
              </a>
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <div className="flex items-center mb-2">
              <Phone className="text-white mr-2" />
              <a href="tel:+918010592093" className="text-white">
                +91-8010592093
              </a>
            </div>
            <div className="flex items-center">
              <Email className="text-white mr-2" />
              <a href="mailto:pankaj12.pj88@gmail.com" className="text-white">
                pankaj12.pj88@gmail.com
              </a>
            </div>
          </div>
          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" passHref legacyBehavior>
                  <a className="text-white hover:text-gray-500">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" passHref legacyBehavior>
                  <a className="text-white hover:text-gray-500">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" passHref legacyBehavior>
                  <a className="text-white hover:text-gray-500">
                    Terms and Conditions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
