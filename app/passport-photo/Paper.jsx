"use client";
import React from 'react';
import { ImageIcon } from 'lucide-react';


const ModernPassportPaper = ({ count, image }) => {
  return (
    <div className="relative">
      {/* Paper container with A4 dimensions */}
      <div 
        className="bg-white h-[297mm] print:h-full p-[10.5mm] print:p-0 w-[210mm] print:border-0 border border-slate-300 shadow-xl print:shadow-none paper rounded-lg print:rounded-none overflow-hidden grid gap-1 grid-cols-4 grid-rows-5"
        style={{
          width: '',
          height: '',
          padding: ''
        }}
      >

        {/* Generate passport photos based on count */}
        {Array.from({ length: count }, (_, index) => (
          <div 
            key={index}
            className="w-[35mm] h-[45mm] bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {image ? (
              <img 
                src={image} 
                alt={`Passport photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-60" />
                  <p className="text-xs">{index + 1}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Fill remaining slots with placeholders if count < 20 */}
        {Array.from({ length: 20 - count }, (_, index) => (
          <div 
            key={`placeholder-${index}`}
            className=" print:hidden  w-[35mm] h-[45mm] bg-gradient-to-br from-slate-50/50 to-slate-100/50 border border-dashed border-slate-200 rounded-sm flex items-center justify-center"
          >
            <div className="text-slate-300 text-xs opacity-50">
              {count + index + 1}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ModernPassportPaper;