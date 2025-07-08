import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
}

const OrderHistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const orders: Order[] = [
    { id: '#3933', date: '4 April, 2021', total: '$135.00 (5 Products)', status: 'Processing' },
    { id: '#5045', date: '27 Mar, 2021', total: '$25.00 (1 Product)', status: 'on the way' },
    { id: '#5028', date: '20 Mar, 2021', total: '$250.00 (4 Products)', status: 'Completed' },
    { id: '#4600', date: '19 Mar, 2021', total: '$35.00 (1 Products)', status: 'Completed' },
    { id: '#4152', date: '18 Mar, 2021', total: '$578.00 (13 Products)', status: 'Completed' },
    { id: '#8811', date: '10 Mar, 2021', total: '$345.00 (7 Products)', status: 'Completed' },
    { id: '#3536', date: '5 Mar, 2021', total: '$560.00 (2 Products)', status: 'Completed' },
    { id: '#1374', date: '27 Feb, 2021', total: '$560.00 (2 Products)', status: 'Completed' },
    { id: '#7791', date: '25 Feb, 2021', total: '$560.00 (2 Products)', status: 'Completed' },
    { id: '#4846', date: '24 Feb, 2021', total: '$23.00 (1 Products)', status: 'Completed' },
    { id: '#5948', date: '20 Feb, 2021', total: '$23.00 (1 Products)', status: 'Completed' },
    { id: '#1577', date: '12 Oct, 2020', total: '$23.00 (1 Products)', status: 'Completed' }
  ];

  const sidebarItems = [
    'My Account',
    'Profile',
    'Orders',
    'Wallet',
    'Transaction History',
    'Saved Items',
    'Address Book',
    'Help',
    'Logout'
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'text-orange-600 bg-orange-100';
      case 'on the way':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* User Profile */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Maxwell John Doe</h3>
                  <p className="text-sm text-gray-600">johndoem@gmail.com</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      item === 'Orders'
                        ? 'bg-green-100 text-green-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Order History Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">My Account</h1>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order History</h2>
              </div>

              {/* Orders Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ORDER ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">DATE</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">TOTAL</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">STATUS</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">{order.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{order.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{order.total}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button 
                            onClick={() => navigate(`/order-details/${order.id.replace('#', '')}`)}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 mt-8">
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-3 py-2 rounded-lg bg-green-600 text-white font-medium">
                  1
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  3
                </button>
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
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

export default OrderHistoryPage;