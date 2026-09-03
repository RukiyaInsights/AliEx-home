import { useState } from "react";
function Checkout({ cartItems, onBack, onOrderPlaced }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [error, setError] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(
      item.price.replace("ETB", "").trim()
    );
    return sum + price * item.quantity;
  }, 0);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim()
    ) {
      setError("Please fill in all delivery information.");
      return;
    }
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setError("");
    setPlacingOrder(true);
    const order = {
      customer: formData,
      paymentMethod,
      items: cartItems,
      total,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.message || "Failed to place order"
        );
      }
      console.log("ORDER CREATED:", data);
      onOrderPlaced(data.order);
    } catch (error) {
      console.error("ORDER ERROR:", error);
      setError(
        "Could not place your order. Please make sure the backend is running."
      );
    } finally {
      setPlacingOrder(false);
    }
  };
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 font-semibold hover:text-red-600">
        ← Back to Cart
      </button>
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              Delivery Information
            </h2>
            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
          <div>
       <label className="block font-medium mb-2">
             Full Name
       </label>
          <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
                </div>
                <div>
                  <label className="block font-medium mb-2">
                    Phone Number
                  </label>
          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      handleChange({
        target: {
          name: "phone",
          value: value,
        },
      });
    }
  }}
  placeholder="09XXXXXXXX"
  inputMode="numeric"
  maxLength={10}
  pattern="[0-9]{10}"
  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"/>
                </div>
    </div>
    <div className="mt-5">
      <label className="block font-medium mb-2">
           Delivery Address
      </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  rows="4"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black resize-none"
                />
              </div>
        <div className="mt-5">
         <label className="block font-medium mb-2">
             City
         </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-black"
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    <div>
                      <p className="font-semibold">
                        Cash on Delivery
                      </p>
                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    <div>
                      <p className="font-semibold">
                        Card Payment
                      </p>
                      <p className="text-sm text-gray-500">
                        Secure online payment
                      </p>
                    </div>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={placingOrder}
                className="w-full mt-8 bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition disabled:opacity-50">
                {placingOrder
                  ? "Placing Order..."
                  : "Place Order"}
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-5">
            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>
            <div className="space-y-5">
              {cartItems.map((item) => {
                const price = parseFloat(
                  item.price.replace("ETB", "").trim()
                );
                return (
                  <div
                    key={item.id}
                    className="flex gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Qty: {item.quantity}
                      </p>

                    </div>
                    <p className="font-semibold">
                      ETB {(price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="border-t mt-6 pt-5">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>
                  ETB {total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;