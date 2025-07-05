import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Star, Truck, Shield, Headphones, RotateCcw, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Yam & Potato',
    'Rice & Grains',
    'Beans & Legumes',
    'Fruits & Vegetables',
    'Spices & Herbs',
    'Nuts & Seeds',
    'Oils & Fats',
    'Meat & Poultry',
    'Fish & Seafood',
    'Dairy & Eggs',
    'Beverages',
    'Processed Foods',
    'View all Categories'
  ];

  const productCategories = ['Cameras', 'Laptops', 'Tablets', 'Mouse'];

  const products = [
    {
      id: 1,
      name: 'This is where the title of commerce product displays',
      price: '₦ 18,000',
      rating: 4.5,
      reviews: 1398,
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'This is where the title of commerce product displays',
      price: '₦ 14,000',
      rating: 4.5,
      reviews: 1398,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'This is where the title of commerce product displays',
      price: '₦ 12,000',
      rating: 4.5,
      reviews: 1398,
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 4,
      name: 'This is where the title of commerce product displays',
      price: '₦ 18,000',
      rating: 4.5,
      reviews: 1398,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 5,
      name: 'This is where the title of commerce product displays',
      price: '₦ 42,000',
      rating: 4.5,
      reviews: 1398,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: 'Fast Shipping',
      description: 'Free shipping on your order'
    },
    {
      icon: <Headphones className="w-6 h-6 text-green-600" />,
      title: 'Customer Support 24/7',
      description: 'Instant access to Support'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: '100% Secure Payment',
      description: 'We ensure your money is save'
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-green-600" />,
      title: 'Money-Back Guarantee',
      description: '30 days money-back guarantee'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <button 
                onClick={() => navigate('/cart')}
                className="flex items-center space-x-2 relative"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Cart</span>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="max-w-md">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Food trading that works
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Finely processed farm products, safe government and secured investment platform.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="w-32 h-32 bg-blue-200 rounded-lg"></div>
                  <div className="space-y-4">
                    <div className="w-24 h-16 bg-orange-200 rounded-lg"></div>
                    <div className="w-24 h-16 bg-green-200 rounded-lg"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-24 h-16 bg-purple-200 rounded-lg"></div>
                    <div className="w-24 h-16 bg-yellow-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border">
                  {feature.icon}
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Products */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular products</h2>
                <div className="flex space-x-2">
                  {productCategories.map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                        <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summer Sale Banner */}
            <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-400 mb-2">SUMMER SALE</div>
                  <h2 className="text-4xl font-bold mb-4">37% OFF</h2>
                  <p className="text-gray-300 mb-6">
                    Free on all your order, free shipping and 30 days money-back guarantee
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="w-64 h-48 bg-green-600/20 rounded-lg"></div>
              </div>
            </div>

            {/* Second Popular Products Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular products</h2>
                <div className="flex space-x-2">
                  {productCategories.map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-6">
                {products.map((product) => (
                  <div key={`second-${product.id}`} className="bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                        <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="bg-white rounded-2xl p-8 border">
              <div className="flex items-center justify-between">
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    We Delivered, You Enjoy Your Order.
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Ut tempor ligula quis, placerat odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur, ex quis accumsan rhoncus. Curabitur ipsum lorem, cursus sit amet.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Sed in metus pellentesque.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Maecenas ut nunc fringilla erat varius.</span>
                    </li>
                  </ul>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="w-80 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4"></div>
                    <div className="w-32 h-8 bg-blue-500 rounded-lg"></div>
                  </div>
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
              <ul className="space-y-2 text-sm text-gray-600">
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
              <ul className="space-y-2 text-sm text-gray-600">
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
              <ul className="space-y-2 text-sm text-gray-600">
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

export default HomePage;