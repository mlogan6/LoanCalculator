"use client";
import { useState } from "react";

export default function LoanCalculator() {
    const [principal, setPrincipal] = useState(10000);
    const [annualRate, setAnnualRate] = useState(5);
    const [years, setYears] = useState(5);
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(5);

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
            <h2 className="text-2xl font-bold mb-4 text-center">Loan Calculator</h2>

            <div className="space-y-2">
                <label className="block font-medium">Loan Amount ($)</label>
                <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-lg"
                />
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Interest Rate (%)</label>
                <input
                    type="number"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-lg"
                />
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Loan Term (years)</label>
                <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            
            <button
                onClick={() => setMonthlyPayment(calculateMonthlyPayment())}
                className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4"
            >
                Calculate
            </button>
            {monthlyPayment !== null && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h3 className="text-xl font-bold mb-2">Results</h3>
                    <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
                    <p>Total Payment: ${totalPayment.toFixed(2)}</p>
                    <p>Total Interest: ${totalInterest.toFixed(2)}</p>
                </div>
            )}
        </div>
    )
}