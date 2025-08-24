"use client"

import { useRouter } from "next/navigation";



export function FeaturesSection() {
  const router = useRouter();
  return (
    <section id="features" className="py-20 bg-slate-200 relative overflow-hidden">
          {/* Background decoration */}
          
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-violet-700 px-4 py-2 rounded-full mb-6 border border-violet-200/50">
              <span className="text-sm font-medium">🚀 Choose Your Generator</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Professional Print
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Generators
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Choose from our specialized generators to create perfect layouts for your printing needs. 
              <span className="text-violet-600 font-medium"> Professional results guaranteed</span>.
            </p>
            
            {/* Generator Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* CNIC Generator Card */}
              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🆔</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">CNIC Layout Generator</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Create perfect front-back CNIC layouts with precise measurements. Upload both sides and get print-ready results.
                </p>
                <button
                  onClick={() => router.push('/front-back-card')}
                  className="w-full cursor-pointer bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300"
                >
                  Launch CNIC Generator →
                </button>
                <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500">
                  <span>• 85×53.9mm cards</span>
                  <span>• A4 optimized</span>
                </div>
              </div>

              {/* Passport Generator Card */}
              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Passport Photo Maker</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transform your photo into multiple passport-size prints. Perfect for applications, visas, and official documents.
                </p>
                <button
                  onClick={() =>  router.push('/passport-photo')}
                  className="w-full  cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Launch Passport Maker →
                </button>
                <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500">
                  <span>• 35×45mm photos</span>
                  <span>• 4×5 grid layout</span>
                </div>
              </div>
            </div>
            
            {/* Coming Soon Preview */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔜</span>
                </div>
                <h4 className="font-bold text-emerald-700">Coming Soon</h4>
              </div>
              <p className="text-sm text-emerald-600 font-medium">Polaroid Maker</p>
              <p className="text-xs text-slate-600 mt-1">Create beautiful vintage-style polaroid prints from your photos</p>
            </div>
          </div>
        </section>

  );
}