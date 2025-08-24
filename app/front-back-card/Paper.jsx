"use client";
import React from 'react';
import ModernImageCard from './ImageCard';



const ModernPaper = ({ side, frontImage, backImage, count }) => {
  const info = {
    side,
    frontImage,
    backImage,
    count
  };

  const getRowJustification = (rowStartCount) => {
    const remainingCards = count - (rowStartCount - 1);
    if (side === "back" && remainingCards === 1) {
      return "justify-end";
    }
    return "justify-between";
  };

  return (
    <div className="relative">
      {/* Paper container with A4 dimensions */}
      <div 
        className="bg-white h-[297mm] print:h-auto p-[10.5mm] print:p-0 w-[210mm] print:border-0 border border-slate-300 shadow-xl print:shadow-none paper rounded-lg print:rounded-none overflow-hidden"
        style={{
          width: '',
          height: '',
          padding: ''
        }}
      >
        

        {/* Card layout rows */}
        <div className="space-y-2">
          {/* Row 1 */}
          <div className={`plate flex ${getRowJustification(1)}`}>
            {count >= 1 && <ModernImageCard info={info} />}
            {count >= 2 && <ModernImageCard info={info} />}
          </div>

          {/* Row 2 */}
          <div className={`plate flex ${getRowJustification(3)}`}>
            {count >= 3 && <ModernImageCard info={info} />}
            {count >= 4 && <ModernImageCard info={info} />}
          </div>

          {/* Row 3 */}
          <div className={`plate flex ${getRowJustification(5)}`}>
            {count >= 5 && <ModernImageCard info={info} />}
            {count >= 6 && <ModernImageCard info={info} />}
          </div>

          {/* Row 4 */}
          <div className={`plate flex ${getRowJustification(7)}`}>
            {count >= 7 && <ModernImageCard info={info} />}
            {count >= 8 && <ModernImageCard info={info} />}
          </div>

          {/* Row 5 */}
          <div className={`plate flex ${getRowJustification(9)}`}>
            {count >= 9 && <ModernImageCard info={info} />}
            {count >= 10 && <ModernImageCard info={info} />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModernPaper;