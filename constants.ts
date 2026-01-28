
import { Transaction, Goal, User } from './types';

export const MOCK_USER: User = {
  name: 'Alex Morgan',
  plan: 'Pro Plan',
  balance: 12450.00,
  monthlyIncome: 4200.00,
  monthlyExpenses: 2100.00,
};

export const INSIGHTS = [
  "You're maintaining a healthy savings rate this month.",
  "Your dining expenses are slightly above average.",
  "You're on track to reach your Emergency Fund goal."
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    merchant: 'Whole Foods Market',
    amount: -124.50,
    category: 'Groceries',
    date: 'Today',
    time: '5:30 PM',
    type: 'expense',
    status: 'cleared',
    icon: 'nutrition',
    iconBg: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
  },
  {
    id: '2',
    merchant: 'Blue Bottle Coffee',
    amount: -6.50,
    category: 'Dining out',
    date: 'Today',
    time: '8:15 AM',
    type: 'expense',
    status: 'pending',
    icon: 'local_cafe',
    iconBg: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-500',
  },
  {
    id: '3',
    merchant: 'Salary Deposit',
    amount: 3200.00,
    category: 'Income',
    date: 'Yesterday',
    time: '9:00 AM',
    type: 'income',
    status: 'cleared',
    icon: 'account_balance_wallet',
    iconBg: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600',
  },
  {
    id: '4',
    merchant: 'Spotify Premium',
    amount: -12.99,
    category: 'Entertainment',
    date: 'Yesterday',
    time: 'Monthly',
    type: 'expense',
    status: 'cleared',
    icon: 'music_note',
    iconBg: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-500',
  },
  {
    id: '5',
    merchant: 'Target Store',
    amount: -45.20,
    category: 'Shopping',
    date: 'Oct 22',
    time: '2:15 PM',
    type: 'expense',
    status: 'cleared',
    icon: 'shopping_bag',
    iconBg: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-500',
  },
  {
    id: '6',
    merchant: 'Netflix Subscription',
    amount: -15.00,
    category: 'Entertainment',
    date: 'Oct 21',
    time: 'Yesterday',
    type: 'expense',
    status: 'cleared',
    icon: 'movie',
    iconBg: 'bg-red-50 dark:bg-red-900/20',
    iconColor: 'text-red-500',
  },
  {
    id: '7',
    merchant: 'Uber Trip',
    amount: -24.80,
    category: 'Transport',
    date: 'Oct 21',
    time: '8:45 PM',
    type: 'expense',
    status: 'cleared',
    icon: 'local_taxi',
    iconBg: 'bg-slate-50 dark:bg-slate-900/20',
    iconColor: 'text-slate-500',
  },
];

export const MOCK_GOALS: Goal[] = [
  {
    id: '1',
    name: 'European Summer',
    target: 4000,
    saved: 2500,
    date: 'June 2024',
    category: 'Travel',
    icon: 'flight',
    color: '#8b5cf6', // lavender-500
    statusText: 'On track',
  },
  {
    id: '2',
    name: 'Emergency Fund',
    target: 10000,
    saved: 8000,
    date: 'Safety net',
    category: 'Security',
    icon: 'shield',
    color: '#17cf17', // primary
    statusText: 'Great!',
  },
  {
    id: '3',
    name: 'New Macbook',
    target: 2000,
    saved: 300,
    date: 'Work upgrade',
    category: 'Gadgets',
    icon: 'laptop_mac',
    color: '#3b82f6', // blue
    statusText: 'Just started',
  },
  {
    id: '4',
    name: 'Dream Home',
    target: 120000,
    saved: 45000,
    date: 'Long term',
    category: 'Housing',
    icon: 'cottage',
    color: '#638863', // sage-500
    statusText: 'Steady pace',
  }
];

export const SPENDING_DATA = [
  { name: 'W1', amount: 840 },
  { name: 'W2', amount: 1365 },
  { name: 'W3', amount: 735 },
  { name: 'W4', amount: 500 },
];
