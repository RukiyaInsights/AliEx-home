import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function CategoryPage({
  category,
  onBack,
  onProductClick,
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://aliex-home-back.onrender.com/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        return response.json();
      })
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading category:", error);
        setLoading(false);
      });
  }, [category]);
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-gray-700 font-semibold hover:text-black transition">
        ← Back to Home
      </button>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {category}
        </h1>
        <p className="text-gray-500 mt-2">
          Explore all products in {category}
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
            No products found in this category.
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
export default CategoryPage;