import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Star } from 'lucide-react';

const VendorProfileViewPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const vendorInfo = {
    name: 'Chiamaka Okolo',
    location: 'Abuja, Nigeria',
    email: 'johndoem@gmail.com',
    phone: '+1-202-555-0118',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  };

  const products = [
    {
      id: 1,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 4,
      name: 'This is where the title of cosmetics product displays',
      price: 16000,
      rating: 4.5,
      reviews: 240,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4.5,
      date: '04.06.2024',
      title: 'A must-have product',
      comment: 'Empowering health decisions, one capsule at a time! Capsule Insights empowers informed health decisions with concise and reliable information. It\'s a valuable companion for health-conscious individuals.'
    },
    {
      id: 2,
      name: 'John Doe',
      rating: 4.5,
      date: '04.06.2024',
      title: 'A must-have product',
      comment: 'Empowering health decisions, one capsule at a time! Capsule Insights empowers informed health decisions with concise and reliable information. It\'s a valuable companion for health-conscious individuals.'
    },
    {
      id: 3,
      name: 'John Doe',
      rating: 4.5,
      date: '04.06.2024',
      title: 'A must-have product',
      comment: 'Empowering health decisions, one capsule at a time! Capsule Insights empowers informed health decisions with concise and reliable information. It\'s a valuable companion for health-conscious individuals.'
    },
    {
      id: 4,
      name: 'John Doe',
      rating: 4.5,
      date: '04.06.2024',
      title: 'A must-have product',
      comment: 'Empowering health decisions, one capsule at a time! Capsule Insights empowers informed health decisions with concise and reliable information. It\'s a valuable companion for health-conscious individuals.'
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Vendor Profile Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Vendor Profile</h1>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
              <img
                src={vendorInfo.avatar}
                alt={vendorInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{vendorInfo.name}</h2>
              <p className="text-gray-600 mb-2">{vendorInfo.location}</p>
              <p className="text-gray-600 mb-1">Email: {vendorInfo.email}</p>
              <p className="text-gray-600">Phone: {vendorInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* Available Listings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Listings</h2>
          
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">{formatPrice(product.price)}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 text-xs bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                      Add to Cart
                    </button>
                    <button className="flex-1 text-xs border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-50">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews (340)</h2>
          <p className="text-gray-600 mb-8">
            Read Reviews from our satisfied customers. Share your experience with Us by clicking the below button!
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-6xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-2">From all verified purchases</p>
              <p className="text-sm text-gray-500">
                Read Reviews from our satisfied customers. Share your experience with Us by clicking the below button!
              </p>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 w-12">{stars} Stars</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-900 h-2 rounded-full" 
                      style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-4">{stars === 5 ? '5' : stars === 4 ? '2' : stars === 3 ? '1' : stars === 2 ? '0' : '0'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{review.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.rating}</span>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
              See More
            </button>
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

            {/* About Us */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About Korner</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Vision & Mission</li>
                <li>News & Blogs</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Mobile App</li>
                <li>Gift Card</li>
                <li>Coupons</li>
                <li>Shipping & Delivery</li>
                <li>Account Signup</li>
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Quick Link</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorProfileViewPage;