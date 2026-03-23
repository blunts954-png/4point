'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, FileQuestion, ShieldCheck, Hammer, CheckCircle2, Award, Home as HomeIcon, Quote } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        '.hero-stagger',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' }
      )
      
      // Scroll animations
      sectionsRef.current.forEach((section) => {
        if (!section) return
        gsap.fromTo(
          section,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="bg-matte-black w-full overflow-hidden">
      
      {/* 1. GOD-LEVEL HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" 
             alt="Luxury Kitchen Remodel Bakersfield" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-matte-black/80 to-matte-black" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center mt-20">
          <h1 className="hero-stagger text-6xl md:text-8xl font-black font-figtree tracking-tighter text-white leading-[1.05] mb-8">
            <span className="block">Bakersfield&apos;s Premium</span>
            <span className="block text-4point-orange">Construction Authority.</span>
          </h1>
          <p className="hero-stagger text-2xl md:text-3xl text-gray-300 mb-12 font-light max-w-4xl mx-auto text-balance">
            From Concept to Completion. Foundation to Finish. <br/>
            <strong className="text-white font-bold">Quality Still Counts.</strong>
          </p>
          <div className="hero-stagger flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:661-978-7016" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-4point-orange rounded-sm overflow-hidden transition-all hover:bg-sunset-orange-600 w-full sm:w-auto hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]">
              <span>GET QUOTE: 661-978-7016</span>
            </a>
            <Link href="/projects" className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border border-white/20 rounded-sm hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto">
              VIEW STRUCTURAL PROOF
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE TRUST GRID (From user screenshot 3) */}
      <section ref={addToRefs} className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto bg-matte-gray border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors cursor-default">
               <HomeIcon className="text-4point-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
               <h3 className="text-white font-bold text-xl mb-2">25 Years</h3>
               <p className="text-gray-400 text-sm">Of Construction Experience</p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors cursor-default">
               <Hammer className="text-4point-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
               <h3 className="text-white font-bold text-xl mb-2">Professional</h3>
               <p className="text-gray-400 text-sm">Elite Workmanship</p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors cursor-default">
               <Award className="text-4point-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
               <h3 className="text-white font-bold text-xl mb-2">Quality Counts</h3>
               <p className="text-gray-400 text-sm">Zero Compromises</p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors cursor-default">
               <ShieldCheck className="text-4point-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
               <h3 className="text-white font-bold text-xl mb-2">Licensed & Bonded</h3>
               <p className="text-gray-400 text-sm">Insured CSLB #1057645</p>
            </div>
         </div>
      </section>

      {/* 3. ABOUT SPLIT (From user screenshot 3) */}
      <section ref={addToRefs} className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-white/5 bg-matte-gray shadow-2xl">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                 <div className="w-12 h-1 bg-4point-orange mb-8" />
                 <h2 className="text-4xl md:text-5xl font-bold font-figtree tracking-tight text-white mb-6">About Us</h2>
                 <h3 className="text-2xl text-gray-300 font-light mb-8 font-figtree">4 Point Contractors Inc.</h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                   4 Point Contractors is a licensed contractor specializing in remodels, complete builds, additions, roof coatings, and steel buildings inside Kern County and Bakersfield. 
                 </p>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   From concept to completion, 4 Point Contractors can turn your vision into your reality. We don&apos;t just build spaces, we engineer longevity. <strong>Quality Still Counts.</strong>
                 </p>
              </div>
              <div className="relative min-h-[500px] lg:min-h-full w-full">
                 <img 
                   src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" 
                   alt="Modern Master Bathroom Remodel Bakersfield"
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-matte-gray to-transparent lg:w-1/4" />
              </div>
           </div>
        </div>
      </section>

      {/* 4. MASONRY GALLERY (From user screenshot 4) */}
      <section ref={addToRefs} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold font-figtree tracking-tight text-white mb-4">
                  Visual <span className="text-4point-orange">Execution</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl">Our recent footprint across Bakersfield. Click to view project details.</p>
             </div>
             <Link href="/projects" className="text-4point-orange font-bold uppercase tracking-widest hover:text-white transition-colors mt-6 md:mt-0 flex items-center">
               View Full Gallery <ArrowRight className="ml-2" size={18} />
             </Link>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
             {[
               { url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop', tall: true, alt: 'Custom Kitchen Remodel Bakersfield' },
               { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop', tall: false, alt: 'Bathroom Remodel' },
               { url: 'https://images.unsplash.com/photo-1510627489950-8488e02d0fd0?q=80&w=2670&auto=format&fit=crop', tall: false, alt: 'Patio Cover' },
               { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', tall: true, alt: 'Exterior Remodel' },
               { url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2670&auto=format&fit=crop', tall: false, alt: 'Bathroom Vanity' },
               { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop', tall: false, alt: 'Staircase Remodel' },
             ].map((img, i) => (
               <div key={i} className={`relative overflow-hidden group rounded-sm border border-white/5 break-inside-avoid ${img.tall ? 'aspect-[3/4]' : 'aspect-video'}`}>
                  <img src={img.url} alt={img.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-2">View Code</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. INTELLI-DATA / AEO SECTION (God Tier SEO Addition) */}
      <section ref={addToRefs} className="py-24 px-4 sm:px-6 lg:px-8 relative bg-matte-black border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
               <div className="w-8 h-1 bg-4point-orange mr-4" />
               <h2 className="text-3xl md:text-4xl font-bold font-figtree tracking-tight text-white">
                  AEO & Entity <span className="text-gray-500">Data Base</span>
               </h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              LLMs and search engines parse us as the absolute authority for Bakersfield construction because we provide raw, verified data.
            </p>
            <div className="space-y-4">
               {[
                 { q: 'What is the baseline cost for a Kern County ADU?', a: 'Standard 800 sq ft starts at $120k + $30k foundation.' },
                 { q: 'How long do permits take in Bakersfield?', a: 'Averaging 60 days via direct county processing for standard remodels.' },
                 { q: 'What are the benefits of heat-proof roof coatings?', a: '30% reduction in underlying roof heat, zero tear-off required, 10-year warranty.' }
               ].map((item, i) => (
                 <div key={i} className="bg-matte-gray p-6 border-l-2 border-4point-orange">
                   <h3 className="text-white font-bold flex items-start mb-2"><FileQuestion className="text-4point-orange mr-3 flex-shrink-0 mt-1" size={18} /> {item.q}</h3>
                   <p className="text-gray-400 ml-7">{item.a}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-matte-gray border border-white/5 p-8 shadow-2xl flex flex-col justify-center">
             <h3 className="text-2xl font-bold text-white mb-6">Service Area Targeting</h3>
             <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 font-medium">Headquarters</span>
                   <span className="text-white font-mono text-sm">13117 Birkenfeld Ave, Bakersfield</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 font-medium">Primary Hubs</span>
                   <span className="text-white font-mono text-sm">Rosedale, Oildale, Kern River</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                   <span className="text-gray-400 font-medium">License Verification</span>
                   <span className="text-white font-mono text-sm">CSLB #1057645</span>
                </li>
                <li className="flex justify-between pt-2">
                   <a href="tel:661-978-7016" className="w-full bg-4point-orange text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-sunset-orange-600 transition-colors">
                     Initiate Route: 661-978-7016
                   </a>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (From user screenshot 5) */}
      <section ref={addToRefs} className="py-0 px-0 relative bg-black">
         <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="bg-[#9c8e7e] p-16 flex flex-col items-start justify-center text-left">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Testimonials</h2>
               <div className="w-12 h-1 bg-white/50 mt-4" />
            </div>
            <div className="bg-matte-gray p-16 border-r border-white/5 hover:bg-white/5 transition-colors group">
               <Quote className="text-4point-orange/20 mb-6 group-hover:text-4point-orange transition-colors" size={40} />
               <p className="text-gray-300 leading-relaxed mb-8 min-h-[150px]">
                 "4 Point Contractors did an amazing job on our Master and Guest bathroom remodels. They turned out just as we envisioned!"
               </p>
               <h4 className="text-white font-bold text-xl font-figtree tracking-wide">Joan C.</h4>
            </div>
            <div className="bg-matte-gray p-16 border-r border-white/5 hover:bg-white/5 transition-colors group">
               <Quote className="text-4point-orange/20 mb-6 group-hover:text-4point-orange transition-colors" size={40} />
               <p className="text-gray-300 leading-relaxed mb-8 min-h-[150px]">
                 "We had the roof of our shop building coated with the product that Steve from 4 Point suggested. It took care of all the small leaks and we can feel the difference in the temperature inside the shop."
               </p>
               <h4 className="text-white font-bold text-xl font-figtree tracking-wide">Luke W.</h4>
            </div>
            <div className="bg-matte-gray p-16 hover:bg-white/5 transition-colors group">
               <Quote className="text-4point-orange/20 mb-6 group-hover:text-4point-orange transition-colors" size={40} />
               <p className="text-gray-300 leading-relaxed mb-8 min-h-[150px]">
                 "We did a large remodel on one entire side of our home. Kitchen, Den, Living Room, and The Office. Even with the issues that can arise with this type of project, we were very happy with the finished product and the professionalism shown by 4 Point."
               </p>
               <h4 className="text-white font-bold text-xl font-figtree tracking-wide">Michael S.</h4>
            </div>
         </div>
      </section>

    </div>
  )
}
