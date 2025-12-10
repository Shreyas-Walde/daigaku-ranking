import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { NEW_ARTICLES, POPULAR_ARTICLES } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-8">
      
      {/* Search Widget */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
        <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4 text-sm uppercase tracking-wider">Site Search</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all dark:text-white"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* New Articles */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
            <h3 className="font-serif font-bold text-slate-800 dark:text-slate-100">New Articles</h3>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {NEW_ARTICLES.map((article) => (
            <div key={article.id} className="flex gap-4 group cursor-pointer items-start">
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700">
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </p>
                {article.date && <span className="text-xs text-slate-400 dark:text-slate-500">{article.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
            <h3 className="font-serif font-bold text-slate-800 dark:text-slate-100">Trending Now</h3>
        </div>
        <div className="flex flex-col">
          {POPULAR_ARTICLES.map((article, index) => (
            <div key={article.id} className="flex gap-4 p-4 border-b border-slate-50 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-700">
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-0 left-0 text-[10px] font-bold w-5 h-5 flex items-center justify-center text-white ${index < 3 ? 'bg-indigo-500' : 'bg-slate-500'}`}>
                    {index + 1}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between">
                 <p className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 leading-snug line-clamp-2">
                    {article.title}
                 </p>
                 <ChevronRight size={14} className="text-slate-300 dark:text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
