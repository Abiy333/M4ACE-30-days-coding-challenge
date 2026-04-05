import React, { useState } from "react";

export default function BuggyComponent() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    // Just update the state. No math tricks needed here anymore.
    setCount(count + 1);
  };

  if (count === 5) {
    throw new Error("I crashed!");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-2xl mb-4 font-mono text-gray-400">
        System Status: <span className="text-green-400">Stable</span>
      </h2>
      <p className="mb-8">Clicks until overload: {5 - count}</p>

      <button
        onClick={addCount}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-bold transition-all active:scale-95"
      >
        Trigger the Crash ({count})
      </button>
    </div>
  );
}
