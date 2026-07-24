import { useState } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiShoppingBag,
  FiSmartphone,
  FiHome,
  FiHeart,
  FiMonitor,
  FiTool,
  FiGift,
} from "react-icons/fi";
import { QrCode } from "lucide-react";
import SearchBar from "./SearchBar";
function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const handleNavigation = (name) => {
    alert(`${name} clicked`);
  };
  return (
<header className="w-full bg-white">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-4 py-3 px-4">
<div className="shrink-0">
<h1 className="text-2xl md:text-[30px] font-bold text-black">
AliExpress
</h1>
</div>
<div className="flex-1 min-w-0">
<SearchBar />
</div>
<div className="flex items-center gap-4 shrink-0">
<button className="hover:text-red-600 transition">
<QrCode size={22} strokeWidth={2.5}/>
</button>
<button>
<img
src="https://flagcdn.com/w40/et.png"
alt="Ethiopia"
className="w-7 h-5 rounded-sm object-cover"/>
</button>
<button className="hover:text-red-600 transition">
<FiUser size={20}/>
</button>
<button className="hover:text-red-600 transition">
<FiShoppingCart size={22}/>
</button>
</div>
</div>
<nav>
<div className="w-full flex items-center gap-4 py-3 px-6 overflow-x-auto whitespace-nowrap text-sm font-medium">
<div
className="relative shrink-0"
onMouseEnter={()=>setShowCategories(true)}
onMouseLeave={()=>setShowCategories(false)}
>
<button
className="bg-gray-100 text-black px-5 h-10 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
☰ All Categories
</button>
{
showCategories && (
<div
className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl z-50">
<ul className="py-2">
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiShoppingBag/>
Women's Fashion
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiShoppingBag/>
Men's Fashion
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiSmartphone/>
Consumer Electronics
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiMonitor/>
Computer & Office
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiHome/>
Home & Kitchen
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiHeart/>
Beauty & Health
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiTool/>
Tools & Hardware
</li>
<li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
<FiGift/>
Toys & Games
</li>
</ul>
</div>
)
}
</div>
<button
onClick={()=>handleNavigation("Choice")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
Choice
</button>
<button
onClick={()=>handleNavigation("Super Deals")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
SuperDeals
</button>
<button
onClick={()=>handleNavigation("Automotive")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
Automotive
</button>
<button
onClick={()=>handleNavigation("Appliances")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
Appliances
</button>
<button
onClick={()=>handleNavigation("Trending")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
Trending
</button>
<button
onClick={()=>handleNavigation("More")}
className="px-3 py-1 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
More
</button>
</div>
</nav>
</header>
);
}
export default Header;