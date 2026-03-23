import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-matte-black border-t border-matte-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="hover:opacity-80 transition-opacity mb-4 block">
              <Image 
                src="/logo.png" 
                alt="4 Point Contractors Logo" 
                width={120} 
                height={50} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Bakersfield&apos;s Licensed Remodel Authority. From Concept to Completion for 25 years.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold font-figtree tracking-widest text-sm uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="tel:661-978-7016" className="hover:text-4point-orange transition-colors font-medium">661-978-7016</a>
              </li>
              <li>
                <div className="flex flex-col">
                  <span>13117 Birkenfeld Ave</span>
                  <span>Bakersfield, CA 93314</span>
                </div>
              </li>
              <li>
                <a 
                  href="http://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1057645" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors border-b border-gray-600 pb-0.5 inline-block"
                >
                  LIC #1057645
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold font-figtree tracking-widest text-sm uppercase mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/services/roof-coatings" className="hover:text-white transition-colors">Roof Coatings</Link></li>
              <li><Link href="/services/additions" className="hover:text-white transition-colors">Home Additions & ADUs</Link></li>
              <li><Link href="/services/steel-builds" className="hover:text-white transition-colors">Steel Builds</Link></li>
              <li><Link href="/services/tenant-improvements" className="hover:text-white transition-colors">Tenant Improvements</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold font-figtree tracking-widest text-sm uppercase mb-6">Learn</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Galleries</Link></li>
              <li><Link href="/bakersfield-remodels" className="hover:text-white transition-colors">Bakersfield Local Hub</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Cost & Timeline FAQ</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-matte-gray pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 4 Point Contractors. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Engineered for <span className="text-gray-400">Bakersfield Local MAPS</span> | Powered by COAI Integration
          </div>
        </div>
      </div>
    </footer>
  )
}
