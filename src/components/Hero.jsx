function ProductCard({ image, name, oldPrice, price, discount }) {
  return (
  <div className="bg-white rounded-lg p-2 w-[130px] shadow-sm hover:shadow-md transition">
  <img
    src={image}
    alt={name}
  className="w-full h-40 object-cover rounded-lg"
  />
  <p className="text-xs font-medium mt-2 truncate text-black">
    {name}
  </p>
<div className="flex gap-1 items-center mt-1">
  <span className="text-[10px] text-gray-400 line-through">
  {oldPrice}
  </span>
<span className="text-[10px] text-red-600 font-bold">
  {discount}
</span>
  </div>
<p className="text-red-600 text-sm font-bold">
  {price}
 </p>
  </div>
);
}
function Hero() {
  return (
<section className="w-full">
<div className="max-w-[1400px] mx-auto mt-6">
<div className="relative h-[650px] rounded-2xl overflow-hidden">
  <img
  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
  alt="Super Buyer"
  className="w-full h-full object-cover"
 />
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-0 px-12 pt-6">
<div className="flex justify-between">
<div className="text-white">
<h1 className="text-5xl font-extrabold">
  Super Buyer
</h1>
<div className="flex gap-8 mt-5 text-sm font-medium">
<span>Tax exemptions</span>
<span>Express payment</span>
<span>Financial support</span>
</div>
  <button className="mt-7 bg-white text-black px-8 py-3 rounded-md font-semibold">
    Shop Now
  </button>
  </div>
  <div className="grid grid-cols-2 gap-x-12 gap-y-5 text-white">
   {[
  ["5M+", "Factory Direct", "Support"],
  ["10", "Local Warehouses", "Worldwide"],
  ["20M+", "Value Dropshipping", "Items"],
  ["24H", "Personalized", "Sourcing Service"],
   ].map((item, index)=>(
<div key={index} className="flex gap-3">
<div className="w-[2px] h-12 bg-white rounded-full"></div>
<div>
 <h2 className="text-2xl font-bold">
     {item[0]}
</h2>
  <p className="text-xs leading-4">
    {item[1]}
    <br/>
    {item[2]}
  </p>
</div>
</div>
))}
</div>
</div>
<div className="absolute bottom-6 left-12 right-12 flex gap-6">
<div className="bg-white/95 rounded-xl p-4 flex-1">
<h2 className="text-center font-bold text-lg mb-3 text-black">
    Bulk Saver Hub
</h2>
  <div className="flex justify-center gap-3">
<ProductCard
  image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
  name="Cotton T-Shirt"
  oldPrice="ETB 1200"
  price="ETB 599"
  discount="-50%"
  />
<ProductCard
  image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  name="Sports Shoes"
  oldPrice="ETB 3000"
  price="ETB 1499"
  discount="-50%"
  />
<ProductCard
  image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  name="Smart Watch"
  oldPrice="ETB 4000"
  price="ETB 2299"
  discount="-40%"
  />
</div>
</div>
<div className="bg-white/95 rounded-xl p-4 flex-1">
<h2 className="text-center font-bold text-lg mb-3 text-black">
    Buy Again Now
</h2>
  <div className="flex justify-center gap-3">
<ProductCard
  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  name="Headphones"
  oldPrice="ETB 3500"
  price="ETB 1899"
  discount="-45%"
  />
<ProductCard
  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  name="Speaker"
  oldPrice="ETB 2500"
  price="ETB 1299"
  discount="-48%"
  />
<ProductCard
  image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  name="Smart Phone"
  oldPrice="ETB 12000"
  price="ETB 8999"
  discount="-25%"
  />
</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
}
export default Hero;