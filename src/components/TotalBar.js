function TotalBar({ total, onGenerateBill }) {
  return (
    <div className="sticky bottom-0 bg-gray-50 z-10 py-4 shadow text-center">
      <p className="text-xl font-bold">Total: ₹{total}</p>
      {total > 0 && (
        <button
          onClick={onGenerateBill}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Generate Bill
        </button>
      )}
    </div>
  );
}

export default TotalBar;
