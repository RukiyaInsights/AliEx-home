import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function MarketplacePage({
  title,
  endpoint,
  onBack,
  onProductClick,
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/products/${endpoint}`
        );
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        console.log("Marketplace products:", data);
        console.log("Total products:", data.length);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [endpoint]);
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-gray-700 font-semibold hover:text-red-600 transition">
        ← Back to Home
      </button>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>
        <p className="text-gray-500 mt-2">
          Explore {title.toLowerCase()} products
        </p>
      </div>
      {loading ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            Loading products...
          </p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No products found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}
export default MarketplacePage;