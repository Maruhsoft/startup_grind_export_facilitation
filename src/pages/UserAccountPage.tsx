import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Eye, EyeOff } from 'lucide-react';

const UserAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('My Account');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountData, setAccountData] = useState({
    firstName: 'Maxwell',
    lastName: 'John Doe',
    email: 'johndoem@gmail.com',
    phone: '(603) 555-0123',
    billingFirstName: 'Maxwell',
    billingLastName: 'John Doe',
    billingAddress: '447 Stroman Rue, Maitama, Federal Capital Territory, Municipal Area Council, Nigeria',
    billingCountry: 'United States',
    billingState: 'Washington DC',
    billingZip: '20033',
    billingEmail: 'dianne.russell@gmail.com',
    billingPhone: '(603) 555-0123',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const orderHistory = [
    { id: '#738', date: '8 Sep, 2020', total: '₦135.00 (5 Products)', status: 'Processing' },
    { id: '#703', date: '24 May, 2020', total: '₦25.00 (1 Product)', status: 'on the way' },
    { id: '#130', date: '22 Oct, 2020', total: '₦250.00 (4 Products)', status: 'Completed' },
    { id: '#561', date: '1 Feb, 2020', total: '₦35.00 (1 Products)', status: 'Completed' },
    { id: '#536', date: '21 Sep, 2020', total: '₦578.00 (13 Products)', status: 'Completed' },
    { id: '#492', date: '22 Oct, 2020', total: '₦345.00 (7 Products)', status: 'Completed' }
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

  const handleInputChange = (field: string, value: string) => {
    setAccountData(prev => ({ ...prev, [field]: value }));
  };

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
                    onClick={() => setActiveSection(item)}
                    onClick={() => {
                      if (item === 'Orders') {
                        navigate('/orders');
                      } else {
                        setActiveSection(item);
                      }
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === item
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

          {/* Main Content Area */}
          <div className="flex-1">
            {activeSection === 'My Account' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">My Account</h1>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {/* Account Info */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">ACCOUNT INFO</h2>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Maxwell John Doe</h3>
                        <p className="text-sm text-gray-600">Abuja, Nigeria</p>
                        <p className="text-sm text-gray-600">Email: johndoem@gmail.com</p>
                        <p className="text-sm text-gray-600">Phone: +1-202-555-0118</p>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">BILLING ADDRESS</h2>
                    <div>
                      <h3 className="font-semibold text-gray-900">Kevin Gilbert</h3>
                      <p className="text-sm text-gray-600">447 Stroman Rue, Maitama, Federal Capital Territory, Municipal Area Council, Nigeria</p>
                      <p className="text-sm text-gray-600">Email: kevin.gilbert@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">154</div>
                    <div className="text-sm text-gray-600">Total Orders</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-orange-600 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">05</div>
                    <div className="text-sm text-gray-600">Pending Orders</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-green-600 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">149</div>
                    <div className="text-sm text-gray-600">Completed Orders</div>
                  </div>
                </div>

                {/* Wallet Balance */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">My Wallet Balance</h3>
                  <div className="text-2xl font-bold text-gray-900">₦ 9,000</div>
                </div>

                {/* Recent Order History */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Order History</h2>
                    <button className="text-green-600 hover:text-green-700 font-medium">View All</button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 text-sm font-medium text-gray-600">ORDER ID</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-600">DATE</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-600">TOTAL</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-600">STATUS</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-600"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderHistory.map((order) => (
                          <tr key={order.id} className="border-b border-gray-100">
                            <td className="py-4 text-sm text-gray-900">{order.id}</td>
                            <td className="py-4 text-sm text-gray-600">{order.date}</td>
                            <td className="py-4 text-sm text-gray-900">{order.total}</td>
                            <td className="py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4">
                              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
                <p className="text-gray-600 mb-8">Update your profile information</p>

                {/* Account Settings */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h2>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                        <input
                          type="text"
                          value={accountData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={accountData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={accountData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={accountData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mb-4">
                        <img
                          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Choose Image
                      </button>
                    </div>
                  </div>
                  <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Save Changes
                  </button>
                </div>

                {/* Billing Address */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing Address</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                      <input
                        type="text"
                        value={accountData.billingFirstName}
                        onChange={(e) => handleInputChange('billingFirstName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                      <input
                        type="text"
                        value={accountData.billingLastName}
                        onChange={(e) => handleInputChange('billingLastName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={accountData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country / Region</label>
                      <select
                        value={accountData.billingCountry}
                        onChange={(e) => handleInputChange('billingCountry', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option>United States</option>
                        <option>Nigeria</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">States</label>
                      <select
                        value={accountData.billingState}
                        onChange={(e) => handleInputChange('billingState', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option>Washington DC</option>
                        <option>California</option>
                        <option>New York</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input
                        type="text"
                        value={accountData.billingZip}
                        onChange={(e) => handleInputChange('billingZip', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={accountData.billingEmail}
                        onChange={(e) => handleInputChange('billingEmail', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={accountData.billingPhone}
                        onChange={(e) => handleInputChange('billingPhone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Save Changes
                  </button>
                </div>

                {/* Change Password */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h2>
                  <div className="max-w-md space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={accountData.currentPassword}
                          onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                          placeholder="Password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showCurrentPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={accountData.newPassword}
                            onChange={(e) => handleInputChange('newPassword', e.target.value)}
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showNewPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={accountData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Other sections can be implemented similarly */}
            {activeSection !== 'My Account' && activeSection !== 'Profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{activeSection}</h1>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            )}
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

export default UserAccountPage;