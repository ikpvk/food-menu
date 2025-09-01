import React, { useState } from "react";
import menu from "./data/menu";
import SearchBar from "./components/SearchBar";
import MenuItem from "./components/MenuItem";
import TotalBar from "./components/TotalBar";
import BillPage from "./components/BillPage";

function App() {
  const [counts, setCounts] = useState(Array(menu.length).fill(0));
  const [searchQuery, setSearchQuery] = useState("");
  const [showBill, setShowBill] = useState(false);

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

  const filteredMenu = menu
    .map((m, i) => ({ ...m, index: i }))
    .filter((m) => m.item.toLowerCase().includes(searchQuery.toLowerCase()));

  if (showBill) {
    const orderedItems = menu
      .map((m, i) => ({ ...m, count: counts[i] }))
      .filter((m) => m.count > 0);

    return (
      <BillPage
        items={orderedItems}
        total={total}
        onBack={() => setShowBill(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Menu</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="max-w-2xl mx-auto grid gap-4 pb-24">
        {filteredMenu.map((m) => (
          <MenuItem
            key={m.index}
            item={m}
            count={counts[m.index]}
            onIncrement={() => handleIncrement(m.index)}
            onDecrement={() => handleDecrement(m.index)}
          />
        ))}
      </div>
      <TotalBar total={total} onGenerateBill={() => setShowBill(true)} />
      <footer className="bg-gray-100 text-center py-2 mt-auto font-mono text-sm text-gray-700">
        Developed by{" "}
        <a
          href="https://github.com/ikpvk"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ikpvk
        </a>
      </footer>
    </div>
  );
}

export default App;
