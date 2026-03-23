import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Params {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const titles: Record<string, string> = {
    'roof-coatings': 'Bakersfield Roof Coatings & Heat Proofing',
    'additions': 'ADU Additions Kern County',
    'steel-builds': 'Pre-Engineered Steel Builds Bakersfield',
    'remodels': 'Full-Scale Home & Kitchen Remodels',
  }
  return {
    title: `${titles[params.slug] || 'Service'} | 4 Point Contractors`,
    description: `Specialized ${params.slug.replace('-', ' ')} contracting for Bakersfield, CA. License #1057645.`,
  }
}

export default function ServiceDetail({ params }: Params) {
  const contentMap: Record<string, { title: string, desc: string, details: string[] }> = {
    'roof-coatings': {
      title: 'Roof Coating Systems',
      desc: 'Heat-proof technology engineered for Kern County weather. Permanent leak sealing without tear-offs.',
      details: ['30% reduction in underlying roof heat', '10-year manufacturer warranty', 'Cost-effective alternative to reroofing']
    },
    'additions': {
      title: 'ADU Additions',
      desc: 'Turnkey accessory dwelling units for Kern County. We handle the 60-day permit process and execution.',
      details: ['Starting at roughly $120k for 800 sq ft', 'Title 24 Compliance handled', 'Foundation to trim completion']
    },
    'steel-builds': {
      title: 'Pre-Engineered Steel Builds',
      desc: 'High-durability commercial and residential structures engineered for maximum open-span and seismic stability.',
      details: ['Rapid assembly timelines', 'Engineered to CA lateral force limits', 'Customizable external facades']
    },
    'remodels': {
      title: 'Home & Kitchen Remodels',
      desc: 'Surgical remodels. Typical kitchen guts range from $25k to $60k depending on specifications.',
      details: ['Load-bearing wall removal', 'High-end custom cabinetry via local fabricators', 'Full electrical and plumbing updates']
    }
  }

  const data = contentMap[params.slug]
  if (!data) return notFound()

  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
           <Link href="/services" className="text-4point-orange text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-4 inline-block">← Back to Entities</Link>
           <h1 className="text-4xl md:text-6xl font-bold font-figtree tracking-tighter text-white mb-6 uppercase">{data.title}</h1>
           <p className="text-2xl text-gray-400 font-light border-l-4 border-4point-orange pl-6 leading-relaxed">
             {data.desc}
           </p>
        </div>

        <div className="bg-matte-gray border border-white/5 p-8 md:p-12 shadow-2xl">
           <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Executive Summary</h2>
           <ul className="space-y-6">
             {data.details.map((item, i) => (
                <li key={i} className="flex items-start">
                   <span className="text-4point-orange mr-4 font-bold">0{i+1}</span>
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
             ))}
           </ul>
           
           <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6">
              <a href="tel:661-978-7016" className="bg-4point-orange text-white text-center font-bold tracking-widest uppercase py-4 px-8 hover:bg-sunset-orange-600 transition-colors w-full sm:w-auto">
                Request Route Estimate
              </a>
              <Link href="/projects" className="border border-white/20 text-gray-300 text-center font-bold tracking-widest uppercase py-4 px-8 hover:text-white hover:border-white transition-colors w-full sm:w-auto">
                View Proof Gallery
              </Link>
           </div>
        </div>
      </div>
    </div>
  )
}
