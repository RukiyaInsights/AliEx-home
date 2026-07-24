function Categories() {
const fashionProducts = [
{
name:"Women's Dress",
price:"ETB260",
oldPrice:"ETB390",
rating:"4.8",
sold:"9,650",
image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8"
},
{
name:"Luxury Handbag",
price:"ETB398",
oldPrice:"ETB592",
rating:"4.9",
sold:"5,840",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
name:"Men's Jacket",
price:"ETB450",
oldPrice:"ETB770",
rating:"4.7",
sold:"6,430",
image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
}
];
const products = [
{
name:"Smart Watch Pro",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
name:"Wireless Earbuds",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
name:"Beauty Serum",
image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
},
{
name:"Modern Lamp",
image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
}
];
return (
<section className="max-w-7xl mx-auto mt-12">
<h2 className="text-3xl font-bold text-center mb-6">
Shop by Category
</h2>
<div className="flex rounded-2xl overflow-hidden">
<div className="w-1/2 bg-[#a9dcff] p-8">
<h3 className="text-5xl font-serif italic font-black tracking-wide mb-1">
VIVA
</h3>
<h4 className="text-3xl font-semibold mb-5">
Your Fashion Choice
</h4>
<button
onClick={() => alert("Opening Fashion Collection")}
className="bg-black text-white px-8 py-3 rounded-md font-semibold mb-8 hover:bg-gray-800 transition cursor-pointer">
Shop Now
</button>
<div className="grid grid-cols-3 gap-4">
{
fashionProducts.map((item)=>(
<div
key={item.name}
className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
<img
  src={item.image}
  alt={item.name}
className="w-full h-32 object-cover"/>
<div className="p-3">
<h5 className="font-semibold text-sm">
  {item.name}
</h5>
<div className="flex items-center text-sm mt-2">
<span className="text-yellow-400 text-lg">
★
</span>
<span className="text-gray-500 ml-1">
{item.rating}
</span>
<span className="text-gray-400 ml-2">
| {item.sold}+ sold
</span>
</div>
<div className="mt-2">
<span className="text-red-600 font-bold">
 {item.price}
</span>
<span className="text-gray-400 line-through text-sm ml-2">
 {item.oldPrice}
</span>
</div>
</div>
</div>
))
}
</div>
</div>
<div className="w-1/2 bg-[#f3f3f3] p-8 grid grid-cols-2 gap-5">
{
products.map((product)=>(
<div
key={product.name}
onClick={() => alert(`Opening ${product.name}`)}
className="bg-white rounded-xl p-4 flex items-center justify-between hover:shadow-md transition cursor-pointer">
<div>
<h4 className="font-semibold text-base text-gray-900">
    {product.name}
</h4>
</div>
<img
   src={product.image}
   alt={product.name}
className="w-24 h-24 rounded-lg object-cover"/>
</div>
))
}
</div>
</div>
</section>
);
}
export default Categories;