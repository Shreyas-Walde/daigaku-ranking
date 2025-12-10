import React, { useState, useMemo } from 'react';
import { Pyramid } from '../components/Pyramid';
import { Sidebar } from '../components/Sidebar';
import { RANKING_DATA } from '../constants';
import { Search, RefreshCw, X } from 'lucide-react';
import { UniversityType, University } from '../types';
import { ExternalLink } from 'lucide-react';

// Helper to Group Universities by Type for the Table View
const groupUniversitiesByType = (universities: University[]) => {
  const grouped: Record<UniversityType, University[]> = {
    National: [],
    Public: [],
    Private: []
  };
  
  universities.forEach(uni => {
    if (grouped[uni.type]) {
      grouped[uni.type].push(uni);
    }
  });

  // Filter out empty groups and return strictly ordered keys
  return Object.entries(grouped)
    .filter(([_, unis]) => unis.length > 0) as [UniversityType, University[]][];
};

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<UniversityType | 'All'>('All');

  // Filter Logic
  const filteredData = useMemo(() => {
    return RANKING_DATA.map(rank => {
      const filteredUnis = rank.universities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'All' || uni.type === filterType;
        return matchesSearch && matchesType;
      });

      return {
        ...rank,
        universities: filteredUnis
      };
    }).filter(rank => rank.universities.length > 0); 
  }, [searchQuery, filterType]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const getTypeStyle = (type: string) => {
      switch(type) {
          case 'National': return 'text-red-600 dark:text-red-400 font-bold';
          case 'Public': return 'text-green-600 dark:text-green-400 font-bold';
          case 'Private': return 'text-blue-600 dark:text-blue-400 font-bold';
          default: return 'text-gray-600 dark:text-gray-400';
      }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
            
            {/* Pyramid */}
            <div className="mb-8">
                 <Pyramid />
            </div>

            {/* University Rank Header Section */}
            <div className="mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2 justify-end">
                    <RefreshCw size={12} />
                    <span>2025.01.15</span>
                    <RefreshCw size={12} />
                    <span>2025.11.01</span>
                </div>
                <div className="bg-[#fffcdf] dark:bg-slate-800 p-4 border-l-4 border-yellow-400 dark:border-yellow-600 mb-6 transition-colors">
                    <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100">
                        University Rank
                    </h2>
                </div>

                <div className="text-sm space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <p className="font-bold">↓ Usual Ranking ↓</p>
                    <p className="text-xs text-red-500">*Updated on April 1, 2025 (Bunri Joint)</p>
                    <p className="text-xs text-gray-400 bg-pink-50 dark:bg-pink-900/20 inline-block px-1">The ranked commentary article is still being revised...</p>
                </div>
            </div>

            {/* Controls Section (Search & Filter) */}
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200 dark:border-slate-800 mb-6 sticky top-20 z-30 shadow-sm transition-all">
                <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                    <div className="relative w-full md:flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                            type="text" 
                            placeholder="Find university..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-600 transition-all text-sm dark:text-white"
                        />
                        {searchQuery && (
                          <button onClick={clearSearch} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"><X size={14} /></button>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                         {(['All', 'National', 'Private', 'Public'] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-3 py-1 rounded text-xs font-bold transition-all whitespace-nowrap border ${
                                    filterType === type 
                                    ? 'bg-yellow-400 text-white border-yellow-400 dark:bg-yellow-600 dark:border-yellow-600' 
                                    : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-slate-700'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ranking Table */}
            <div className="overflow-hidden border border-gray-200 dark:border-slate-700 rounded-sm shadow-sm transition-colors">
                {/* Table Header */}
                <div className="grid grid-cols-[80px_100px_1fr] md:grid-cols-[100px_120px_1fr] bg-[#fff9c4] dark:bg-yellow-950 border-b border-gray-200 dark:border-slate-700 font-bold text-center text-sm md:text-base text-gray-700 dark:text-yellow-100">
                    <div className="py-3 border-r border-white dark:border-slate-700">Rank</div>
                    <div className="py-3 border-r border-white dark:border-slate-700">Distinguish</div>
                    <div className="py-3">University</div>
                </div>

                {filteredData.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">No results found.</div>
                ) : (
                    filteredData.map((rank) => {
                        const groupedUnis = groupUniversitiesByType(rank.universities);
                        
                        return (
                            <div key={rank.tier} className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                                {/* Rank Column */}
                                <div className={`${rank.color} flex flex-col items-center justify-center p-2 text-center border-r border-white dark:border-slate-800`}>
                                    <span className="text-xl md:text-2xl font-black">{rank.tier}</span>
                                    <span className="text-[10px] md:text-xs font-bold uppercase opacity-80 mt-1">
                                        {rank.tier === 'S' ? 'S-class' : rank.tier === 'A' ? 'A-grade' : rank.tier === 'F' ? 'F-grade' : `Grade ${rank.tier}`}
                                    </span>
                                </div>

                                {/* Content Columns (Nested Grid) */}
                                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr]">
                                    {groupedUnis.map(([type, unis], index) => (
                                        <React.Fragment key={type}>
                                            {/* Distinguish Column */}
                                            <div className={`flex items-center justify-center p-3 text-xs md:text-sm border-r border-dashed border-gray-200 dark:border-slate-700 ${index !== groupedUnis.length - 1 ? 'border-b border-gray-100 dark:border-slate-800' : ''} bg-white dark:bg-slate-900 transition-colors`}>
                                                <span className={getTypeStyle(type)}>{type}</span>
                                            </div>
                                            
                                            {/* University List Column (TILES) */}
                                            <div className={`p-4 text-xs md:text-sm leading-relaxed ${index !== groupedUnis.length - 1 ? 'border-b border-gray-100 dark:border-slate-800' : ''} bg-white dark:bg-slate-900 transition-colors`}>
                                                <div className="flex flex-wrap gap-2">
                                                    {unis.map((uni, i) => {
                                                        const Wrapper = uni.url ? 'a' : 'div';
                                                        const linkProps = uni.url ? { href: uni.url, target: "_blank", rel: "noopener noreferrer" } : {};
                                                        
                                                        return (
                                                            <Wrapper 
                                                                key={i} 
                                                                {...linkProps}
                                                                className={`flex items-center bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 px-3 py-1.5 rounded-md shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-default group max-w-full ${uni.url ? 'cursor-pointer' : ''}`}
                                                            >
                                                                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate">
                                                                    {uni.name.split('(')[0].trim()}
                                                                </span>
                                                                {uni.url && <ExternalLink size={10} className="ml-2 text-gray-400 group-hover:text-indigo-500" />}
                                                            </Wrapper>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Footer Explainer */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                <p>
                    <strong className="text-red-500">*Note:</strong> The university ranking table is a comprehensive judgment of entrance examination difficulty, brand power, popularity, research ability, and employment power.
                </p>
                <p>
                    The overall policy, idea, etc., such as the <span className="underline decoration-dotted">consistency of national, public, and private schools</span>, are on the top page intro.
                </p>
            </div>

        </main>

        {/* Sidebar Area */}
        <Sidebar />
        </div>
    </div>
  );
};
