import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EntryDoors from '@/components/EntryDoors'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })

export const metadata: Metadata = {
  title: 'Licensed Home Remodels Bakersfield CA | 4 Point Contractors',
  description: 'Roof coatings, additions, steel builds—LIC #1057645. Professional, high-quality remodeling and construction services in Bakersfield, California.',
  alternates: {
    languages: {
      'en-US': '/bakersfield-remodels',
      'es-US': '/es/bakersfield-remodels',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${figtree.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "4 Point Contractors",
              "image": "https://4pointcontractors.com/logo.png",
              "@id": "https://4pointcontractors.com",
              "url": "https://4pointcontractors.com",
              "telephone": "661-978-7016",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13117 Birkenfeld Ave",
                "addressLocality": "Bakersfield",
                "addressRegion": "CA",
                "postalCode": "93314",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.3733,
                "longitude": -119.0187
              },
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/4pointcontractors"
              ],
              "license": "http://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1057645"
            })
          }}
        />
      </head>
      <body className="bg-matte-black text-gray-200 font-inter flex flex-col min-h-screen">
        <EntryDoors />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        {/* Invisible Chatbot/COAI Target */}
        <div id="coai-bot-container" aria-hidden="true" />
      </body>
    </html>
  )
}
