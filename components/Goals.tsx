
import React from 'react';
import { Goal } from '../types';

interface GoalsProps {
  goals: Goal[];
}

const Goals: React.FC<GoalsProps> = ({ goals }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#111811] dark:text-white">Your Dreams in Progress</h1>
            <p className="text-[#638863] dark:text-[#9dbf9d] text-base md:text-lg font-medium">Good morning, Alex. You're getting closer to your targets.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>New Goal</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Total Saved', value: '$12,450', icon: 'account_balance' },
            { label: 'Goals on Track', value: '3 of 5', icon: 'check_circle' },
            { label: 'This Month', value: '+$1,200', icon: 'trending_up', highlight: true },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col gap-1 p-6 rounded-2xl border shadow-sm ${stat.highlight ? 'bg-primary/10 border-primary/20' : 'bg-white dark:bg-[#1a2e1a] border-slate-100 dark:border-[#2a3e2a]'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-2 rounded-lg ${stat.highlight ? 'bg-white dark:bg-white/10 text-primary' : 'bg-sage-50 dark:bg-sage-700/30 text-sage-500'}`}>
                  <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                </div>
                <p className={`text-sm font-bold uppercase tracking-wide ${stat.highlight ? 'text-primary' : 'text-sage-500'}`}>{stat.label}</p>
              </div>
              <p className={`text-3xl font-black tracking-tight ${stat.highlight ? 'text-primary' : ''}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#111811] dark:text-white">Active Goals</h2>
            <button className="text-sm font-semibold text-sage-500 hover:text-primary flex items-center gap-1 transition-colors">
              Sort by Priority <span className="material-symbols-outlined text-[18px]">sort</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {goals.map((goal) => {
              const progress = Math.min(100, Math.round((goal.saved / goal.target) * 100));
              return (
                <div key={goal.id} className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-[#1a2e1a] border border-gray-100 dark:border-[#2a3e2a] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="size-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${goal.color}15`, color: goal.color }}>
                      <span className="material-symbols-outlined text-[28px]">{goal.icon}</span>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-[#111811] dark:text-white">{goal.name}</h3>
                    <p className="text-sm text-gray-500">{goal.date}</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <span className="text-2xl font-bold" style={{ color: goal.color }}>${goal.saved.toLocaleString()}</span>
                      <span className="text-sm font-medium text-gray-500">of ${goal.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: goal.color }}></div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-bold" style={{ color: goal.color }}>{progress}%</span>
                      <span className="text-xs font-medium text-gray-400">{goal.statusText}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <button className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border-2 border-dashed border-sage-200 dark:border-[#2a3e2a] bg-sage-50/50 dark:bg-white/5 hover:bg-sage-50 dark:hover:bg-white/10 transition-all duration-300 min-h-[240px]">
              <div className="size-16 rounded-full bg-white dark:bg-[#2a3e2a] shadow-sm group-hover:scale-110 transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-sage-500 text-[32px]">add</span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-sage-700 dark:text-sage-200">Add New Goal</h3>
                <p className="text-sm text-sage-500 mt-1">Start saving for something new</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
