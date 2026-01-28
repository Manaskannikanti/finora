
import React, { useState, useEffect } from 'react';
import { Screen, User, Transaction, Goal } from './types';
import { MOCK_USER, MOCK_TRANSACTIONS, MOCK_GOALS } from './constants';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Goals from './components/Goals';
import Landing from './components/Landing';
import { getFinancialInsights } from './services/gemini';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [user, setUser] = useState<User>(MOCK_USER);
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [goals, setGoals] = useState<Goal[]>(MOCK_GOALS);
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const fetchInsights = async () => {
    setIsAiLoading(true);
    const insights = await getFinancialInsights(user, transactions, goals);
    setAiInsights(insights);
    setIsAiLoading(false);
    setShowInsights(true);
  };

  const renderContent = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard user={user} transactions={transactions} goals={goals} />;
      case 'transactions':
        return <Transactions transactions={transactions} />;
      case 'goals':
        return <Goals goals={goals} />;
      case 'budget':
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-full p-10 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">construction</span>
            <h2 className="text-2xl font-bold">Screen Under Construction</h2>
            <p className="text-slate-500">The {currentScreen} feature is coming soon to your Finora dashboard.</p>
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Back to Dashboard
            </button>
          </div>
        );
      default:
        return <Landing onStart={setCurrentScreen} />;
    }
  };

  if (currentScreen === 'landing') {
    return <Landing onStart={setCurrentScreen} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
        user={{ name: user.name, plan: user.plan }} 
      />
      
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative bg-background-light dark:bg-background-dark">
        {renderContent()}

        {/* AI Insight Floating Button */}
        <button 
          onClick={fetchInsights}
          className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white dark:bg-primary dark:text-[#112111] p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 active:scale-95 transition-all group overflow-hidden"
          title="Get AI Financial Insights"
        >
          <span className={`material-symbols-outlined ${isAiLoading ? 'animate-spin' : ''}`}>psychology</span>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap font-bold">
            Finora Insight
          </span>
        </button>

        {/* AI Insight Overlay */}
        {showInsights && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-[#1a2e1a] max-w-lg w-full rounded-3xl p-8 shadow-2xl relative animate-in zoom-in duration-300">
              <button 
                onClick={() => setShowInsights(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight">Financial Analysis</h3>
              </div>

              <div className="flex flex-col gap-4">
                {aiInsights.map((insight, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                    <span className="text-primary font-bold">{i + 1}.</span>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-medium leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowInsights(false)}
                className="mt-8 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl shadow-lg"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
