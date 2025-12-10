import React from 'react';

export const Pyramid: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 w-full max-w-2xl mx-auto relative font-serif select-none">
        
        {/* Title */}
        <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 tracking-[0.2em] uppercase drop-shadow-sm">
                Educational Rank
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 mx-auto mt-3 rounded-full opacity-80"></div>
        </div>
        
        {/* Pyramid Structure */}
        <div className="flex flex-col items-center relative z-10 filter drop-shadow-xl">
            
          {/* S Tier */}
          <div className="relative group z-20 hover:-translate-y-1 transition-transform duration-300">
             <div className="w-0 h-0 
                border-l-[60px] border-r-[60px] border-b-[65px] md:border-l-[80px] md:border-r-[80px] md:border-b-[85px] 
                border-l-transparent border-r-transparent 
                border-b-[#c084fc] dark:border-b-purple-700
                filter drop-shadow-md">
             </div>
             <span className="absolute top-[30px] md:top-[40px] left-1/2 -translate-x-1/2 text-white font-black text-2xl md:text-3xl drop-shadow-md">S</span>
          </div>

          {/* A Tier */}
          <div className="w-[180px] md:w-[240px] h-[45px] md:h-[55px] -mt-1
              bg-gradient-to-r from-rose-400 to-rose-500 dark:from-rose-800 dark:to-rose-900
              flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300 z-10" 
              style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }}>
            A
          </div>

          {/* B Tier */}
          <div className="w-[240px] md:w-[320px] h-[45px] md:h-[55px] -mt-1
              bg-gradient-to-r from-amber-400 to-amber-500 dark:from-amber-700 dark:to-amber-800
              flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300 z-0" 
              style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 100%, 0% 100%)' }}>
            B
          </div>

          {/* C Tier */}
          <div className="w-[300px] md:w-[400px] h-[45px] md:h-[55px] -mt-1
              bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-700 dark:to-emerald-800
              flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300" 
              style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}>
            C
          </div>

          {/* D Tier */}
          <div className="w-[360px] md:w-[480px] h-[45px] md:h-[55px] -mt-1
              bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-800 dark:to-teal-900
              flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300" 
              style={{ clipPath: 'polygon(8% 0, 92% 0, 100% 100%, 0% 100%)' }}>
            D
          </div>

          {/* E Tier */}
          <div className="w-[420px] md:w-[560px] h-[50px] md:h-[60px] -mt-1
              bg-gradient-to-r from-sky-400 to-sky-500 dark:from-sky-700 dark:to-sky-800
              flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300" 
              style={{ clipPath: 'polygon(6% 0, 94% 0, 100% 100%, 0% 100%)' }}>
            E
          </div>
          
           {/* Others Tier */}
          <div className="w-[480px] md:w-[640px] h-[55px] md:h-[65px] -mt-1
              bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700
              flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold text-lg md:text-xl shadow-lg
              hover:scale-105 transition-all duration-300" 
              style={{ clipPath: 'polygon(4% 0, 96% 0, 100% 100%, 0% 100%)' }}>
            <span className="translate-y-[-2px]">F Others</span>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 dark:bg-indigo-400/10 blur-3xl rounded-full pointer-events-none -z-0"></div>
    </div>
  );
};
