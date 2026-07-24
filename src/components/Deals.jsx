import { useEffect, useState } from "react";
function Deals() {
  const [time, setTime] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });
  useEffect(() => {
   const timer = setInterval(() => {
  setTime((prev) => {
  let seconds = prev.seconds - 1;
  let minutes = prev.minutes;
  let hours = prev.hours;
if (seconds < 0) {
seconds = 59;
minutes--;
  }
if (minutes < 0) {
          minutes = 59;
          hours--;
     }
 if (hours < 0) {
          hours = 23;
     }
 return {
   hours,
   minutes,
   seconds,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const deals = [
{
id: 1,
name: "Smart Phone",
price: 199,
oldPrice: 299,
discount: "30% OFF",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
id: 2,
name: "Laptop",
price: 499,
oldPrice: 699,
discount: "28% OFF",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
id: 3,
name: "Camera",
price: 299,
oldPrice: 399,
discount: "25% OFF",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    }
  ];
  return (
  <section className="max-w-[1200px] mx-auto mt-10">
  <div className="text-center mb-6">
  <h2 className="text-3xl font-bold text-black">
    Today's Deals
  </h2>
  </div>
  <div className="flex rounded-xl overflow-hidden shadow-md bg-white">
  <div className="w-72 p-6 flex flex-col justify-center group">
  <h2 className="text-3xl font-extrabold text-black mb-5">
    Super Deals
  </h2>
  <div
  className="flex items-center gap-3 bg-[#fde8df] group-hover:bg-white transition-all duration-300 px-4 py-3 rounded-full w-fit mb-6">
  <div className="relative w-9 h-9 rounded-full border-2 border-[#d97745] bg-white">
<div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-[#d97745] -translate-x-1/2 -translate-y-1/2 z-10"></div>
<div className="absolute left-1/2 top-1/2 w-[2px] h-3 bg-[#d97745] origin-bottom -translate-x-1/2 -translate-y-full animate-[spin_12s_linear_infinite]">
</div>
<div className="absolute left-1/2 top-1/2 w-[2px] h-4 bg-[#d97745] origin-bottom -translate-x-1/2 -translate-y-full rotate-45">
</div>
</div>
<span className="font-semibold text-lg text-[#b45309] group-hover:text-black transition">
    Ends in
</span>
<span className="font-bold text-lg tracking-wider text-[#b45309] group-hover:text-black transition">
  {String(time.hours).padStart(2,"0")}:
  {String(time.minutes).padStart(2,"0")}:
  {String(time.seconds).padStart(2,"0")}
</span>
</div>
<button
onClick={() => alert("Opening Super Deals")}
  className="bg-black text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-800 transition w-fit cursor-pointer">
    Shop Now
</button>
  </div>
<div className="flex-1 grid grid-cols-3 gap-5 p-6">
    {deals.map((deal)=>(
<div
  key={deal.id}
onClick={() => alert(`Opening ${deal.name}`)}
  className="p-3 rounded-xl hover:shadow-lg transition cursor-pointer">
<img
  src={deal.image}
  alt={deal.name}
  className="w-full h-40 object-contain"
    />
<h3 className="font-semibold mt-3">
  {deal.name}
</h3>
<span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 roundedmt-2">
  {deal.discount}
</span>
<div className="mt-2">
<span className="text-red-600 text-xl font-bold">
  ETB {deal.price}
</span>
  <span className="ml-2 text-gray-400 line-through text-sm">
  ETB {deal.oldPrice}
</span>
</div>
</div>
))}
</div>
</div>
</section>
);
}
export default Deals;