import { Metadata } from 'next'
import { HardHat, Warehouse, Home, Droplets } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contracting Services | 4 Point Contractors',
  description: 'Specialists in Roof Coatings, ADU Additions, Steel Builds, and Structural Remodels in Bakersfield.',
}

const servicesList = [
  {
    icon: <Droplets size={48} className="text-4point-orange" />,
    title: 'Roof Coatings',
    slug: 'roof-coatings',
    desc: 'Kern County heat-proof elastomeric coating systems. We seal leaks without tear-offs and cut HVAC costs by reflecting up to 85% of solar heat.',
    features: ['10-Year Warranty', '30% Heat Reduction', 'Permanent Leak Protection']
  },
  {
    icon: <Home size={48} className="text-4point-orange" />,
    title: 'ADU Additions',
    slug: 'additions',
    desc: 'Turnkey detached or attached accessory dwelling units. Engineered to master local zoning laws and maximize your property footprint.',
    features: ['Permit Expedition', 'Title 24 Compliant', 'Concept to Keys']
  },
  {
    icon: <Warehouse size={48} className="text-4point-orange" />,
    title: 'Steel Builds',
    slug: 'steel-builds',
    desc: 'Commercial and heavy-duty residential structural steel frameworks. Pre-engineered for durability against California lateral force limits.',
    features: ['High Tensile Durability', 'Open-Span Architecture', 'Rapid Assembly']
  },
  {
    icon: <HardHat size={48} className="text-4point-orange" />,
    title: 'Home Remodels',
    slug: 'remodels',
    desc: 'Complete kitchen, bath, and whole-house gut transformations. We obliterate 1990s layouts and engineer ultra-modern, high-efficiency spaces.',
    features: ['Custom Cabinetry', 'Structural Load Adjustments', 'High-End Detail']
  }
]

export default function Services() {
  return (
    <div className="bg-matte-black min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 border-b border-matte-gray pb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-figtree tracking-tighter text-white mb-6 uppercase">
            Surgical <span className="text-4point-orange">Precision</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don&apos;t build to satisfy minimum code—we build to exceed it. Explore our primary operating entities for the Bakersfield sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesList.map((svc, i) => (
             <div key={i} className="group bg-black border border-white/5 overflow-hidden hover:border-4point-orange/40 transition-all p-8 md:p-12 relative flex flex-col h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-4point-orange/5 rounded-bl-[100px] -z-10 group-hover:bg-4point-orange/10 transition-colors" />
               <div className="mb-8">{svc.icon}</div>
               <h2 className="text-3xl font-bold font-figtree tracking-wide text-white mb-4 group-hover:text-4point-orange transition-colors">
                 {svc.title}
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                 {svc.desc}
               </p>
               
               <ul className="space-y-3 mb-10 border-l border-white/10 pl-6">
                 {svc.features.map((feat, j) => (
                    <li key={j} className="text-gray-300 font-medium">
                      <span className="text-4point-orange mr-2">/</span> {feat}
                    </li>
                 ))}
               </ul>
               
               <Link 
                  href={`/services/${svc.slug}`} 
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-4point-orange transition-colors"
                >
                  View Details <span className="ml-3 border-b-2 border-4point-orange w-8 pb-1 inline-block" />
               </Link>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}
