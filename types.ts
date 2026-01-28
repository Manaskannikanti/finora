
export type Screen = 'landing' | 'dashboard' | 'transactions' | 'goals' | 'budget' | 'settings';

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  category: string;
  date: string;
  time: string;
  type: 'income' | 'expense';
  status: 'cleared' | 'pending';
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  saved: number;
  date: string;
  category: string;
  icon: string;
  color: string;
  statusText: string;
}

export interface User {
  name: string;
  plan: string;
  balance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
}
