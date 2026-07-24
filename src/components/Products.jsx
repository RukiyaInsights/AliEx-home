import ProductCard from "./ProductCard";
function Products() {
const products = [
{
id:1,
category:"Electronics",
name:"Wireless Bluetooth Earbuds",
description:"Noise cancelling earbuds with 40 hour battery life.",
price:"ETB2967.99",
oldPrice:"ETB3449.99",
rating:4.9,
sold:"12,540",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80"
},
{
id:2,
category:"Electronics",
name:"Smart Watch Pro",
description:"Fitness tracking smartwatch with GPS.",
price:"ETB590.99",
oldPrice:"ETB897.99",
rating:4.8,
sold:"8,940",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
},
{
id:3,
category:"Electronics",
name:"Gaming Keyboard RGB",
description:"Mechanical keyboard with colorful lights.",
price:"ETB499.99",
oldPrice:"ETB790.99",
discount:"-37%",
rating:4.9,
sold:"4,820",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
},
{
id:4,
category:"Electronics",
name:"HD Camera",
description:"Professional camera for photos and videos.",
price:"ETB299",
oldPrice:"ETB399",
rating:4.8,
sold:"3,210",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80"
},
{
id:5,
category:"Electronics",
name:"Portable Power Bank",
description:"Fast charging power bank with large battery capacity.",
price:"ETB197.99",
oldPrice:"ETB342.99",
rating:4.8,
sold:"18,320",
image:"https://images.unsplash.com/photo-1609592424841-ecf1f5b4c9a5?auto=format&fit=crop&w=400&q=80"
},
{
id:6,
category:"Beauty",
name:"Luxury Lipstick",
description:"Long lasting waterproof matte lipstick.",
price:"ETB990.99",
oldPrice:"ETB1540.99",
rating:4.8,
sold:"22,510",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80"
},
{
id:7,
category:"Beauty",
name:"Vitamin C Face Serum",
description:"Brightens skin and improves appearance.",
price:"ETB140.99",
oldPrice:"ETB22.99",
rating:4.9,
sold:"13,440",
image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
},
{
id:8,
category:"Beauty",
name:"Luxury Perfume",
description:"Elegant long lasting fragrance collection.",
price:"ETB293.99",
oldPrice:"ETB496.99",
rating:4.9,
sold:"15,640",
image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
},
{
id:9,
category:"Fashion",
name:"Elegant Summer Dress",
description:"Comfortable stylish women's dress.",
price:"ETB262.99",
oldPrice:"ETB391.99",
rating:4.8,
sold:"9,650",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
},
{
id:10,
category:"Fashion",
name:"Leather Handbag",
description:"Premium handbag with large space.",
price:"ETB397.99",
oldPrice:"ETB594.99",
rating:4.9,
sold:"5,840",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
},
{
id:11,
category:"Fashion",
name:"Classic Sneakers",
description:"Comfortable casual sneakers for everyday use.",
price:"ETB379.99",
oldPrice:"ETB656.99",
rating:4.8,
sold:"12,420",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
},
{
id:12,
category:"Home",
name:"Modern Table Lamp",
description:"Beautiful LED lamp for bedroom.",
price:"ETB229.99",
oldPrice:"ETB345.99",
rating:4.8,
sold:"3,760",
image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80"
},
{
id:13,
category:"Home",
name:"Kitchen Organizer",
description:"Keep your kitchen clean and organized.",
price:"ETB180.99",
oldPrice:"ETB229.99",
rating:4.8,
sold:"6,400",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1556911220-bff31c0b1b16?auto=format&fit=crop&w=400&q=80"
},
{
id:14,
category:"Home",
name:"Smart LED Light",
description:"Color changing smart room lighting.",
price:"ETB159",
oldPrice:"ETB325",
rating:4.7,
sold:"7,850",
image:"https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80"
},
{
id:15,
category:"Kids",
name:"Kids Backpack",
description:"Cute waterproof school backpack.",
price:"ETB582.99",
oldPrice:"ETB7290",
rating:4.9,
sold:"4,180",
image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
},
{
id:16,
category:"Kids",
name:"Building Blocks Toy",
description:"Creative educational toy for children.",
price:"ETB524.9",
oldPrice:"ETB839",
rating:4.9,
sold:"8,110",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1594784053896-7c8a7f5a3a36?auto=format&fit=crop&w=400&q=80"
},
{
id:17,
category:"Kids",
name:"Remote Control Car",
description:"Fun racing toy car for children.",
price:"ETB279",
oldPrice:"ETB456.99",
rating:4.9,
sold:"9,230",
image:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=400&q=80"
},
{
id:18,
category:"Sports",
name:"Yoga Mat",
description:"Non slip exercise mat.",
price:"ETB721",
oldPrice:"ETB931",
rating:4.8,
sold:"5,970",
image:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80"
},
{
id:19,
category:"Sports",
name:"Football Shoes",
description:"Comfortable sports shoes.",
price:"ETB558",
oldPrice:"ETB8800",
rating:4.8,
sold:"4,500",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=400&q=80"
},
{
id:20,
category:"Sports",
name:"Fitness Smart Band",
description:"Track steps, heart rate and workouts.",
price:"ETB2500",
oldPrice:"ETB3945.99",
rating:4.8,
sold:"10,540",
image:"https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=400&q=80"
},
{
id:21,
category:"Automotive",
name:"Car Phone Holder",
description:"360 degree adjustable mount.",
price:"ETB1200.99",
oldPrice:"ETB1978",
rating:4.7,
sold:"14,220",
image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80"
},
{
id:22,
category:"Automotive",
name:"Car Cleaning Kit",
description:"Complete vehicle cleaning tools.",
price:"ETB351",
oldPrice:"ETB500",
rating:4.8,
sold:"5,200",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80"
},
{
id:23,
category:"Automotive",
name:"Car Interior Organizer",
description:"Keeps your vehicle clean and organized.",
price:"ETB316",
oldPrice:"ETB628.99",
rating:4.7,
sold:"6,720",
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80"
},
{
id:24,
category:"Jewelry",
name:"Elegant Gold Necklace",
description:"Beautiful jewelry accessory for special occasions.",
price:"ETB459.9",
oldPrice:"ETB779.99",
rating:4.9,
sold:"7,430",
welcomeDeal:true,
image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
},
{
  id:7,
  category:"Electronics",
  name:"Portable Bluetooth Speaker",
  description:"Mini wireless speaker with powerful bass and long battery life.",
  price:"ETB 1499.99",
  oldPrice:"ETB 1999.99",
  discount:"25% OFF",
  rating:4.8,
  sold:"11,320",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
},
{
  id:8,
  category:"Electronics",
  name:"Wireless Keyboard",
  description:"Slim rechargeable keyboard for laptop and desktop use.",
  price:"ETB 1799.99",
  oldPrice:"ETB 2399.99",
  discount:"25% OFF",
  rating:4.7,
  sold:"7,850",
  welcomeDeal:false,
  image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"
},
{
  id:9,
  category:"Fashion",
  name:"Women's Handbag",
  description:"Elegant shoulder bag suitable for daily use.",
  price:"ETB 999.99",
  oldPrice:"ETB 1599.99",
  discount:"38% OFF",
  rating:4.9,
  sold:"18,670",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
  id:10,
  category:"Fashion",
  name:"Running Sneakers",
  description:"Lightweight comfortable shoes for sports and walking.",
  price:"ETB 2499.99",
  oldPrice:"ETB 3299.99",
  discount:"24% OFF",
  rating:4.8,
  sold:"13,540",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
  id:11,
  category:"Home",
  name:"Electric Coffee Maker",
  description:"Automatic coffee machine for home and office.",
  price:"ETB 3499.99",
  oldPrice:"ETB 4299.99",
  discount:"19% OFF",
  rating:4.6,
  sold:"5,430",
  welcomeDeal:false,
  image:"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6"
},
{
  id:12,
  category:"Beauty",
  name:"Makeup Brush Set",
  description:"Professional soft makeup brushes with storage case.",
  price:"ETB 599.99",
  oldPrice:"ETB 899.99",
  discount:"33% OFF",
  rating:4.9,
  sold:"21,400",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
},
{
  id:13,
  category:"Electronics",
  name:"Smartphone Holder",
  description:"Adjustable phone stand for desk, office and home use.",
  price:"ETB 499.99",
  oldPrice:"ETB 799.99",
  discount:"38% OFF",
  rating:4.7,
  sold:"9,860",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1601944177325-f8867652837f"
},
{
  id:14,
  category:"Electronics",
  name:"Wireless Charging Pad",
  description:"Fast wireless charger compatible with modern smartphones.",
  price:"ETB 899.99",
  oldPrice:"ETB 1299.99",
  discount:"31% OFF",
  rating:4.8,
  sold:"14,220",
  welcomeDeal:false,
  image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07"
},
{
  id:15,
  category:"Home & Kitchen",
  name:"Air Fryer",
  description:"Healthy cooking appliance with digital temperature control.",
  price:"ETB 4599.99",
  oldPrice:"ETB 5999.99",
  discount:"23% OFF",
  rating:4.9,
  sold:"7,640",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1640958904726-7b6c6d1c6d2a"
},
{
  id:16,
  category:"Fashion",
  name:"Classic Sunglasses",
  description:"Stylish UV protection sunglasses for everyday wear.",
  price:"ETB 699.99",
  oldPrice:"ETB 999.99",
  discount:"30% OFF",
  rating:4.6,
  sold:"16,780",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
},
{
  id:17,
  category:"Beauty",
  name:"Electric Hair Dryer",
  description:"Fast drying hair dryer with multiple heat settings.",
  price:"ETB 1899.99",
  oldPrice:"ETB 2499.99",
  discount:"24% OFF",
  rating:4.7,
  sold:"8,930",
  welcomeDeal:false,
  image:"https://images.unsplash.com/photo-1522338242992-e1a54906a8da"
},
{
  id:18,
  category:"Sports",
  name:"Yoga Mat",
  description:"Non-slip comfortable exercise mat for fitness and yoga.",
  price:"ETB 799.99",
  oldPrice:"ETB 1199.99",
  discount:"33% OFF",
  rating:4.8,
  sold:"12,560",
  welcomeDeal:true,
  image:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f"
}
];
return (
<section className="max-w-7xl mx-auto mt-12">
<h2 className="text-3xl font-bold  text-center mb-8">
           More to Love
</h2>
<div className="grid grid-cols-4 gap-6">
{
products.map(product=>(
<ProductCard
key={product.id}
product={product}
/>
))
}
</div>
<div className="flex justify-center mt-10 mb-8">
<button
  className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
   View More
</button>
</div>
</section>
);
}
export default Products;