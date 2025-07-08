import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Star, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const ProductOverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Vegetables');
  const [sortBy, setSortBy] = useState('Most Purchased');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [availability, setAvailability] = useState('In Stock');

  const categories = [
    'Fresh Fruit',
    'Vegetables',
    'Meat & Seafood',
    'Chicken & Meat',
    'Drink & Water',
    'Yogurt & Ice Cream',
    'Cake & Bread',
    'Butter & Cream',
    'Cooking'
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    },
    {
      id: 2,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    },
    {
      id: 3,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    },
    {
      id: 4,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    },
    {
      id: 5,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    },
    {
      id: 6,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      category: 'Vegetables'
    }
  ];

  const formatPrice = (price: number) => {
    return `₦ ${price.toLocaleString()}`;
  };

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

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-orange-500 border-4 border-orange-500 px-4 py-2 rounded-full">Products</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-lg border p-4 mb-6">
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
                <li>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                    View all Category
                  </button>
                </li>
              </ul>
            </div>

            {/* Availability Filter */}
            <div className="bg-white rounded-lg border p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="In Stock"
                    checked={availability === 'In Stock'}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">In Stock</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="Out of Stock"
                    checked={availability === 'Out of Stock'}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Out of Stock</span>
                </label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg border p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Price</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">₦</span>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="0"
                  />
                  <span className="text-sm text-gray-600">to</span>
                  <span className="text-sm text-gray-600">₦</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="50,000"
                  />
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-md text-sm hover:bg-green-700">
                  Apply
                </button>
              </div>
            </div>

            {/* Product Rating Filter */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Product Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({rating === 5 ? '45' : rating === 4 ? '40' : rating === 3 ? '40' : rating === 2 ? '40' : '20'})</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Available Products</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  >
                    <option>Most Purchased</option>
                    <option>Popularity</option>
                    <option>Price: Low High</option>
                    <option>Price: High to Low</option>
                    <option>Product Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-4 gap-6">
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
                    <p className="text-xs text-gray-500 mb-1">Red Wine Alternative</p>
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
                      <span className="text-xs text-gray-600">4.5 ({product.reviews} Reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{formatPrice(product.price)}</span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="text-xs bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                        >
                          Add to Cart
                        </button>
                        <button className="text-xs border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              <ul className="space-y-2 text-sm text-green-600">
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
              <ul className="space-y-2 text-sm text-green-600">
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
              <ul className="space-y-2 text-sm text-green-600">
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

export default ProductOverviewPage;