import { Upload, Settings, Printer, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Photos",
    description: "Drag and drop your images or select from your device.",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "from-violet-100 to-purple-100",
    stepColor: "bg-gradient-to-r from-violet-500 to-purple-500"
  },
  {
    icon: Settings,
    title: "Choose Layout Template",
    description: "Select from CNIC, passport, or polaroid templates.",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "from-cyan-100 to-blue-100",
    stepColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
  },
  {
    icon: Printer,
    title: "Print",
    description: "Get your perfectly formatted layout ready for printing.",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "from-emerald-100 to-teal-100",
    stepColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-violet-700 px-4 py-2 rounded-full mb-6 border border-violet-200/50">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get professional printing layouts in just three simple steps. 
            <span className="text-violet-600 font-medium"> No design experience required</span>.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-1 bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 rounded-full opacity-50"></div>
            
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-10 h-10 ${step.stepColor} text-white rounded-full flex items-center justify-center font-bold z-20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className={`w-32 h-32 bg-gradient-to-br ${step.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm border border-white/50`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-inner`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-8 md:hidden">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}