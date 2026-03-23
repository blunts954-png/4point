'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-[9999] bg-matte-black/90 backdrop-blur-md border-b border-matte-gray transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="4 Point Contractors Logo" 
                width={120} 
                height={50} 
                className="object-contain"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200">Services</Link>
            <Link href="/projects" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200">Projects</Link>
            <Link href="/bakersfield-remodels" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200">Local Hub</Link>
            <Link href="/faq" className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200">FAQ</Link>
            
            <a 
              href="tel:661-978-7016" 
              className="bg-4point-orange text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-sunset-orange-600 transition-colors flex items-center space-x-2"
            >
              <PhoneCall size={18} />
              <span>Get Quote: 661-978-7016</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-matte-black border-t border-matte-gray pb-4 px-4 shadow-xl">
          <div className="flex flex-col space-y-4 pt-4">
            <Link onClick={() => setIsOpen(false)} href="/services" className="block text-lg font-figtree tracking-wide text-gray-300 hover:text-white">Services</Link>
            <Link onClick={() => setIsOpen(false)} href="/projects" className="block text-lg font-figtree tracking-wide text-gray-300 hover:text-white">Projects</Link>
            <Link onClick={() => setIsOpen(false)} href="/bakersfield-remodels" className="block text-lg font-figtree tracking-wide text-gray-300 hover:text-white">Local Hub</Link>
            <Link onClick={() => setIsOpen(false)} href="/faq" className="block text-lg font-figtree tracking-wide text-gray-300 hover:text-white">FAQ</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="block text-lg font-figtree tracking-wide text-gray-300 hover:text-white">Contact</Link>
            
            <div className="pt-4 border-t border-matte-gray">
              <a 
                href="tel:661-978-7016" 
                className="w-full bg-4point-orange text-white px-6 py-4 rounded-sm font-bold text-center flex justify-center items-center shadow-lg active:scale-95 transition-transform"
              >
                <PhoneCall size={20} className="mr-2" />
                GET QUOTE NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
