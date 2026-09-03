import { useState } from "react";
import {
  FiShoppingCart,
  FiMessageCircle,
  FiTag,
  FiMessageSquare,
  FiX,
  FiTrash2,
} from "react-icons/fi";
function SideBar({ cartItems = [], onRemoveFromCart }) {
  const [activePanel, setActivePanel] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Welcome to AliExpress",
      text: "Welcome! Enjoy shopping and discover great deals.",
      time: "Just now",
      unread: true,
    },
    {
      id: 2,
      title: "Special Offer",
      text: "You have new discounts available in your account.",
      time: "Today",
      unread: true,
    },
  ]);
  const items = [
    {
      name: "Cart",
      icon: <FiShoppingCart size={22} />,
    },
    {
      name: "Message",
      icon: <FiMessageCircle size={22} />,
    },
    {
      name: "Coupon",
      icon: <FiTag size={22} />,
    },
    {
      name: "Feedback",
      icon: <FiMessageSquare size={22} />,
    },
  ];
  const handleItemClick = (name) => {
    setActivePanel(activePanel === name ? null : name);
    if (name === "Message") {
      setMessages((currentMessages) =>
        currentMessages.map((message) => ({
          ...message,
          unread: false,
        }))
      );
    }
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = Number(String(item.price).replace(/[^0-9.]/g, "")) || 0;
      return total + priceNum * (item.quantity || 1);
    }, 0);
  };
  return (
    <>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg overflow-hidden z-50 border">
        {items.map((item) => {
          const unreadCount =
            item.name === "Message"
              ? messages.filter((message) => message.unread).length
              : item.name === "Cart"
              ? cartItems.length
              : 0;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => handleItemClick(item.name)}
              className={`relative w-16 h-16 flex flex-col items-center justify-center gap-1 text-gray-700 hover:text-red-600 hover:bg-gray-100 transition cursor-pointer ${
                activePanel === item.name ? "bg-red-50 text-red-600 font-bold" : ""
              }`}
            >
              {item.icon}
              <span className="text-[11px]">{item.name}</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-2 bg-red-600 text-white text-[10px] min-w-5 h-5 rounded-full flex items-center justify-center px-1 font-bold">
                  {unreadCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {activePanel === "Cart" && (
        <div className="fixed right-24 top-1/2 -translate-y-1/2 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border z-[100] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div>
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <p className="text-sm text-gray-500">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in cart
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActivePanel(null)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FiX size={20} />
            </button>
          </div>
          <div className="max-h-[380px] overflow-y-auto p-4 space-y-3 flex-1">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 px-4">
                <FiShoppingCart size={45} className="mx-auto text-gray-300 mb-3" />
                <h3 className="font-semibold text-lg">Your cart is empty</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Browse products and add items to your shopping cart.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActivePanel(null);
                    document
                      .getElementById("products-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition cursor-pointer">
                  Shop Now
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={item._id || item.id || index}
                  className="flex items-center justify-between gap-3 p-3 border rounded-xl hover:bg-gray-50 transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg flex-shrink-0"/>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-red-600 font-bold text-sm mt-0.5">
                      ETB {item.price}
                    </p>
                  </div>
                  {onRemoveFromCart && (
                    <button
                      type="button"
                      onClick={() => onRemoveFromCart(item._id || item.id)}
                      className="text-gray-400 hover:text-red-600 p-2 transition cursor-pointer">
                      <FiTrash2 size={18} />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">Subtotal</span>
                <span className="font-bold text-lg text-red-600">
                  ETB {calculateTotal().toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                onClick={() => alert("Proceeding to checkout!")}
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition cursor-pointer">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      )}
      {activePanel === "Message" && (
        <div className="fixed right-24 top-1/2 -translate-y-1/2 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border z-[100] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div>
              <h2 className="text-xl font-bold">Messages</h2>
              <p className="text-sm text-gray-500">Your latest notifications</p>
            </div>
            <button
              type="button"
              onClick={() => setActivePanel(null)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FiX size={20} />
            </button>
          </div>
          <div className="max-h-[480px] overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center py-16 px-6">
                <FiMessageCircle
                  size={45}
                  className="mx-auto text-gray-300 mb-4"/>
                <h3 className="font-semibold text-lg">No messages</h3>
                <p className="text-gray-500 text-sm mt-2">
                  You don't have any messages yet.
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="p-5 border-b hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <FiMessageCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{message.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{message.text}</p>
                      <p className="text-xs text-gray-400 mt-2">{message.time}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t bg-gray-50">
            <button
              type="button"
              onClick={() => setMessages([])}
              className="w-full py-3 rounded-full border font-semibold hover:bg-white transition cursor-pointer">
              Clear messages
            </button>
          </div>
        </div>
      )}
      {activePanel === "Coupon" && (
        <div className="fixed right-24 top-1/2 -translate-y-1/2 w-96 bg-white rounded-2xl shadow-2xl border z-[100] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div>
              <h2 className="text-xl font-bold">My Coupons</h2>
              <p className="text-sm text-gray-500">Save more on your orders</p>
            </div>
            <button
              type="button"
              onClick={() => setActivePanel(null)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FiX size={20} />
            </button>
          </div>
          <div className="p-5 space-y-4">
            <div className="border-2 border-dashed border-red-300 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-red-600 text-2xl font-bold">10% OFF</p>
                  <p className="text-sm text-gray-600 mt-1">Save up to ETB 500</p>
                </div>
                <FiTag size={30} className="text-red-500" />
              </div>
              <p className="text-xs text-gray-500 mt-3">Minimum order: ETB 2,000</p>
              <p className="text-xs text-gray-400 mt-1">Valid until September 30, 2026</p>
              <button
                type="button"
                onClick={() => alert("10% OFF coupon selected!")}
                className="w-full mt-4 bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition cursor-pointer">
                Use Now
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">ETB 300 OFF</p>
                  <p className="text-sm text-gray-600 mt-1">
                    On orders over ETB 3,000
                  </p>
                </div>
                <FiTag size={30} className="text-gray-500" />
              </div>
              <p className="text-xs text-gray-400 mt-3">Valid until September 30, 2026</p>
              <button
                type="button"
                onClick={() => alert("ETB 300 coupon selected!")}
                className="w-full mt-4 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition cursor-pointer">
                Use Now
              </button>
            </div>
          </div>
        </div>
      )}
      {activePanel === "Feedback" && (
        <div className="fixed right-24 top-1/2 -translate-y-1/2 w-96 bg-white rounded-2xl shadow-2xl border z-[100] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-xl font-bold">Feedback</h2>
            <button
              type="button"
              onClick={() => setActivePanel(null)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FiX size={20} />
            </button>
          </div>
          <div className="p-5">
            <p className="text-gray-500 text-sm mb-4">
              Tell us what you think about our website.
            </p>
            <textarea
              placeholder="Write your feedback..."
              className="w-full h-32 border rounded-xl p-4 resize-none outline-none focus:border-black"
            />
            <button
              type="button"
              onClick={() => {
                alert("Thank you for your feedback!");
                setActivePanel(null);
              }}
              className="w-full mt-4 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition cursor-pointer">
              Submit Feedback
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default SideBar;