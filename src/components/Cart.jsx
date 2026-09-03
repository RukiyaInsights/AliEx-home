function Cart({
  cartItems,
  onClose,
  onRemove,
  onQuantityChange,
  onCheckout,
}) {
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(
      item.price.replace("ETB", "").trim()
    );
    return sum + price * item.quantity;
  }, 0);
  return (
    <div className="fixed inset-0 bg-black/40 z-[100]">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-2xl font-bold">
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-red-600"
          >
            ×
          </button>
        </div>
 <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Your cart is empty
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Add products to your cart to see them here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => {
                const price = parseFloat(
                  item.price.replace("ETB", "").trim()
                );
      return (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b pb-5"
                  >
                <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
<div className="flex-1">
                 <h3 className="font-semibold">
                 {item.name}
                </h3>
                <p className="text-red-600 font-bold mt-1">
                        ETB {price.toFixed(2)}
                      </p>
         <div className="flex items-center gap-3 mt-3">
          <button
                    onClick={() =>
         onQuantityChange(
                      item.id,
           item.quantity - 1
                )
                 }
         className="w-8 h-8 border rounded hover:bg-gray-100">
                 −
        </button>
                <span>
            {item.quantity}
               </span>
        <button
            onClick={() =>
            onQuantityChange(
                item.id,
                  item.quantity + 1
                    )
                 }
             className="w-8 h-8 border rounded hover:bg-gray-100">
                   +
                 </button>
                </div>
            <button
      onClick={() => onRemove(item.id)}
      className="text-red-500 text-sm mt-2 hover:underline">
              Remove
            </button>
            </div>
            </div>
                );
              })}
            </div>
          )}
        </div>
    {cartItems.length > 0 && (
          <div className="border-t p-5">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total</span>
              <span>
                ETB {total.toFixed(2)}
              </span>
            </div>
            <button
  onClick={onCheckout}
  className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition">
  Checkout
</button>
          </div>
        )}
      </div>

    </div>
  );
}
export default Cart;