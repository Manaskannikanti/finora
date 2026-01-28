
import { GoogleGenAI } from "@google/genai";
import { Transaction, Goal, User } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialInsights = async (user: User, transactions: Transaction[], goals: Goal[]) => {
  const prompt = `
    Analyze the following financial data and provide 3 short, actionable insights for the user ${user.name}.
    Current Balance: $${user.balance}
    Monthly Income: $${user.monthlyIncome}
    Monthly Expenses: $${user.monthlyExpenses}
    
    Recent Transactions:
    ${transactions.slice(0, 5).map(t => `- ${t.merchant}: $${t.amount} (${t.category})`).join('\n')}
    
    Current Goals:
    ${goals.map(g => `- ${g.name}: $${g.saved}/$${g.target} (Target: ${g.date})`).join('\n')}
    
    Keep the tone encouraging, calm, and professional. Format the response as a JSON array of strings.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    
    const text = response.text || "[]";
    return JSON.parse(text) as string[];
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return ["You're doing a great job managing your finances!", "Consider setting aside 10% more this month for your Emergency Fund.", "Watch your dining expenses, which are slightly higher this week."];
  }
};
