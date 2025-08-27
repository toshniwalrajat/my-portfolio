import Link from 'next/link';
import MobileMenu from './components/MobileMenu';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          {/* Full width container */}
          <div className="w-full flex items-center justify-between px-6 py-4">
            {/* Portfolio title at the leftmost corner */}
            <div>
              <Link href="/">
                <span className="text-xl font-extrabold text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors duration-200">
                  My Portfolio
                </span>
              </Link>
            </div>
            {/* Desktop menu (hidden on small screens) */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/resume"
                className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
            {/* Mobile menu button (shown on small screens only) */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
