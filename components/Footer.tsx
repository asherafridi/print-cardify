import { Button } from "./ui/button";
import { Printer, Mail, Phone, MapPin, Github, Twitter, Instagram, GithubIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">PrintCardify</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transform your photos into professional printing layouts.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <span className="group-hover:text-violet-400 transition-colors">ashirafridi.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="group-hover:text-cyan-400 transition-colors">+92 315 1294229</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="group-hover:text-emerald-400 transition-colors">@asherafridi</span>
              </div>
            </div>
          </div>
          
          {/* Product links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="/front-back-card" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block duration-300">CNIC Layouts</a></li>
              <li><a href="/passport-photo" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">Passport Photos</a></li>
              {/* <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block duration-300">Polaroid Maker</a></li> */}
            </ul>
          </div>
          
          
          
          {/* Newsletter signup */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Stay Connected</h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Get the latest updates on new features and printing tips delivered to your inbox.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Github, color: "hover:text-violet-400 hover:bg-violet-500/20" },
                { icon: Twitter, color: "hover:text-cyan-400 hover:bg-cyan-500/20" },
                { icon: Instagram, color: "hover:text-pink-400 hover:bg-pink-500/20" }
              ].map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a key={index} href="#" className={`w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}>
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2025 PrintCardify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}