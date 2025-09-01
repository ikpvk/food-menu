function MenuItem({ item, count, onIncrement, onDecrement }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded-2xl">
      <div>
        <p className="font-semibold">
          {item.item} - {item.quantity}
        </p>
        {/* <p className="text-sm text-gray-500">{item.quantity}</p> */}
        <p className="text-sm">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrement}
          className="px-3 py-1 bg-gray-200 rounded-full"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={onIncrement}
          className="px-3 py-1 bg-blue-500 text-white rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
