import {
  FiChevronUp,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
function Footer() {
  return (
<footer className="bg-white mt-16">
<div className="max-w-[1400px] mx-auto px-6 py-12">
<h2 className="text-[28px] font-bold text-gray-900 mb-6">
  AliExpress: Your Best Choice for Online Shopping
</h2>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
 What is AliExpress?
</h3>
 <p className="text-gray-600 text-[14px] leading-8 mb-10">
  AliExpress is one of the world's largest online shopping marketplaces,
  connecting millions of customers with trusted international suppliers.
  Whether you're searching for electronics, fashion, beauty products,
  home essentials, automotive accessories, toys, sports equipment,
  jewelry or lifestyle products, AliExpress offers an incredible variety
  of affordable items delivered to customers around the globe. Secure
  payments, worldwide shipping, daily discounts, Choice products,
  flash deals and buyer protection help create a safe and enjoyable
  shopping experience for everyone.
  </p>
<div className=" pt-8">
<h3 className="font-semibold text-gray-900 mb-4">
  Popular Searches
</h3>
<div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-500 leading-7">
<span className="hover:text-red-600 cursor-pointer">wireless earbuds</span>|
<span className="hover:text-red-600 cursor-pointer">smart watch</span>|
<span className="hover:text-red-600 cursor-pointer">gaming mouse</span>|
<span className="hover:text-red-600 cursor-pointer">mechanical keyboard</span>|
<span className="hover:text-red-600 cursor-pointer">lipstick</span>|
<span className="hover:text-red-600 cursor-pointer">beauty serum</span>|
<span className="hover:text-red-600 cursor-pointer">summer dress</span>|
<span className="hover:text-red-600 cursor-pointer">handbag</span>|
<span className="hover:text-red-600 cursor-pointer">hoodie</span>|
<span className="hover:text-red-600 cursor-pointer">sneakers</span>|
<span className="hover:text-red-600 cursor-pointer">air fryer</span>|
<span className="hover:text-red-600 cursor-pointer">table lamp</span>|
<span className="hover:text-red-600 cursor-pointer">office chair</span>|
<span className="hover:text-red-600 cursor-pointer">phone holder</span>|
<span className="hover:text-red-600 cursor-pointer">yoga mat</span>|
<span className="hover:text-red-600 cursor-pointer">pet supplies</span>|
<span className="hover:text-red-600 cursor-pointer">electronics</span>|
<span className="hover:text-red-600 cursor-pointer">fashion</span>|
<span className="hover:text-red-600 cursor-pointer">beauty</span>|
<span className="hover:text-red-600 cursor-pointer">home decor</span>|
<span className="hover:text-red-600 cursor-pointer">computer accessories</span>|
</div>
</div>
</div>
<div className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-5 gap-10">
<div>
<h3 className="font-bold text-gray-900 mb-4">
Customer service
</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li className="hover:text-red-600 cursor-pointer">Help Center</li>
<li className="hover:text-red-600 cursor-pointer">Transaction Services</li>
<li className="hover:text-red-600 cursor-pointer">Terms & Conditions</li>
<li className="hover:text-red-600 cursor-pointer">Returns & Refunds</li>
<li className="hover:text-red-600 cursor-pointer">Take our feedback survey</li>
 </ul>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4">
 Shopping with us
</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li className="hover:text-red-600 cursor-pointer">Making payments</li>
<li className="hover:text-red-600 cursor-pointer">Delivery options</li>
<li className="hover:text-red-600 cursor-pointer">Buyer Protection</li>
<li className="hover:text-red-600 cursor-pointer">Gift Cards</li>
<li className="hover:text-red-600 cursor-pointer">AliExpress Choice</li>
</ul>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4">
 Collaborate with us
</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li className="hover:text-red-600 cursor-pointer">Partnerships</li>
<li className="hover:text-red-600 cursor-pointer">Affiliate Program</li>
<li className="hover:text-red-600 cursor-pointer">DS Center</li>
<li className="hover:text-red-600 cursor-pointer">Seller Login</li>
<li className="hover:text-red-600 cursor-pointer">Become a Supplier</li>
</ul>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4">
Follow us
</h3>
<div className="flex gap-4 text-2xl text-gray-500">
<FiFacebook className="cursor-pointer hover:text-blue-600" />
<FiInstagram className="cursor-pointer hover:text-pink-600" />
<FiTwitter className="cursor-pointer hover:text-sky-500" />
</div>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4">
Pay with
</h3>
<div className="flex flex-wrap gap-2">
<img
src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
className="h-7"
/>
<img
src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
className="h-7"
/>
<img
src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
className="h-7"
/>
</div>
</div>
</div>
</div>     
<div className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<p className="text-sm text-gray-500">
 © 2026 AliExpress Clone • Built with React & Tailwind CSS
</p>
<button
  onClick={() =>
  window.scrollTo({
  top: 0,
behavior: "smooth",
})
}
 className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition">
<FiChevronUp />
Back to top
</button>
</div>
</div>
</footer>
);
}
export default Footer;