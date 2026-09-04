import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ScanSearch } from "lucide-react";
function SearchBar({ setSearchResults }) {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (!search.trim()) {
      return;
    }
    console.log("Searching for:", search);
    try {
      const response = await fetch(
        `https://aliex-home-back.onrender.com/api/products/search/${encodeURIComponent(
          search
        )}`
      );
      if (!response.ok) {
        throw new Error("Search request failed");
      }
      const data = await response.json();
      console.log("Results from Express:", data);
   setSearchResults(data);
  setTimeout(() => {
        document
          .getElementById("products-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Search error:", error);
    }
  };
  return (
    <div className="w-full md:flex-1 md:max-w-[700px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search in AliExpress"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="w-full h-10 border border-black rounded-full pl-5 pr-28 text-sm outline-none"/>
        <button
          type="button"
          className="absolute right-14 top-1/2 -translate-y-1/2 z-20 text-black hover:text-gray-600">
          <ScanSearch size={28} strokeWidth={3} />
        </button>
        <button
          type="button"
          onClick={handleSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-30 bg-black text-white w-10 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800">
          <FiSearch size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;