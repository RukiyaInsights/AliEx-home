import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function Trending({
  onProductClick,
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://aliex-home-back.onrender/api/products/trending")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Trending products error:", error)
      );
  }, []);
  return (
    <section
      id="trending-section"
      className="max-w-7xl mx-auto mt-14 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Trending Now
          </h2>
          <p className="text-gray-500 mt-1">
            What shoppers are loving right now
          </p>
        </div>
        <button className="font-semibold hover:text-red-600">
          View All →
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.slice(0, 6).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
export default Trending;