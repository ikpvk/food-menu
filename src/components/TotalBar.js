function TotalBar({ total, onGenerateBill }) {
  const hasItems = total > 0;

  return (
    <div className="sticky bottom-0 bg-gray-50 z-10 py-4 shadow text-center">
      <p className="text-xl font-bold">Total: ₹{total}</p>
      <button
        onClick={onGenerateBill}
        disabled={!hasItems}
        className={`mt-2 px-4 py-2 rounded 
          ${hasItems ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
      >
        Generate Bill
      </button>
    </div>
  );
}

export default TotalBar;
