
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { User, Transaction, Goal } from '../types';
import { SPENDING_DATA } from '../constants';

interface DashboardProps {
  user: User;
  transactions: Transaction[];
  goals: Goal[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, transactions, goals }) => {
  const featuredGoal = goals[0];
  const progressPercent = Math.round((featuredGoal.saved / featuredGoal.target) * 100);

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 flex flex-col gap-8 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">Good Morning, Alex</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Here is your financial wellness update.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-green-500 text-white dark:text-[#112111] font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Quick Add</span>
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-between p-6 bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-sage-50 dark:bg-sage-500/10 rounded-lg text-sage-500 dark:text-sage-100">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +3%
            </span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Balance</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-muted-blue-100 dark:bg-blue-900/20 rounded-lg text-muted-blue-500">
              <span className="material-symbols-outlined">arrow_downward</span>
            </div>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Income this month</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">${user.monthlyIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-500">
              <span className="material-symbols-outlined">arrow_upward</span>
            </div>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Expenses this month</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">${user.monthlyExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1a2e1a] p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Spending</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Overview of your expenses</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">$2,100</p>
              <p className="text-xs font-medium text-slate-400">Total this month</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SPENDING_DATA}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                  {SPENDING_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#60a5fa' : '#dbeafe'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Featured Goal */}
        <div className="bg-white dark:bg-[#1a2e1a] p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-lavender-400"></div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">New Car Fund</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Keep it up, you're doing great!</p>
          
          <div className="relative size-48 rounded-full conic-progress flex items-center justify-center mb-6 shadow-inner" style={{ "--progress-value": "33%", "--progress-color": "#c084fc" } as any}>
            <div className="bg-white dark:bg-[#1a2e1a] w-[82%] h-[82%] rounded-full flex flex-col items-center justify-center shadow-inner">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">33%</span>
              <span className="text-xs text-slate-400 font-medium mt-1">Goal Reached</span>
            </div>
          </div>

          <div className="flex justify-between w-full px-4 text-sm mt-4">
            <div className="flex flex-col items-start">
              <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Saved</span>
              <span className="font-bold text-lavender-500 text-lg">$5,000</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Target</span>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-lg">$15,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
          <button className="text-sm font-bold text-primary hover:text-green-600 transition-colors">View All</button>
        </div>
        <div className="flex flex-col">
          {transactions.slice(0, 3).map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800/50 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-full ${t.iconBg} ${t.iconColor} flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{t.icon}</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white font-bold text-sm">{t.merchant}</p>
                  <p className="text-slate-400 text-xs">{t.category} • {t.date}, {t.time}</p>
                </div>
              </div>
              <p className={`font-bold text-sm ${t.amount < 0 ? 'text-slate-900 dark:text-white' : 'text-green-600'}`}>
                {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
