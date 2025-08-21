import React, { useState } from "react";

const menu = [
  { item: "Tea", quantity: "Small", price: 12 },
  { item: "Tea", quantity: "Big", price: 15 },
  { item: "Green tea", quantity: "Big", price: 20 },
  { item: "Coffee", quantity: "Big", price: 20 },
  { item: "Black tea", quantity: "Small", price: 12 },
  { item: "Black tea", quantity: "Large", price: 15 },
];

export default function App() {
  const [counts, setCounts] = useState(Array(menu.length).fill(0));

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) newCounts[index] -= 1;
    setCounts(newCounts);
  };

  const total = counts.reduce(
    (sum, count, i) => sum + count * menu[i].price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Menu</h1>
      <div className="max-w-2xl mx-auto grid gap-4">
        {menu.map((m, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-white shadow p-4 rounded-2xl"
          >
            <div>
              <p className="font-semibold">{m.item}</p>
              <p className="text-sm text-gray-500">{m.quantity}</p>
              <p className="text-sm">₹{m.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(i)}
                className="px-3 py-1 bg-gray-200 rounded-full"
              >
                -
              </button>
              <span>{counts[i]}</span>
              <button
                onClick={() => handleIncrement(i)}
                className="px-3 py-1 bg-blue-500 text-white rounded-full"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xl font-bold">
        Total: ₹{total}
      </div>
    </div>
  );
}