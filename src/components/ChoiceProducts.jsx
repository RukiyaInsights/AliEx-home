import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function ChoiceProducts({
  onProductClick,
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://aliex-home-back.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Choice products error:", error)
      );
  }, []);
  return (
    <section
      id="choice-section"
      className="max-w-7xl mx-auto mt-14 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Choice
          </h2>
          <p className="text-gray-500 mt-1">
            Great products selected just for you
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
export default ChoiceProducts;