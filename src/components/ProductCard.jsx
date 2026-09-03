import { FiStar, FiShoppingCart } from "react-icons/fi"
function ProductCard({ product, onProductClick, onAddToCart }) {
  const price = parseFloat(
    String(product.price || "0").replace("ETB", "").trim()
  );
  const oldPrice = parseFloat(
    String(product.oldPrice || "0").replace("ETB", "").trim()
  );
  const saving = oldPrice - price;
  const handleProductClick = () => {
    if (onProductClick) {
      onProductClick(product.id);
    }
  };
  const handleCartClick = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  return (
    <div
      onClick={handleProductClick}
      className="relative rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.welcomeDeal && (
          <div className="absolute bottom-0 left-0 w-full bg-[#e43d70] text-white text-[11px] font-bold py-1 px-2 text-center">
            WELCOME DEAL · Free shipping
          </div>
        )}
        <button
          type="button"
          onClick={handleCartClick}
          className="absolute bottom-2 right-3 w-11 h-11 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 z-10">
          <FiShoppingCart size={18} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        {product.discount && (
          <span className="inline-block bg-red-100 text-red-600 text-sm px-2 py-1 rounded mt-3">
            {product.discount}
          </span>
        )}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-red-600 text-2xl font-bold">
            {product.price}
          </span>
          <span className="line-through text-gray-400">
            {product.oldPrice}
          </span>
        </div>
        {saving > 0 && (
          <div className="text-[#e43d70] text-xs font-semibold mt-1">
            New shoppers save {saving.toFixed(2)} ETB
          </div>
        )}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className="text-black fill-black"
                size={14}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">
            ({product.rating})
          </span>
          <span className="text-gray-500 text-sm">
            | {product.sold}+ sold
          </span>
        </div>
        <p className="text-[#8b5a2b] text-sm mt-2 font-medium">
          Top selling on AliExpress
        </p>
      </div>
    </div>
  );
}
export default ProductCard;