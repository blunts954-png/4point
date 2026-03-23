import { Metadata } from 'next'
import { MapPin, PhoneCall, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bakersfield Local Hub | 4 Point Contractors',
  description: 'Bakersfield remodeling authority hub. Discover costs, regulations, and permit guides for Kern County.',
}

export default function BakersfieldHub() {
  return (
    <div className="bg-matte-black min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-figtree tracking-tighter text-white mb-6">
            <MapPin className="inline-block text-4point-orange mr-4 mb-2" size={48} />
            Bakersfield Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto border-b border-white/10 pb-10">
            You are local. We are local. But unlike your average contractor, we operate with architectural precision. 
            This is your knowledge base for Kern County building codes, localized remodel prices, and regional structural guidelines.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-matte-gray p-8 rounded-sm shadow-xl border border-white/5">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">2026 Bakersfield Building Codes Update</h2>
              <p className="text-gray-400 mb-6">
                Kern County is tightening structural requirements. ADUs must meet stringent Title 24 energy standards, and heat mitigation is paramount. We build exclusively to outlast minimum thresholds.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-300">
                  <ArrowRight className="text-4point-orange mr-3 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Roof Coatings (Cool Roofs):</strong> Exceeding Title 24 reflectance values to slash internal HVAC costs.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ArrowRight className="text-4point-orange mr-3 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Seismic Integrity:</strong> Steel builds pre-engineered for Kern&apos;s lateral force requirements.</span>
                </li>
              </ul>
            </section>

          </div>

          <div className="space-y-8 h-full">
            <div className="bg-gradient-to-br from-matte-gray to-black border-2 border-4point-orange p-8 rounded-sm">
              <h3 className="text-xl font-bold text-white mb-4">Command Center</h3>
              <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-gray-700">
                Operating out of Bakersfield, California.
                <br />13117 Birkenfeld Ave
                <br />Bakersfield, CA 93314
              </p>
              <a 
                href="tel:661-978-7016" 
                className="w-full bg-4point-orange text-white px-6 py-4 rounded-sm font-bold text-center flex justify-center items-center hover:bg-sunset-orange-600 transition-colors"
              >
                <PhoneCall size={20} className="mr-2" />
                INITIATE PROJECT
              </a>
            </div>
            
            <div className="bg-matte-gray border border-white/5 p-8 rounded-sm">
               <h3 className="text-xl font-bold text-white mb-4">Live Resources</h3>
               <ul className="space-y-3 text-sm">
                 <li><Link href="/faq" className="text-4point-orange hover:text-white transition-colors">→ ADU Additions FAQ</Link></li>
                 <li><Link href="/faq" className="text-4point-orange hover:text-white transition-colors">→ Kitchen Remodel Base Costs</Link></li>
                 <li><a href="http://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1057645" className="text-4point-orange hover:text-white transition-colors">→ Verify License #1057645</a></li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
