const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Wireless Bluetooth Earbuds",
    description: "Noise cancelling earbuds with 40 hour battery life.",
    price: "ETB2967.99",
    oldPrice: "ETB3449.99",
    discount: "-14%",
    rating: 4.9,
    sold: "12,540",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    category: "Electronics",
    name: "Smart Watch Pro",
    description: "Fitness tracking smartwatch with GPS.",
    price: "ETB590.99",
    oldPrice: "ETB897.99",
    discount: "-34%",
    rating: 4.8,
    sold: "8,940",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    category: "Electronics",
    name: "Gaming Keyboard RGB",
    description: "Mechanical keyboard with colorful lights.",
    price: "ETB499.99",
    oldPrice: "ETB790.99",
    discount: "-37%",
    rating: 4.9,
    sold: "4,820",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    category: "Electronics",
    name: "HD Camera",
    description: "Professional camera for photos and videos.",
    price: "ETB299",
    oldPrice: "ETB399",
    discount: "-25%",
    rating: 4.8,
    sold: "3,210",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    category: "Electronics",
    name: "Portable Power Bank",
    description: "Fast charging power bank with large battery capacity.",
    price: "ETB197.99",
    oldPrice: "ETB342.99",
    discount: "-42%",
    rating: 4.8,
    sold: "18,320",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1609592424841-ecf1f5b4c9a5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    category: "Beauty",
    name: "Luxury Lipstick",
    description: "Long lasting waterproof matte lipstick.",
    price: "ETB990.99",
    oldPrice: "ETB1540.99",
    discount: "-36%",
    rating: 4.8,
    sold: "22,510",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    category: "Beauty",
    name: "Vitamin C Face Serum",
    description: "Brightens skin and improves appearance.",
    price: "ETB140.99",
    oldPrice: "ETB222.99",
    discount: "-37%",
    rating: 4.9,
    sold: "13,440",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    category: "Beauty",
    name: "Luxury Perfume",
    description: "Elegant long lasting fragrance collection.",
    price: "ETB293.99",
    oldPrice: "ETB496.99",
    discount: "-41%",
    rating: 4.9,
    sold: "15,640",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    category: "Fashion",
    name: "Elegant Summer Dress",
    description: "Comfortable stylish women's dress.",
    price: "ETB262.99",
    oldPrice: "ETB391.99",
    discount: "-33%",
    rating: 4.8,
    sold: "9,650",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    category: "Fashion",
    name: "Leather Handbag",
    description: "Premium handbag with large space.",
    price: "ETB397.99",
    oldPrice: "ETB594.99",
    discount: "-33%",
    rating: 4.9,
    sold: "5,840",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    category: "Fashion",
    name: "Classic Sneakers",
    description: "Comfortable casual sneakers for everyday use.",
    price: "ETB379.99",
    oldPrice: "ETB656.99",
    discount: "-42%",
    rating: 4.8,
    sold: "12,420",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    category: "Home",
    name: "Modern Table Lamp",
    description: "Beautiful LED lamp for bedroom.",
    price: "ETB229.99",
    oldPrice: "ETB345.99",
    discount: "-34%",
    rating: 4.8,
    sold: "3,760",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    category: "Home",
    name: "Kitchen Organizer",
    description: "Keep your kitchen clean and organized.",
    price: "ETB180.99",
    oldPrice: "ETB229.99",
    discount: "-21%",
    rating: 4.8,
    sold: "6,400",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1556911220-bff31c0b1b16?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    category: "Home",
    name: "Smart LED Light",
    description: "Color changing smart room lighting.",
    price: "ETB159",
    oldPrice: "ETB325",
    discount: "-51%",
    rating: 4.7,
    sold: "7,850",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    category: "Kids",
    name: "Kids Backpack",
    description: "Cute waterproof school backpack.",
    price: "ETB582.99",
    oldPrice: "ETB729.99",
    discount: "-20%",
    rating: 4.9,
    sold: "4,180",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 16,
    category: "Kids",
    name: "Building Blocks Toy",
    description: "Creative educational toy for children.",
    price: "ETB524.90",
    oldPrice: "ETB839",
    discount: "-37%",
    rating: 4.9,
    sold: "8,110",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1594784053896-7c8a7f5a3a36?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 17,
    category: "Kids",
    name: "Remote Control Car",
    description: "Fun racing toy car for children.",
    price: "ETB279",
    oldPrice: "ETB456.99",
    discount: "-39%",
    rating: 4.9,
    sold: "9,230",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 18,
    category: "Sports",
    name: "Yoga Mat",
    description: "Non slip exercise mat.",
    price: "ETB721",
    oldPrice: "ETB931",
    discount: "-23%",
    rating: 4.8,
    sold: "5,970",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 19,
    category: "Sports",
    name: "Football Shoes",
    description: "Comfortable sports shoes.",
    price: "ETB558",
    oldPrice: "ETB880",
    discount: "-37%",
    rating: 4.8,
    sold: "4,500",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 20,
    category: "Sports",
    name: "Fitness Smart Band",
    description: "Track steps, heart rate and workouts.",
    price: "ETB2500",
    oldPrice: "ETB3945.99",
    discount: "-37%",
    rating: 4.8,
    sold: "10,540",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 21,
    category: "Automotive",
    name: "Car Phone Holder",
    description: "360 degree adjustable mount.",
    price: "ETB1200.99",
    oldPrice: "ETB1978",
    discount: "-39%",
    rating: 4.7,
    sold: "14,220",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 22,
    category: "Automotive",
    name: "Car Cleaning Kit",
    description: "Complete vehicle cleaning tools.",
    price: "ETB351",
    oldPrice: "ETB500",
    discount: "-30%",
    rating: 4.8,
    sold: "5,200",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 23,
    category: "Automotive",
    name: "Car Interior Organizer",
    description: "Keeps your vehicle clean and organized.",
    price: "ETB316",
    oldPrice: "ETB628.99",
    discount: "-50%",
    rating: 4.7,
    sold: "6,720",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 24,
    category: "Jewelry",
    name: "Elegant Gold Necklace",
    description: "Beautiful jewelry accessory for special occasions.",
    price: "ETB459.90",
    oldPrice: "ETB779.99",
    discount: "-41%",
    rating: 4.9,
    sold: "7,430",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
  },
    {
    id: 25,
    category: "Electronics",
    name: "Wireless Gaming Headset",
    description: "Low latency gaming headset with surround sound and microphone.",
    price: "ETB899.99",
    oldPrice: "ETB1399.99",
    discount: "-36%",
    rating: 4.8,
    sold: "8,420",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 26,
    category: "Electronics",
    name: "Portable Bluetooth Speaker",
    description: "Compact wireless speaker with powerful sound and long battery life.",
    price: "ETB649.99",
    oldPrice: "ETB999.99",
    discount: "-35%",
    rating: 4.7,
    sold: "11,280",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 27,
    category: "Electronics",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with modern smartphones.",
    price: "ETB299.99",
    oldPrice: "ETB499.99",
    discount: "-40%",
    rating: 4.7,
    sold: "9,850",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 28,
    category: "Electronics",
    name: "Smartphone Tripod",
    description: "Adjustable tripod stand for photography, video and live streaming.",
    price: "ETB429.99",
    oldPrice: "ETB699.99",
    discount: "-39%",
    rating: 4.8,
    sold: "6,730",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=400&q=80"
  },

  {
    id: 29,
    category: "Phones & Accessories",
    name: "Premium Phone Case",
    description: "Shockproof protective phone case with modern stylish design.",
    price: "ETB149.99",
    oldPrice: "ETB299.99",
    discount: "-50%",
    rating: 4.9,
    sold: "24,600",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1603313011108-4a2a6f7a4c6a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 30,
    category: "Phones & Accessories",
    name: "Fast Charging Cable",
    description: "Durable high-speed charging and data cable.",
    price: "ETB129.99",
    oldPrice: "ETB249.99",
    discount: "-48%",
    rating: 4.8,
    sold: "31,200",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 31,
    category: "Phones & Accessories",
    name: "Mini Power Bank",
    description: "Pocket-sized portable charger for everyday travel.",
    price: "ETB389.99",
    oldPrice: "ETB599.99",
    discount: "-35%",
    rating: 4.8,
    sold: "17,430",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1609592424841-ecf1f5b4c9a5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 32,
    category: "Phones & Accessories",
    name: "Phone Ring Holder",
    description: "Rotating phone grip and stand for comfortable handling.",
    price: "ETB99.99",
    oldPrice: "ETB199.99",
    discount: "-50%",
    rating: 4.7,
    sold: "19,850",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 33,
    category: "Computers",
    name: "Wireless Computer Mouse",
    description: "Ergonomic wireless mouse with smooth and accurate tracking.",
    price: "ETB349.99",
    oldPrice: "ETB549.99",
    discount: "-36%",
    rating: 4.8,
    sold: "14,670",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 34,
    category: "Computers",
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for comfortable working.",
    price: "ETB699.99",
    oldPrice: "ETB1099.99",
    discount: "-36%",
    rating: 4.9,
    sold: "7,240",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 35,
    category: "Computers",
    name: "USB Hub Adapter",
    description: "Multi-port USB hub for laptops and desktop computers.",
    price: "ETB399.99",
    oldPrice: "ETB699.99",
    discount: "-43%",
    rating: 4.7,
    sold: "10,430",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 36,
    category: "Computers",
    name: "Mechanical Gaming Keyboard",
    description: "RGB mechanical keyboard designed for gaming and productivity.",
    price: "ETB799.99",
    oldPrice: "ETB1299.99",
    discount: "-38%",
    rating: 4.9,
    sold: "9,310",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 37,
    category: "Gaming",
    name: "Gaming Controller",
    description: "Wireless controller with ergonomic design and responsive buttons.",
    price: "ETB899.99",
    oldPrice: "ETB1399.99",
    discount: "-36%",
    rating: 4.8,
    sold: "8,720",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 38,
    category: "Gaming",
    name: "RGB Gaming Mouse",
    description: "High precision gaming mouse with customizable RGB lighting.",
    price: "ETB459.99",
    oldPrice: "ETB799.99",
    discount: "-43%",
    rating: 4.8,
    sold: "12,340",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 39,
    category: "Gaming",
    name: "Gaming Desk Mat",
    description: "Large smooth desk mat designed for gaming setups.",
    price: "ETB299.99",
    oldPrice: "ETB499.99",
    discount: "-40%",
    rating: 4.7,
    sold: "6,870",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 40,
    category: "Gaming",
    name: "RGB Desk Lighting",
    description: "Colorful LED lighting for gaming rooms and computer desks.",
    price: "ETB529.99",
    oldPrice: "ETB899.99",
    discount: "-41%",
    rating: 4.8,
    sold: "5,430",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
  },

  {
    id: 41,
    category: "Fashion",
    name: "Women's Casual Top",
    description: "Comfortable fashionable top for everyday casual outfits.",
    price: "ETB229.99",
    oldPrice: "ETB399.99",
    discount: "-43%",
    rating: 4.8,
    sold: "13,420",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 42,
    category: "Fashion",
    name: "Men's Casual Jacket",
    description: "Stylish lightweight jacket suitable for everyday wear.",
    price: "ETB749.99",
    oldPrice: "ETB1199.99",
    discount: "-38%",
    rating: 4.8,
    sold: "6,840",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 43,
    category: "Fashion",
    name: "Classic Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: "ETB199.99",
    oldPrice: "ETB399.99",
    discount: "-50%",
    rating: 4.7,
    sold: "18,540",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 44,
    category: "Fashion",
    name: "Classic Wrist Watch",
    description: "Elegant everyday watch with premium-style design.",
    price: "ETB599.99",
    oldPrice: "ETB999.99",
    discount: "-40%",
    rating: 4.8,
    sold: "7,320",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=400&q=80"
  },

  {
    id: 45,
    category: "Shoes",
    name: "Running Sneakers",
    description: "Lightweight running shoes designed for comfort and movement.",
    price: "ETB699.99",
    oldPrice: "ETB1099.99",
    discount: "-36%",
    rating: 4.9,
    sold: "11,620",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 46,
    category: "Shoes",
    name: "Women's Casual Shoes",
    description: "Comfortable everyday shoes with modern styling.",
    price: "ETB549.99",
    oldPrice: "ETB899.99",
    discount: "-39%",
    rating: 4.8,
    sold: "8,940",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 47,
    category: "Shoes",
    name: "Classic White Sneakers",
    description: "Minimalist sneakers that match casual everyday outfits.",
    price: "ETB629.99",
    oldPrice: "ETB999.99",
    discount: "-37%",
    rating: 4.8,
    sold: "15,240",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 48,
    category: "Shoes",
    name: "Sports Training Shoes",
    description: "Comfortable shoes for training, walking and workouts.",
    price: "ETB719.99",
    oldPrice: "ETB1099.99",
    discount: "-35%",
    rating: 4.8,
    sold: "5,670",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 49,
    category: "Home",
    name: "Decorative Wall Mirror",
    description: "Modern decorative mirror for bedrooms and living rooms.",
    price: "ETB799.99",
    oldPrice: "ETB1299.99",
    discount: "-38%",
    rating: 4.8,
    sold: "4,320",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 50,
    category: "Home",
    name: "Modern Throw Pillow",
    description: "Soft decorative cushion for sofas and bedrooms.",
    price: "ETB249.99",
    oldPrice: "ETB399.99",
    discount: "-38%",
    rating: 4.7,
    sold: "7,850",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 51,
    category: "Home",
    name: "Storage Basket",
    description: "Stylish multipurpose storage basket for home organization.",
    price: "ETB329.99",
    oldPrice: "ETB549.99",
    discount: "-40%",
    rating: 4.8,
    sold: "6,420",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 52,
    category: "Kitchen",
    name: "Non Stick Cookware Set",
    description: "Complete cookware set for modern kitchens.",
    price: "ETB1299.99",
    oldPrice: "ETB1999.99",
    discount: "-35%",
    rating: 4.9,
    sold: "5,920",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1556911220-bff31c0b1b16?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 53,
    category: "Kitchen",
    name: "Electric Coffee Maker",
    description: "Compact coffee maker for fresh coffee at home.",
    price: "ETB899.99",
    oldPrice: "ETB1399.99",
    discount: "-36%",
    rating: 4.8,
    sold: "4,760",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 54,
    category: "Kitchen",
    name: "Kitchen Knife Set",
    description: "Sharp stainless steel kitchen knife set with storage block.",
    price: "ETB599.99",
    oldPrice: "ETB999.99",
    discount: "-40%",
    rating: 4.8,
    sold: "8,210",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=400&q=80"
  },

  {
    id: 55,
    category: "Beauty",
    name: "Makeup Brush Set",
    description: "Professional makeup brush collection for everyday beauty.",
    price: "ETB299.99",
    oldPrice: "ETB499.99",
    discount: "-40%",
    rating: 4.9,
    sold: "16,740",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 56,
    category: "Beauty",
    name: "Skincare Gift Set",
    description: "Complete skincare collection for a simple beauty routine.",
    price: "ETB799.99",
    oldPrice: "ETB1299.99",
    discount: "-38%",
    rating: 4.8,
    sold: "9,320",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 57,
    category: "Automotive",
    name: "Car Dashboard Organizer",
    description: "Compact organizer for keeping your vehicle dashboard tidy.",
    price: "ETB249.99",
    oldPrice: "ETB449.99",
    discount: "-44%",
    rating: 4.7,
    sold: "7,420",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 58,
    category: "Automotive",
    name: "LED Car Interior Lights",
    description: "Colorful LED lighting kit for stylish vehicle interiors.",
    price: "ETB399.99",
    oldPrice: "ETB699.99",
    discount: "-43%",
    rating: 4.8,
    sold: "10,240",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 59,
    category: "Automotive",
    name: "Car Emergency Tool Kit",
    description: "Useful collection of basic vehicle emergency tools.",
    price: "ETB849.99",
    oldPrice: "ETB1299.99",
    discount: "-35%",
    rating: 4.8,
    sold: "4,830",
    welcomeDeal: false,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 60,
    category: "Automotive",
    name: "Car Seat Organizer",
    description: "Multi-pocket organizer for keeping vehicle essentials in place.",
    price: "ETB329.99",
    oldPrice: "ETB549.99",
    discount: "-40%",
    rating: 4.7,
    sold: "6,950",
    welcomeDeal: true,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80"
  }
];
const flashDeals = products.filter(
  (product) => product.discount && Number(product.rating) >= 4.8
);
const choiceProducts = products.filter(
  (product) => product.welcomeDeal === true
);
const superDeals = products.filter(
  (product) => product.discount
);
const trendingProducts = products.filter(
  (product) => Number(product.rating) >= 4.9
);
const newArrivals = products.slice(-12);
const moreToLove = products;
let orders = [];
let users = [];
app.get("/", (req, res) => {
  res.send("AliExpress Backend is running perfectly!");
});
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please provide name, email and password"
    });
  }
  const existingUser = users.find(
    (user) => user.email === email
  );
  if (existingUser) {
    return res.status(400).json({
      message: "Email already registered"
    });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };
