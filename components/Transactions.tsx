
import React, { useState } from 'react';
import { Transaction } from '../types';

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter(t => 
    t.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1000px] w-full mx-auto px-6 py-8 md:px-12 md:py-10 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">Transaction History</h2>
          <p className="text-[#638863] dark:text-[#9dbf9d] text-base md:text-lg">View and manage your recent financial activity.</p>
        </div>
        <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl h-11 px-6 bg-[#111811] dark:bg-primary text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Add Transaction</span>
        </button>
      </div>

      <div className="flex flex-col gap-4 bg-white dark:bg-[#1A2C1A] p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[#638863]">search</span>
            </div>
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-[#f6f8f6] dark:bg-[#253825] text-slate-900 dark:text-white placeholder-[#638863] focus:ring-2 focus:ring-primary/50 transition-all sm:text-sm" 
              placeholder="Search by merchant, category..." 
              type="text"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {['This Month', 'All Categories', 'Status'].map(filter => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f6f8f6] dark:bg-[#253825] hover:bg-gray-100 dark:hover:bg-[#2f452f] transition-colors shrink-0">
                <span className="text-sm font-medium">{filter}</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1A2C1A] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden">
        {['Today', 'Yesterday'].map(dateLabel => {
          const items = filteredTransactions.filter(t => t.date === dateLabel);
          if (items.length === 0) return null;
          
          return (
            <React.Fragment key={dateLabel}>
              <div className="px-6 py-4 bg-gray-50/50 dark:bg-[#1f331f] border-b border-gray-100 dark:border-gray-800">
                <p className="text-xs font-bold uppercase tracking-wider text-[#638863]">{dateLabel}</p>
              </div>
              {items.map(t => (
                <div key={t.id} className="group flex items-center justify-between gap-4 p-4 md:px-6 hover:bg-gray-50 dark:hover:bg-[#1f331f] transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-800/50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center rounded-full ${t.iconBg} ${t.iconColor} shrink-0 size-12`}>
                      <span className="material-symbols-outlined">{t.icon}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[#111811] dark:text-white text-base font-semibold group-hover:text-primary transition-colors">{t.merchant}</p>
                      <p className="text-[#638863] dark:text-[#8ab08a] text-sm font-normal">{t.category} • {t.time}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className={`text-base font-bold font-mono tracking-tight ${t.amount < 0 ? 'text-[#b95c7c]' : 'text-primary'}`}>
                      {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400 capitalize">{t.status}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
