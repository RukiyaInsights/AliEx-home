import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function Products({ searchResults=null, onProductClick, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (searchResults !== null) {
      setProducts(searchResults);
      setVisibleCount(8);
      setLoading(false);
      return;
    }
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5000/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        console.log("ALL PRODUCTS:", data);
        console.log("TOTAL PRODUCTS:", data.length);
        setProducts(data);
        setVisibleCount(8);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [searchResults]);
  const visibleProducts = products.slice(0, visibleCount);
  if (loading) {
    return (
      <section
        id="products-section"
        className="max-w-7xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          More to Love
        </h2>
        <p className="text-center text-gray-500">
          Loading products...
        </p>
      </section>
    );
  }
  return (
    <section
      id="products-section"
      className="max-w-7xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        More to Love ({products.length} products)
      </h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products found.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}/>
            ))}
          </div>
          {visibleCount < products.length && (
            <div className="flex justify-center mt-10 mb-8">
              <button
                type="button"
                onClick={() => {
                  setVisibleCount((current) => current + 8);
                }}
                className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                View More
              </button>
            </div>
          )}
          {visibleCount >= products.length && products.length > 8 && (
            <p className="text-center text-gray-500 mt-10 mb-8">
              You've reached the end of the products.
            </p>
          )}
        </>
      )}
    </section>
  );
}
export default Products;