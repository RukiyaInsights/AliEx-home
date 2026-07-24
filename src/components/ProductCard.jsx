import { FiStar, FiShoppingCart } from "react-icons/fi";
function ProductCard({ product }) {
  const saving =
  parseFloat(product.oldPrice.replace("ETB", "")) -
  parseFloat(product.price.replace("ETB", ""));
  return (
    <div className="relative rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
    <div className="relative">
<img
    src={product.image}
    alt={product.name}
  className="w-full h-48 object-cover"/>
  {product.welcomeDeal && (
<div className="absolute bottom-0 left-0 w-full bg-[#e43d70] text-white text-[11px] font-bold py-1 px-2 text-center">
    WELCOME DEAL . Free shipping
</div>
)}
  <button
  className="absolute bottom-2 right-3 w-11 h-11 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 z-10">
<FiShoppingCart size={18} />
  </button>
</div>
<div className="p-4">
<h3 className="font-semibold text-lg">
    {product.name}
</h3>
<p className="text-gray-500 text-sm mt-2 line-clamp-2">
     {product.description}
</p>
<span className="inline-block bg-red-100 text-red-600 text-sm px-2 py-1 rounded mt-3">
      {product.discount}
</span>
<div className="flex items-center gap-3 mt-3">
<span className="text-red-600 text-2xl font-bold">
    {product.price}
</span>
<span className="line-through text-gray-400">
    {product.oldPrice}
</span>
</div>
<div className="text-[#e43d70] text-xs font-semibold mt-1">
  New shoppers save {saving.toFixed(2)} ETB
</div>
<div className="flex items-center gap-2 mt-3">
<div className="flex">
<FiStar className="text-black fill-black" size={14}/>
<FiStar className="text-black fill-black" size={14}/>
<FiStar className="text-black fill-black" size={14}/>
<FiStar className="text-black fill-black" size={14}/>
<FiStar className="text-black fill-black" size={14}/>
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