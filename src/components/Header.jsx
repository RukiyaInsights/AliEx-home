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
function Header({
  setSearchResults,
  cartItems,
  onCartClick,
  onLoginClick,
  loggedInUser,
  onPageChange,
}) {
  const [showCategories, setShowCategories] = useState(false);
const [showMobileMenu, setShowMobileMenu] = useState(false);
  const openPage = (page) => {
    setShowCategories(false);
    if (onPageChange) {
      onPageChange(page);
    }
  };
  const categories = [
    {
      name: "Women's Fashion",
      page: {
        title: "Fashion",
        endpoint: "search/Fashion",
      },
      icon: <FiShoppingBag />,
    },
    {
      name: "Men's Fashion",
      page: {
        title: "Fashion",
        endpoint: "search/Fashion",
      },
      icon: <FiShoppingBag />,
    },
    {
      name: "Consumer Electronics",
      page: {
        title: "Electronics",
        endpoint: "search/Electronics",
      },
      icon: <FiSmartphone />,
    },
    {
      name: "Computer & Office",
      page: {
        title: "Computers",
        endpoint: "search/Computers",
      },
      icon: <FiMonitor />,
    },
    {
      name: "Home & Kitchen",
      page: {
        title: "Home",
        endpoint: "search/Home",
      },
      icon: <FiHome />,
    },
    {
      name: "Beauty & Health",
      page: {
        title: "Beauty",
        endpoint: "search/Beauty",
      },
      icon: <FiHeart />,
    },
    {
      name: "Tools & Hardware",
      page: {
        title: "Automotive",
        endpoint: "search/Automotive",
      },
      icon: <FiTool />,
    },
    {
      name: "Toys & Games",
      page: {
        title: "Kids",
        endpoint: "search/Kids",
      },
      icon: <FiGift />,
    },
  ];
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-4 py-3 px-4">
        <div className="shrink-0">
          <h1 className="text-2xl md:text-[30px] font-bold text-black">
            AliExpress
          </h1>
        </div>
        <div className="flex-1 min-w-0 w-full">
          <SearchBar
            setSearchResults={setSearchResults}
          />
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            className="hover:text-red-600 transition"
            title="QR Code"
          >
            <QrCode size={22} />
          </button>
          <button
            type="button"
            title="Ethiopia"
          >
            <img
              src="https://flagcdn.com/w40/et.png"
              alt="Ethiopia"
              className="w-7 h-5 rounded-sm object-cover"
            />
          </button>
          <button
            type="button"
            onClick={onLoginClick}
            className="flex items-center gap-1 hover:text-red-600 transition"
            title="Login"
          >
            <FiUser size={20} />
            {loggedInUser && (
              <span className="text-xs font-medium">
                {loggedInUser.name}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onCartClick}
            className="relative hover:text-red-600 transition"
            title="Shopping Cart"
        >
            <FiShoppingCart size={22} />
            {cartItems && cartItems.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce(
                  (total, item) =>
                    total + (item.quantity || 1),
                  0
                )}
              </span>
            )}
          </button>
        </div>
      </div>
<nav className="border-t border-gray-100">
  <div className="w-full flex items-center justify-between py-3 px-4 md:px-6">
    <button
      type="button"
      onClick={() => setShowMobileMenu(!showMobileMenu)}
      className="md:hidden bg-gray-100 px-4 h-10 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
      <span className="text-lg">☰</span>
      <span>Menu</span>
    </button>
    <div className="hidden md:flex items-center gap-4 text-sm font-medium">
      <div className="relative">
        <button
          type="button"
          onClick={() =>
            setShowCategories(!showCategories)
          }
          className="bg-gray-100 text-black px-5 h-10 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
          <span className="text-lg">
            ☰
          </span>
          <span>
            All Categories
          </span>
        </button>
        {showCategories && (
          <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999]">
            <ul className="py-2">
              {categories.map((category) => (
                <li
                  key={category.name}
                  onClick={() =>
                    openPage(category.page)
                  }
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 cursor-pointer transition">
                  <span className="text-lg">
                    {category.icon}
                  </span>
                  <span>
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() =>
          openPage({
            title: "Choice",
            endpoint: "choice",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        Choice
      </button>
      <button
        type="button"
        onClick={() =>
          openPage({
            title: "Super Deals",
            endpoint: "super-deals",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        Super Deals
      </button>
      <button
        type="button"
        onClick={() =>
          openPage({
            title: "Automotive",
            endpoint: "search/Automotive",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        Automotive
      </button>
      <button
        type="button"
        onClick={() =>
          openPage({
            title: "Kitchen",
            endpoint: "search/Kitchen",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        Appliances
      </button>
      <button
        type="button"
        onClick={() =>
          openPage({
            title: "Trending",
            endpoint: "trending",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        Trending
      </button>
  <button
        type="button"
        onClick={() =>
          openPage({
            title: "More to Love",
            endpoint: "all",
          })
        }
        className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition">
        More
      </button>
    </div>
  </div>
  {showMobileMenu && (
    <div className="md:hidden border-t border-gray-100 px-4 pb-4">
      <div className="flex flex-col gap-1 pt-3">
        <button
          type="button"
          onClick={() =>
            setShowCategories(!showCategories)
          }
          className="text-left px-4 py-3 rounded-md bg-gray-100 font-medium">
          ☰ All Categories
        </button>
        {showCategories && (
          <div className="bg-white border rounded-lg">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  openPage(category.page)
                }
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100">
                <span className="text-lg">
                  {category.icon}
                </span>
                <span>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() =>
            openPage({
              title: "Choice",
              endpoint: "choice",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100">
          Choice
        </button>
        <button
          type="button"
          onClick={() =>
            openPage({
              title: "Super Deals",
              endpoint: "super-deals",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100">
          Super Deals
        </button>
        <button
          type="button"
          onClick={() =>
            openPage({
              title: "Automotive",
              endpoint: "search/Automotive",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100">
          Automotive
        </button>
  <button
          type="button"
          onClick={() =>
            openPage({
              title: "Kitchen",
              endpoint: "search/Kitchen",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100">
          Appliances
        </button>
        <button
          type="button"
          onClick={() =>
            openPage({
              title: "Trending",
              endpoint: "trending",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100">
          Trending
        </button>
        <button
          type="button"
          onClick={() =>
            openPage({
              title: "More to Love",
              endpoint: "all",
            })
          }
          className="text-left px-4 py-3 rounded-md hover:bg-gray-100"
        >
      More
  </button>
</div>
</div>
  )}
</nav>
    </header>
  );
}
export default Header;