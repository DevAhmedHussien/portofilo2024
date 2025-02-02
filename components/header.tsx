"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaDownload } from 'react-icons/fa';
const navigation = [
  { name: "Home", href: "#" },
  // { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gradient-to-br from-[#4169E1] to-[#4169E1] z-50">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 text-2xl font-bold">
            <span className="text-[36px] text-white">Ahmed</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-yellow-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* */}
          <Link
      href="/Ahmed2024.pdf" // Link to the PDF file
      download="Ahmed2024.pdf"
      className="inline-flex items-center justify-center w-[160px] h-[48px] bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    >
      <FaDownload className="mr-2 text-lg" />
      My Resume
    </Link>
              </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{height:'400px'}}>
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5 text-2xl font-bold">
                Ahmed
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}