import { Button } from "./ui/button";
import { ArrowDown, ArrowRight, Sparkles, Stars } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 lg:py-36">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-400 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-cyan-100 text-violet-700 px-6 py-3 rounded-full mb-8 border border-violet-200/50">
            <div className="relative">
              <Sparkles className="w-4 h-4" />
              <Stars className="w-3 h-3 absolute -top-1 -right-1 text-cyan-500" />
            </div>
            <span className="text-sm font-medium">Professional Printing</span>
          </div>
          
          {/* Main headline with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Create Perfect Print
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Layouts Instantly
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your photos into professional CNIC layouts, passport bunches, and stunning polaroids with our 
            <span className="text-violet-600 font-medium"> AI-powered canvas</span>. 
            Perfect results in seconds, not hours.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#features" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 group transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30">
              Start Creating Free
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300">
              Watch Demo
            </Button> */}
          </div>
          
          {/* Enhanced stats with gradient backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-violet-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold mb-2">50K+</div>
                <div className="text-violet-100 text-sm">Photos Processed</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold mb-2">99.9%</div>
                <div className="text-cyan-100 text-sm">Accuracy Rate</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold mb-2">30 Sec</div>
                <div className="text-emerald-100 text-sm">Average Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}