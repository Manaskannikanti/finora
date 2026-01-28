
import React from 'react';
import { Screen } from '../types';

interface SidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  user: { name: string; plan: string };
}

const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate, user }) => {
  const navItems = [
    { id: 'dashboard' as Screen, label: 'Home', icon: 'home' },
    { id: 'transactions' as Screen, label: 'Transactions', icon: 'credit_card' },
    { id: 'budget' as Screen, label: 'Budget', icon: 'pie_chart' },
    { id: 'goals' as Screen, label: 'Goals', icon: 'track_changes' },
  ];

  return (
    <aside className="hidden md:flex w-72 flex-col justify-between bg-white dark:bg-[#1a2e1a] border-r border-slate-100 dark:border-slate-800 p-6 z-10 shadow-sm shrink-0">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 px-2 cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>spa</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Finora</h1>
            <p className="text-slate-400 dark:text-slate-400 text-xs font-medium">Financial Wellness</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentScreen === item.id
                  ? 'bg-primary/10 text-primary font-bold shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span 
                className={`material-symbols-outlined ${currentScreen === item.id ? 'fill-[1]' : ''}`}
                style={{ fontVariationSettings: currentScreen === item.id ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => onNavigate('settings')}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            currentScreen === 'settings'
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
              : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </button>
        
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 px-2">
          <div 
            className="size-10 rounded-full bg-cover bg-center bg-slate-200" 
            style={{ backgroundImage: `url("https://picsum.photos/seed/alex/100")` }}
          />
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</p>
            <p className="text-xs text-slate-400">{user.plan}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
