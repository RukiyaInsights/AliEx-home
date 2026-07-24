import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { FiTruck } from "react-icons/fi";
function App() {
  return (
  <>
  <Header />
<div className="bg-white">
<div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 py-3 text-sm text-[#8b5a2b]">
    <FiTruck size={18} />
  <span className="font-medium">
    Free shipping over ETB 1,654 on all Choice items
  </span>
</div>
</div>
<Deals />
<Hero />
<Categories />
<Products />
<Footer />
<SideBar />
</>
);
}
export default App;