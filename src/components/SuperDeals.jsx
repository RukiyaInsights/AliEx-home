import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function SuperDeals({
  onProductClick,
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products/super-deals")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Super Deals error:", error)
      );
  }, []);
  return (
<section
  id="super-deals-section"
  className="max-w-7xl mx-auto mt-14 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Super Deals
          </h2>
          <p className="text-gray-500 mt-1">
            Big discounts on popular products
          </p>
        </div>
        <button className="font-semibold hover:text-red-600">
          Shop now
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
export default SuperDeals;