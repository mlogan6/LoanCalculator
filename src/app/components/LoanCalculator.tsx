"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [annualRate, setAnnualRate] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(0);

  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  const calculateMonthlyPayment = () => {
    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }
    const payment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return payment;
  };

  const totalPayment = monthlyPayment ? monthlyPayment * numberOfPayments : 0;
  const totalInterest = totalPayment - principal;

  return (
    <div className="max-w-md mx-auto p-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
        Loan Calculator
      </h2>

      <div className="space-y-2">
        <label className="block font-medium text-gray-800">
          Loan Amount ($)
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          className="w-full p-2 border rounded-lg text-gray-900"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-gray-800">
          Interest Rate (%)
        </label>
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
          className="w-full p-2 border rounded-lg text-gray-900"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-gray-800">
          Loan Term (years)
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(parseFloat(e.target.value))}
          className="w-full p-2 border rounded-lg text-gray-900"
        />
      </div>

      <button
        onClick={() => setMonthlyPayment(calculateMonthlyPayment())}
        className={`w-full p-2 rounded-lg mt-4 text-white transition-colors duration-200
                    ${
                      principal <= 0 || annualRate < 0 || years <= 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }
                `}
        disabled={principal <= 0 || annualRate < 0 || years <= 0}
      >
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Results</h3>
          <p className="text-gray-800">
            Monthly Payment: ${monthlyPayment.toFixed(2)}
          </p>
          <p className="text-gray-800">
            Total Payment: ${totalPayment.toFixed(2)}
          </p>
          <p className="text-gray-800">
            Total Interest: ${totalInterest.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
