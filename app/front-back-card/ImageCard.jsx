"use client";
import React from 'react';
import { ImageIcon } from 'lucide-react';



const ModernImageCard = ({ info }) => {
  const { side, frontImage, backImage } = info;
  const imageSrc = side === "front" ? frontImage : backImage;

  return (
    <div className="w-[85mm] h-[53.9mm] bg-white border border-slate-200 overflow-hidden">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={`${side} side`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-60" />
            <p className="text-xs font-medium capitalize">{side} Image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernImageCard;