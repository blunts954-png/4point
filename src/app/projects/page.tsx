import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Proof Gallery | 4 Point Contractors',
  description: 'A structural visual log of Bakersfield remodels, ADUs, and steel construction projects.',
}

export default function Projects() {
  const projects = [
    { title: 'Bakersfield Oildale Steel Build', tag: 'Commercial Steel', color: 'bg-gradient-to-tr from-matte-gray to-gray-800' },
    { title: 'Kern River Private Kitchen Gut', tag: 'Luxury Remodel', color: 'bg-gradient-to-tr from-sunset-orange-900/50 to-matte-gray' },
    { title: 'Rosedale ADU Turnkey', tag: 'Residential Addition', color: 'bg-gradient-to-tr from-gray-900 to-black' },
    { title: 'Downtown Heat-Proof Roof Coating', tag: 'Commercial Coating', color: 'bg-gradient-to-tr from-matte-black to-4point-orange/20' },
    { title: 'Northwest Bakersfield Master Bath', tag: 'Bathroom Remodel', color: 'bg-gradient-to-tr from-matte-gray to-black' },
    { title: 'Stockdale Expansion Shell', tag: 'Structural Framing', color: 'bg-gradient-to-tr from-sunset-orange-900/40 to-matte-gray' },
  ]

  return (
    <div className="bg-matte-black min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 border-b border-matte-gray pb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-figtree tracking-tighter text-white mb-6 uppercase">
            Visual <span className="text-4point-orange">Verification</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not renderings. Not concepts. This is executing on raw engineering. Browse the structured logs of our Bakersfield build history.
          </p>
        </div>

        {/* Gallery Grid pseudo infinite scroll / large grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((proj, i) => (
            <div key={i} className={`group relative overflow-hidden aspect-[4/3] rounded-sm ${proj.color} border border-white/5 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-4point-orange/30 cursor-crosshair`}>
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold font-figtree tracking-widest text-4point-orange uppercase bg-black/50 px-3 py-1 rounded backdrop-blur">
                    {proj.tag}
                  </span>
                  <span className="text-xs font-mono text-gray-500 bg-black/50 px-2 py-1">Geotag: BFL, CA</span>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-4point-orange transition-colors shadow-sm">{proj.title}</h3>
                   <div className="w-0 h-1 bg-4point-orange group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-0" />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center border-t border-matte-gray pt-12">
           <button className="text-4point-orange text-lg font-bold font-figtree tracking-widest uppercase hover:text-white transition-colors flex items-center">
             Load Structural Database <span className="block ml-4 h-1 w-8 bg-4point-orange group-hover:bg-white transition-colors" />
           </button>
        </div>
      </div>
    </div>
  )
}
