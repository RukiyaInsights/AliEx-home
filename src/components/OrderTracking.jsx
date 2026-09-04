import { useEffect, useState } from "react";

function OrderTracking({ orderId, onBack }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getOrderStatus = async () => {
      try {
        const response = await fetch(
          `https://aliex-home-back.onrender/api/orders/${orderId}/status`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to get order status");
        }
        setStatus(data.status);
      } catch (error) {
        console.error("STATUS ERROR:", error);
        setError("Could not load order status.");
      } finally {
        setLoading(false);
      }
    };
    getOrderStatus();
  }, [orderId]);
  const statuses = [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
  ];
  const currentIndex = statuses.indexOf(status);
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 font-semibold hover:text-red-600">
        ← Back
      </button>
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">
            Track Your Order
          </h1>
          <p className="text-gray-500 mt-2">
            Order #{orderId}
          </p>
        </div>
        {loading && (
          <p className="text-center text-gray-500">
            Loading order status...
          </p>
        )}
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}
        {!loading && !error && (
          <>
            <div className="text-center mb-10">
              <p className="text-gray-500">
                Current Status
              </p>
              <p className="text-2xl font-bold mt-2">
                {status}
              </p>
            </div>
            <div className="space-y-6">
              {statuses.map((item, index) => {
                const completed = index <= currentIndex;
                const isCurrent = item === status;
                return (
                  <div
                    key={item}
                    className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}>
                      {completed ? "✓" : index + 1}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${
                          isCurrent
                            ? "text-green-600"
                            : "text-gray-700"
                        }`}
                      >
                        {item}
                      </p>
                      {isCurrent && (
                        <p className="text-sm text-gray-500">
                          Your order is currently here
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {status === "Cancelled" && (
              <div className="mt-8 bg-red-100 text-red-600 p-4 rounded-lg text-center font-semibold">
                This order has been cancelled.
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
export default OrderTracking;