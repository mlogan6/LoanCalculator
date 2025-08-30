"use client";
import { useState } from "react";
import LoanCalculator from "./components/LoanCalculator";
import { InvestmentCalculator } from "./components/InvestmentCalculator";
import { SavingsGoalCalculator } from "./components/SavingsGoalCalculator";

const tabs = [
  { id: "loan", label: "Loan" },
  { id: "investment", label: "Investment" },
  { id: "savings", label: "Savings Goal" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("loan");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Financial Calculator Dashboard
      </h1>

      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {activeTab === "loan" && <LoanCalculator />}
        {activeTab === "investment" && <InvestmentCalculator />}
        {activeTab === "savings" && <SavingsGoalCalculator />}
      </div>
    </main>
  );
}
