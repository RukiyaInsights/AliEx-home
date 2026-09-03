import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
function FlashDeals({ onProductClick, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const flashProducts = Array.isArray(data)
          ? data.filter((product) => product.discount)
          : [];
        setProducts(flashProducts);
      } catch (error) {
        console.error("Flash Deals error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-5">
          Flash Deals
        </h2>
        <p className="text-gray-500">
          Loading products...
        </p>
      </section>
    );
  }
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Flash Deals
        </h2>

        <span className="text-sm text-gray-500">
          Limited-time deals
        </span>
      </div>
      {products.length === 0 ? (
        <p className="text-gray-500">
          No flash deals available.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.slice(0, 10).map((product) => (
            <div
              key={product._id || product.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => onProductClick && onProductClick(product)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (onAddToCart) {
                      onAddToCart(product);
                    }
                  }}
                  className="absolute bottom-2 right-2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:text-red-600 transition cursor-pointer">
                  <FiShoppingCart size={18} />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold">
                    ETB {product.price}
                  </span>
                  {product.discount && (
                    <span className="text-xs text-red-600 font-semibold">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                {product.rating && (
                  <p className="text-xs text-gray-500 mt-1">
                    ⭐ {product.rating}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
export default FlashDeals;