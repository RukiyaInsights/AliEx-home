import { useEffect, useState } from "react";
function ProductDetails({ productId, onBack, onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!productId) {
      setError("No product selected.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    fetch(`https://aliex-home-back.onrender/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Product details error:", error);
        setError("Could not load this product.");
        setLoading(false);
      });
  }, [productId]);
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xl font-semibold">
          Loading product...
        </p>
      </section>
    );
  }
  if (error || !product) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xl text-red-600 mb-6">
          {error || "Product not found."}
        </p>
        <button
          onClick={onBack}
          className="bg-black text-white px-8 py-3 rounded-full">
          ← Back to Products
        </button>
      </section>
    );
  }
  const price = parseFloat(
    product.price.replace("ETB", "").trim()
  );
  const total = price * quantity;
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    alert(`${quantity} ${product.name} added to cart!`);
  };
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <button
        onClick={onBack}
        className="mb-8 font-semibold hover:text-red-600">
        ← Back to Products
      </button>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover"/>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-yellow-500">
              ★★★★★
            </span>
            <span className="text-gray-500">
              {product.rating} rating
            </span>
            <span className="text-gray-400">
              |
            </span>
            <span className="text-gray-500">
              {product.sold}+ sold
            </span>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-red-600">
                {product.price}
              </span>
              <span className="text-gray-400 line-through">
                {product.oldPrice}
              </span>
            </div>
            {product.discount && (
              <span className="inline-block mt-3 bg-red-100 text-red-600 px-3 py-1 rounded">
                {product.discount}
              </span>
            )}
          </div>
          <p className="text-gray-600 leading-7 mb-7">
            {product.description}
          </p>
          <div className="mb-6">
            <p className="font-semibold mb-3">
              Quantity
            </p>
            <div className="flex items-center border rounded-lg w-fit">
              <button
                type="button"
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="px-5 py-2 text-xl hover:bg-gray-100">
                −
              </button>
              <span className="px-6 py-2 border-x">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="px-5 py-2 text-xl hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
          <div className="text-xl font-bold mb-6">
            Total: ETB {total.toFixed(2)}
          </div>
   <div className="flex gap-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 border-2 border-black py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => {
                handleAddToCart();
              }}
              className="flex-1 bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;