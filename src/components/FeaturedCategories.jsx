import {
  FiSmartphone,
  FiMonitor,
  FiShoppingBag,
  FiHome,
  FiHeart,
  FiGift,
  FiActivity,
  FiTruck,
  FiWatch,
  FiCoffee,
} from "react-icons/fi";
function FeaturedCategories({ onCategoryClick }) {
  const categories = [
    {
      name: "Phones & Accessories",
      icon: <FiSmartphone size={32} />,
    },
    {
      name: "Computers",
      icon: <FiMonitor size={32} />,
    },
    {
      name: "Fashion",
      icon: <FiShoppingBag size={32} />,
    },
    {
      name: "Shoes",
      icon: <FiShoppingBag size={32} />,
    },
    {
      name: "Home",
      icon: <FiHome size={32} />,
    },
    {
      name: "Beauty",
      icon: <FiHeart size={32} />,
    },
    {
      name: "Automotive",
      icon: <FiTruck size={32} />,
    },
    {
      name: "Gaming",
      icon: <FiMonitor size={32} />,
    },
    {
      name: "Sports",
      icon: <FiActivity size={32} />,
    },
    {
      name: "Jewelry",
      icon: <FiWatch size={32} />,
    },
    {
      name: "Kitchen",
      icon: <FiCoffee size={32} />,
    },
    {
      name: "Kids",
      icon: <FiGift size={32} />,
    },
  ];
  return (
    <section
      id="featured-categories"
      className="max-w-7xl mx-auto mt-14 px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          Featured Categories
        </h2>
        <p className="text-gray-500 mt-1">
          Explore products from every category
        </p>
      </div>
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((category) => (
    <div
            key={category.name}
            onClick={() => onCategoryClick(category.name)}
className="bg-gray-50 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 hover:-translate-y-1 transition">
         <div className="mb-3 text-gray-700">
         {category.icon}
         </div>
    <span className="text-sm font-semibold">
         {category.name}
      </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturedCategories;