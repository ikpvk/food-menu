function BillPage({ items, total, onBack }) {
  // Helper function to abbreviate item names
  const abbreviateName = (name) => {
    if (name.length <= 10) return name;

    return name
      .split(" ")
      .map((word) => (word.length > 4 ? word.slice(0, 3) + "." : word))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="bg-white shadow-md rounded p-4 w-80 font-mono text-sm">
        {/* Bill Header */}
        <h1 className="text-center text-lg font-bold mb-2">FOOD MENU BILL</h1>
        <p className="text-center mb-4">==================================</p>

        {/* Table Header */}
        <div className="grid grid-cols-[3fr_1fr_1fr] font-bold border-b border-dashed pb-1 mb-2">
          <span>Item</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        {/* Items */}
        {items.map((m, i) => (
          <div key={i} className="mb-2">
            <div className="grid grid-cols-[3fr_1fr_1fr]">
              <span>
                {abbreviateName(m.item)} ({m.quantity})
              </span>
              <span className="text-center">{m.count}</span>
              <span className="text-right">₹{m.count * m.price}</span>
            </div>
            <p className="text-center">----------------------------------</p>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between font-bold text-base mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <p className="mt-2">==================================</p>

        {/* Footer */}
        <p className="text-center mt-4 text-xs">
          Developed by https://github.com/ikpvk
        </p>
      </div>

      {/* Back Button */}
      <div className="absolute bottom-6">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default BillPage;
