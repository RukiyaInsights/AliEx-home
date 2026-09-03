import { useState, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderTracking from "./components/OrderTracking";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import FlashDeals from "./components/FlashDeals";
import SuperDeals from "./components/SuperDeals";
import NewArrivals from "./components/NewArrivals";
import ChoiceProducts from "./components/ChoiceProducts";
import Trending from "./components/Trending";
import FeaturedCategories from "./components/FeaturedCategories";
import CategoryPage from "./components/CategoryPage";
import MarketplacePage from "./components/MarketplacePage";
import { FiTruck } from "react-icons/fi";
function App() {
  const [searchResults, setSearchResults] = useState(null);
  const handleSearchResults = (results) => {
    setSearchResults(results);
    setActivePage(null);
    setSelectedCategory(null);
    setSelectedProductId(null);
  };
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [trackingOrderId, setTrackingOrderId] = useState(null);
  const [completedOrder, setCompletedOrder] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [
    showLogin,
    showRegister,
    showCheckout,
    selectedProductId,
    selectedCategory,
    activePage,
    trackingOrderId,
    completedOrder,
  ]);
  const handleProductClick = (product) => {
    if (!product) return;
    const productId =
      typeof product === "object"
        ? product.id
        : product;
    setSelectedProductId(productId);
    setSelectedCategory(null);
    setActivePage(null);
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setCompletedOrder(null);
    setTrackingOrderId(null);
  };
  const addToCart = (product) => {
    if (!product) return;
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );
 if (existingItem) {
   return currentItems.map((item) =>
    item.id === product.id
       ? {
            ...item,
         quantity: item.quantity + 1,
         }
         : item
        );
      }
return [
    ...currentItems,
        {
      ...product,
      quantity: 1,
        },
      ];
    });
    setShowCart(true);
  };
const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };
  const changeQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
setCartItems((currentItems) =>
  currentItems.map((item) =>
    item.id === productId
          ? {
          ...item,
           quantity,
            }
          : item
      )
    );
  };
  const handleOrderPlaced = (order) => {
    setCompletedOrder(order);
    setCartItems([]);
    setShowCheckout(false);
    setShowCart(false);
    setSelectedProductId(null);
    setSelectedCategory(null);
    setActivePage(null);
    setTrackingOrderId(null);
  };
  const handleContinueShopping = () => {
    setCompletedOrder(null);
    setTrackingOrderId(null);
    setSearchResults(null);
    setSelectedProductId(null);
    setSelectedCategory(null);
    setActivePage(null);
    setShowLogin(false);
    setShowRegister(false);
  };
  const handleTrackOrder = () => {
    if (completedOrder) {
      setTrackingOrderId(completedOrder.id);
    }
  };
  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowCart(false);
    setShowCheckout(false);
    setSelectedProductId(null);
    setSelectedCategory(null);
    setActivePage(null);
    setCompletedOrder(null);
    setTrackingOrderId(null);
  };
  const handleLogin = (user) => {
    setLoggedInUser(user);
    setShowLogin(false);
    setShowRegister(false);
  };
  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  const handleBackFromLogin = () => {
    setShowLogin(false);
    setShowRegister(false);
  };
  const handleBackFromRegister = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProductId(null);
    setActivePage(null);
    setSearchResults(null);
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setCompletedOrder(null);
    setTrackingOrderId(null);
  };
  const handlePageChange = (page) => {
    setActivePage(page);
    setSelectedCategory(null);
    setSelectedProductId(null);
    setSearchResults(null);
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setCompletedOrder(null);
    setTrackingOrderId(null);
  };
  const isHomePage =
    !showLogin &&
    !showRegister &&
    !showCheckout &&
    !selectedProductId &&
    !selectedCategory &&
    !activePage &&
    !trackingOrderId &&
    !completedOrder;
  return (
    <>
  <Header
        setSearchResults={handleSearchResults}
        cartItems={cartItems}
        onCartClick={() => setShowCart(true)}
        onLoginClick={handleLoginClick}
        loggedInUser={loggedInUser}
        onPageChange={handlePageChange}
      />
{activePage && (
  <MarketplacePage
    title={activePage.title}
    endpoint={activePage.endpoint}
    onBack={() => setActivePage(null)}
    onProductClick={handleProductClick}
    onAddToCart={addToCart}
        />
      )}
{isHomePage && (
        <>
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
  <FlashDeals
      onProductClick={handleProductClick}
      onAddToCart={addToCart}
          />
  <SuperDeals
        onProductClick={handleProductClick}
        onAddToCart={addToCart}
          />
     <ChoiceProducts
        onProductClick={handleProductClick}
        onAddToCart={addToCart}
          />
    <FeaturedCategories
       onCategoryClick={handleCategoryClick}
        />
    <Trending
      onProductClick={handleProductClick}
      onAddToCart={addToCart}
        />
  <NewArrivals
      onProductClick={handleProductClick}
      onAddToCart={addToCart}
      />
<Products
  searchResults={searchResults}
  onProductClick={handleProductClick}
  onAddToCart={addToCart}
    />
      <Footer />
      <SideBar
    onCartClick={() => setShowCart(true)}
        />
        </>
      )}
{showLogin && (
    <Login
      onLogin={handleLogin}
      onRegisterClick={handleRegisterClick}
      onBack={handleBackFromLogin}
      />
      )}
{showRegister && (
  <Register
    onRegister={(user) => {
    setLoggedInUser(user);
    setShowRegister(false);
    setShowLogin(false);
      }}
    onBack={handleBackFromRegister}
       />
      )}
{trackingOrderId && (
    <OrderTracking
     orderId={trackingOrderId}
     onBack={() => setTrackingOrderId(null)}
       />
      )}
{completedOrder && (
    <OrderConfirmation
      order={completedOrder}
      onContinueShopping={handleContinueShopping}
      onTrackOrder={handleTrackOrder}
      />
      )}
{showCheckout && (
    <Checkout
      cartItems={cartItems}
      onBack={() => setShowCheckout(false)}
      onOrderPlaced={handleOrderPlaced}
      />
      )}
{selectedProductId && (
  <ProductDetails
    productId={selectedProductId}
    onBack={() => setSelectedProductId(null)}
    onAddToCart={addToCart}
      />
      )}
{selectedCategory && (
    <CategoryPage
    category={selectedCategory}
    onBack={() => setSelectedCategory(null)}
    onProductClick={handleProductClick}
    onAddToCart={addToCart}
     />
      )}
{showCart && (
  <Cart
    cartItems={cartItems}
    onClose={() => setShowCart(false)}
    onRemove={removeFromCart}
    onQuantityChange={changeQuantity}
    onCheckout={() => {
    setShowCart(false);
    setShowCheckout(true);
      }}
   />
    )}
  </>
  );
}
export default App;