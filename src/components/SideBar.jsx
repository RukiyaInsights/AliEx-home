import {
  FiShoppingCart,
  FiMessageCircle,
  FiTag,
  FiMessageSquare
} from "react-icons/fi";
function SideBar(){
  const items = [
{
name:"Cart",
icon:<FiShoppingCart size={22}/>
},
{
name:"Message",
icon:<FiMessageCircle size={22}/>
},
{
name:"Coupon",
icon:<FiTag size={22}/>
},
{
name:"Feedback",
icon:<FiMessageSquare size={22}/>
}
];
return (
<div
className="fixed right-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg overflow-hidden z-50">
{
  items.map((item)=>(
<button
 key={item.name}
 className="w-16 h-16 flex flex-col items-center justify-center gap-1 text-gray-700 hover:text-red-600 hover:bg-gray-100 transition">
  {item.icon}
 <span className="text-[11px]">
  {item.name}
 </span>
</button>
))
}
</div>
);
}
export default SideBar;