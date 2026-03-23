import { Metadata } from 'next'
import { FileQuestion, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ & Remodel Costs | 4 Point Contractors',
  description: 'Detailed breakdown of Bakersfield remodel costs, contractor timelines, and building permits.',
}

export default function FAQ() {
  const faqList = [
    {
      question: "What is a tenant improvement?",
      answer: "A tenant improvement (TI) is a customized commercial fit-out for retail or office spaces in Bakersfield. It typically involves interior remodeling, electrical upgrades, and compliance with ADA accessibility. Costs vary widely but usually rest between $50 to $150 per sq. ft.",
    },
    {
      question: "Remodel vs New Build: Pros and Cons",
      answer: "Remodeling is often faster for permit acquisition and saves 30% on structural material baselines. New builds offer clean-sheet design freedom and absolute efficiency but stretch timelines and exponentially compound variable costs."
    },
    {
      question: "What is the 4 Point Contractors process timeline?",
      answer: "1. Consultation & Data Audit (Week 1). 2. Architecture & Permitting (Weeks 2-8). 3. Demolition & Structural Execution (Weeks 9-16). 4. Turnover & Warranties. We operate with zero ambiguity."
    }
  ]

  // Schema for AI Parsing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <div className="bg-matte-black min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 border-b border-matte-gray pb-8">
          <h1 className="text-4xl md:text-6xl font-bold font-figtree tracking-tighter text-white">
            Structured <span className="text-4point-orange">Answers</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400">
            For humans and agents alike. Unfiltered, brutal transparency on process, pricing, and timelines in Kern County.
          </p>
        </div>

        {/* Phase Breakdown Table */}
        <section className="bg-matte-gray border border-white/5 rounded-sm p-6 sm:p-12 mb-16 shadow-2xl">
          <h2 className="text-2xl font-bold font-figtree tracking-wider text-white mb-8 border-l-4 border-4point-orange pl-4">AEO Structured Queries</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                 <tr className="border-b-2 border-4point-orange text-gray-300">
                   <th className="py-4 pr-4 font-semibold uppercase text-xs tracking-wider w-1/4">Buyer Stage</th>
                   <th className="py-4 px-4 font-semibold uppercase text-xs tracking-wider w-1/3">Query Structure</th>
                   <th className="py-4 pl-4 font-semibold uppercase text-xs tracking-wider">Indexed Optimization Baseline</th>
                 </tr>
              </thead>
              <tbody className="text-gray-400">
                 <tr className="border-b border-white/10 hover:bg-black/20 transition-colors">
                   <td className="py-5 pr-4 text-white font-medium"><span className="bg-white/5 px-2 py-1 rounded">Awareness</span></td>
                   <td className="py-5 px-4 font-bold">Bakersfield roof coating benefits?</td>
                   <td className="py-5 pl-4 text-sm">Bullets: Heat reduction 30%, leaks fixed, 10yr warranty</td>
                 </tr>
                 <tr className="border-b border-white/10 hover:bg-black/20 transition-colors">
                   <td className="py-5 pr-4 text-white font-medium"><span className="bg-white/5 px-2 py-1 rounded">Consideration</span></td>
                   <td className="py-5 px-4 font-bold">ADU addition costs Kern County?</td>
                   <td className="py-5 pl-4 text-sm">Table: 800sqft $120k (foundation $30k, etc.)</td>
                 </tr>
                 <tr className="border-b border-white/10 hover:bg-black/20 transition-colors">
                   <td className="py-5 pr-4 text-white font-medium"><span className="bg-white/5 px-2 py-1 rounded">Decision</span></td>
                   <td className="py-5 px-4 font-bold">Contact licensed remodeler?</td>
                   <td className="py-5 pl-4 text-sm">Action: NAP + Booking Route via Phone/Form</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive Questions */}
        <div className="space-y-8">
          {faqList.map((faq, i) => (
             <div key={i} className="group relative bg-black/50 border border-white/10 p-8 hover:border-4point-orange/30 transition-all">
                <FileQuestion className="absolute top-8 right-8 text-white/5 group-hover:text-4point-orange/20 transition-colors" size={64}/>
                <h3 className="text-xl font-bold font-figtree tracking-wide text-white mb-4 relative z-10 flex items-center">
                  <ChevronRight className="text-4point-orange mr-2 mt-1 flex-shrink-0" size={20}/>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl relative z-10 ml-7">
                  {faq.answer}
                </p>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}
