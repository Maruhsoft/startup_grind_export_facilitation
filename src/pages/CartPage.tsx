import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Minus, Plus, Shield } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Medix 5.5 Vitamin C + Turmeric Firming + Brightening Cream 444ml',
      price: 18000,
      originalPrice: 36000,
      quantity: 2,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: 2,
      name: 'Brow and Lash Booster',
      price: 18000,
      originalPrice: 20000,
      quantity: 1,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);

  const formatPrice = (price: number) => {
    return `₦ ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-green-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+234 808 7865 765</span>
          </div>
          <span>Get 50% off on selected item</span>
          <div></div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌿</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Oasis.</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="I am looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Account</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <button className="flex items-center space-x-2 relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Cart</span>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <span className="italic">Skin Care</span> / <span className="italic">Facials</span> / <span>Name of facial product here</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
                  <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    Clear
                  </button>
                </div>
                <p className="text-gray-600 mt-1">There are {totalItems} items in your cart</p>
              </div>

              {/* Cart Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 uppercase">
                  <div className="col-span-6">PRODUCT</div>
                  <div className="col-span-2 text-center">QUANTITY</div>
                  <div className="col-span-2 text-center">TOTAL PRICE</div>
                  <div className="col-span-2"></div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="col-span-6 flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                          <p className="text-xs text-gray-400 line-through">{formatPrice(item.originalPrice)}</p>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex items-center justify-center">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 text-center min-w-[3rem]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="col-span-2 text-center">
                        <p className="font-semibold text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                      </div>

                      {/* Remove Button */}
                      <div className="col-span-2 text-right">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Secure Shopping Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Item:</span>
                  <span className="font-medium">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-green-600">{formatPrice(discount)} (10%)</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Sub total:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4">
                Message Seller
              </button>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Buyer Protection</h3>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    For issues regarding non satisfaction of your purchase and refunds. Click here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🌿</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Oasis.</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur. Rhoncus quis magna fringilla nunc vitae porta nullam suspendisse cum. Velit tristique quisque tempus mi nisl egestas felis sed rhoncus.
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Accepted Payments</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-6 bg-orange-500 rounded"></div>
                  <div className="w-8 h-6 bg-blue-600 rounded"></div>
                  <div className="w-8 h-6 bg-gray-700 rounded"></div>
                  <div className="w-8 h-6 bg-purple-600 rounded"></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-32 h-10 bg-gray-900 rounded"></div>
                <div className="w-32 h-10 bg-gray-900 rounded"></div>
              </div>
            </div>

            {/* Find Product */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Find product</h4>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>Brownze arnold</li>
                <li>Chronograph blue</li>
                <li>Smart phones</li>
                <li>Automatic watch</li>
                <li>Hair straighteners</li>
              </ul>
            </div>

            {/* Get Help */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Get help</h4>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>About us</li>
                <li>Contact us</li>
                <li>Return policy</li>
                <li>Privacy policy</li>
                <li>Payment policy</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">About us</h4>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>News</li>
                <li>Service</li>
                <li>Our policy</li>
                <li>Customer care</li>
                <li>Faq's</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;