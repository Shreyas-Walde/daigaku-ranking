import React from 'react';
import { Menu, GraduationCap, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90 dark:bg-slate-900/90 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <GraduationCap size={18} />
          </div>
          <div>
             <h1 className="text-lg md:text-xl font-serif font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              J-RANK
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">Academic Credentials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Ranking</a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            </nav>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 dark:text-slate-300 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 top-16 shadow-lg`}>
        <div className="flex flex-col py-2">
            <a href="#" className="py-3 px-6 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">Ranking</a>
            <a href="#" className="py-3 px-6 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">About</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
