
import React from 'react';
import { Screen } from '../types';

interface LandingProps {
  onStart: (screen: Screen) => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl flex flex-col items-center gap-8">
        <div className="flex items-center justify-center size-24 rounded-3xl bg-primary text-white shadow-2xl shadow-primary/40 animate-bounce">
          <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>spa</span>
        </div>
        
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
            Your journey to <span className="text-primary">Financial Wellness</span> starts here.
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Finora is a calm, intelligent finance dashboard designed to help you track spending, 
            reach savings goals, and gain deep insights into your financial health—all in one 
            beautifully crafted interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-8">
          {[
            { icon: 'analytics', title: 'Smart Tracking', desc: 'Monitor every transaction with elegant visualizations.' },
            { icon: 'target', title: 'Goal Oriented', desc: 'Stay motivated with progress tracking for your dreams.' },
            { icon: 'psychology', title: 'AI Insights', desc: 'Receive personalized advice powered by Gemini AI.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-[#1a2e1a] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <span className="material-symbols-outlined text-primary mb-3 text-3xl">{feature.icon}</span>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onStart('dashboard')}
          className="mt-8 bg-primary hover:bg-green-600 text-white font-black py-4 px-12 rounded-2xl text-xl shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
        >
          Enter Dashboard
        </button>
      </div>
    </div>
  );
};

export default Landing;
