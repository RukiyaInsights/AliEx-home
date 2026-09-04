import { useEffect, useState } from "react";
function OrderConfirmation({
  order,
  onContinueShopping,
  onTrackOrder,
}) {
  const [orderStatus, setOrderStatus] = useState(
    order?.status || "Pending"
  );
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    if (!order?.id) {
      return;
    }
    const getOrderStatus = async () => {
      try {
        const response = await fetch(
          `https://aliex-home-back.onrender/api/orders/${order.id}/status`
        );
        if (!response.ok) {
          throw new Error("Failed to get order status");
        }
        const data = await response.json();
        setOrderStatus(data.status);
      } catch (error) {
        console.error("STATUS ERROR:", error);
        setOrderStatus(order.status || "Pending");
      } finally {
        setLoadingStatus(false);
      }
    };
    getOrderStatus();
  }, [order?.id, order?.status]);
  if (!order) {
    return null;
  }
  const total = Number(order.total || 0);
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold">
            ✓
          </div>
          <h1 className="text-3xl font-bold mt-5">
            Order Confirmed!
          </h1>
          <p className="text-gray-500 mt-2">
            Thank you for your purchase.
          </p>
          <p className="font-semibold mt-3">
            Order #{order.id}
          </p>
        </div>
        <div className="bg-gray-50 border rounded-xl p-5 mb-8 text-center">
          <h2 className="font-bold text-lg mb-3">
            Order Status
          </h2>
          {loadingStatus ? (
            <p className="text-gray-500">
              Checking order status...
            </p>
          ) : (
            <span
              className={`inline-block px-5 py-2 rounded-full font-semibold ${
                orderStatus === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : orderStatus === "Cancelled"
                  ? "bg-red-100 text-red-700"
                  : orderStatus === "Shipped"
                  ? "bg-blue-100 text-blue-700"
                  : orderStatus === "Confirmed"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {orderStatus}
            </span>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-xl p-5">
            <h2 className="font-bold text-lg mb-4">
              Delivery Information
            </h2>
            <p className="font-semibold">
              {order.customer?.fullName}
            </p>
            <p className="text-gray-500 mt-1">
              {order.customer?.phone}
            </p>
            <p className="text-gray-500 mt-1">
              {order.customer?.address}
            </p>
            <p className="text-gray-500 mt-1">
              {order.customer?.city}
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h2 className="font-bold text-lg mb-4">
              Payment
            </h2>
            <p className="font-semibold">
              {order.paymentMethod === "cash"
                ? "Cash on Delivery"
                : "Card Payment"}
            </p>
            <p className="text-gray-500 mt-2">
              Status: {orderStatus}
            </p>
          </div>
        </div>
        <div className="border rounded-xl p-5">
          <h2 className="font-bold text-lg mb-5">
            Order Items
          </h2>
          <div className="space-y-4">
            {order.items?.map((item) => {
              const price = parseFloat(
                String(item.price)
                  .replace("ETB", "")
                  .trim()
              );
              const itemTotal = price * item.quantity;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ETB {itemTotal.toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
    <div className="flex justify-between border-t mt-6 pt-6 text-xl font-bold">
            <span>
              Total
            </span>
            <span className="text-red-600">
              ETB {total.toFixed(2)}
            </span>
          </div>
        </div>
  <div className="text-center mt-10">
  <button
    type="button"
    onClick={onTrackOrder}
    className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition mr-3">
    Track Order
  </button>
  <button
    type="button"
    onClick={onContinueShopping}
    className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
    Continue Shopping
  </button>
</div>
      </div>
    </section>
  );
}
export default OrderConfirmation;