users.push(newUser);
 res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  });
});
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );
  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }
  res.json({
    message: "Login successful",
    user: {
    id: user.id,
    name: user.name,
    email: user.email
  }
  });
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/flash-deals", (req, res) => {
  res.json(flashDeals);
});
app.get("/api/products/choice", (req, res) => {
  res.json(choiceProducts);
});
app.get("/api/products/super-deals", (req, res) => {
  res.json(superDeals);
});
app.get("/api/products/trending", (req, res) => {
  res.json(trendingProducts);
});
app.get("/api/products/new-arrivals", (req, res) => {
  res.json(newArrivals);
});
app.get("/api/products/more-to-love", (req, res) => {
  res.json(moreToLove);
});
app.get("/api/products/search/:keyword", (req, res) => {
const keyword = req.params.keyword.toLowerCase();
const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
  );
  res.json(results);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id)
  );
  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }
  res.json(product);
});
app.post("/api/orders", (req, res) => {
  const {
    customer,
    paymentMethod,
    items,
    total
  } = req.body;
  if (
    !customer ||
    !paymentMethod ||
    !items ||
    items.length === 0
  ) {
  return res.status(400).json({
   message: "Invalid order data"
    });
  }
const newOrder = {
  id: orders.length + 1,
  customer,
  paymentMethod,
  items,
  total,
  status: "Pending",
  createdAt: new Date().toISOString()
  };
orders.push(newOrder);
console.log("NEW ORDER:", newOrder);
res.status(201).json({
  message: "Order created successfully",
  order: newOrder
  });
});
app.get("/api/orders", (req, res) => {
  res.json(orders);
});
app.get("/api/orders/:id", (req, res) => {
  const order = orders.find(
    (order) => order.id === Number(req.params.id)
  );
  if (!order) {
  return res.status(404).json({
    message: "Order not found"
    });
  }
  res.json(order);
});
app.get("/api/orders/:id/status", (req, res) => {
  const orderId = Number(req.params.id);
  const order = orders.find(
    (order) => order.id === orderId
  );
  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }
res.json({
  orderId: order.id,
  status: order.status
  });
});
app.patch("/api/orders/:id/status", (req, res) => {
  const orderId = Number(req.params.id);
  const { status } = req.body;
  const allowedStatuses = [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
    "Cancelled"
  ];
  if (!allowedStatuses.includes(status)) {
  return res.status(400).json({
  message: "Invalid order status"
    });
  }
  const order = orders.find(
  (order) => order.id === orderId
  );
  if (!order) {
   return res.status(404).json({
  message: "Order not found"
    });
  }
  order.status = status;
  console.log("ORDER STATUS UPDATED:", order);
res.json({
message: "Order status updated successfully",
order
  });
});
app.listen(PORT, "0.0.0.0", () => {
console.log(
`Server running on http://localhost:${PORT}`
);
});