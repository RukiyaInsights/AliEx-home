import { FiSearch } from "react-icons/fi";
import { ScanSearch } from "lucide-react";
function SearchBar() {
  return (
  <div className="w-full md:flex-1 md:max-w-[700px]">
<div className="relative">
<input
    type="text"
    placeholder="Search in AliExpress"
    className="w-full h-10 border border-black rounded-full pl-5 pr-28 text-sm outline-none"/>
<button
  className="absolute right-14 top-1/2 -translate-y-1/2 text-black-700 hover:text-black transition">
    <ScanSearch size={28} strokeWidth={3} />
</button>
<button
className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-8 rounded-full flex items-center justify-center hover:bg-black-800 transition">
  <FiSearch size={20} strokeWidth={3}/>
</button>
</div>
</div>
);
}
export default SearchBar;