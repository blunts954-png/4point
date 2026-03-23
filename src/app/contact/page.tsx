import { Metadata } from 'next'
import { PhoneCall, Mail, Navigation, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact & Route Initiation | 4 Point Contractors',
  description: 'Connect with Bakersfield\'s Licensed Remodel Authority. Get a quote for your addition or remodel today.',
}

export default function Contact() {
  return (
    <div className="bg-matte-black min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 border-b border-matte-gray pb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-figtree tracking-tighter text-white mb-6 uppercase">
            Deploy <span className="text-4point-orange">Communications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Time is the only asset that scales. Fill out the form below or interact directly with our AI routing agent to fast-track your Bakersfield project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl relative">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-4point-orange pl-4">Project Parameters</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                  <input type="text" className="w-full bg-matte-gray border border-white/10 p-4 text-white focus:outline-none focus:border-4point-orange focus:ring-1 focus:ring-4point-orange transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                  <input type="text" className="w-full bg-matte-gray border border-white/10 p-4 text-white focus:outline-none focus:border-4point-orange focus:ring-1 focus:ring-4point-orange transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Phone Output</label>
                <input type="tel" className="w-full bg-matte-gray border border-white/10 p-4 text-white focus:outline-none focus:border-4point-orange focus:ring-1 focus:ring-4point-orange transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Project Objective</label>
                <select className="w-full bg-matte-gray border border-white/10 p-4 text-white focus:outline-none focus:border-4point-orange focus:ring-1 focus:ring-4point-orange transition-all appearance-none">
                  <option className="bg-matte-black">Select Objective</option>
                  <option className="bg-matte-black">Roof Coating</option>
                  <option className="bg-matte-black">ADU Addition</option>
                  <option className="bg-matte-black">Steel Build</option>
                  <option className="bg-matte-black">Kitchen/Bath Remodel</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Scope Outline</label>
                <textarea rows={4} className="w-full bg-matte-gray border border-white/10 p-4 text-white focus:outline-none focus:border-4point-orange focus:ring-1 focus:ring-4point-orange transition-all" />
              </div>
              
              <button disabled className="w-full bg-4point-orange opacity-50 cursor-not-allowed hover:bg-sunset-orange-600 text-white font-bold tracking-widest uppercase py-6 px-4 mt-8 flex justify-center items-center transition-colors">
                <MessageSquare className="mr-3" />
                Bot Routing Active
              </button>
            </form>
          </div>

          <div className="space-y-12">
            
            <div className="bg-matte-gray p-8 border border-white/5 flex flex-col items-center text-center justify-center min-h-[300px]">
               <PhoneCall size={48} className="text-4point-orange mb-6" />
               <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Direct Line</h3>
               <p className="text-gray-400 mb-6 max-w-xs mx-auto">Bypass the queue. Speak directly to our estimators for rapid Kern County deployment.</p>
               <a href="tel:661-978-7016" className="text-4xl font-black font-figtree tracking-tighter text-white hover:text-4point-orange transition-colors">661-978-7016</a>
            </div>

            <div className="bg-matte-gray p-8 border-t-4 border-4point-orange">
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide flex items-center">
                <Navigation size={24} className="text-4point-orange mr-3" />
                Headquarters
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="font-bold text-gray-300">Address</span>
                  <span className="text-right">13117 Birkenfeld Ave<br/>Bakersfield, CA 93314</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="font-bold text-gray-300">License</span>
                  <span className="text-right">CSLB #1057645</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-gray-300">Service Range</span>
                  <span className="text-right">Kern County, CA</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
