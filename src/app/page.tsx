import Image from "next/image";
import LoanCalculator from "./components/LoanCalculator";

export default function Home() {
  return (
   <main className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoanCalculator />
   </main>
  );
}
