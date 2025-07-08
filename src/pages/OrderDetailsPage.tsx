import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Check } from 'lucide-react';

const OrderDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [searchQuery, setSearchQuery] = React.useState('');

  const orderDetails = {
    id: '#4152',
    date: 'April 24, 2021',
    productCount: 3,
    status: 'Processing',
    billingAddress: {
      name: 'Maxwell John Doe',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      email: 'johndoem@gmail.com',
      phone: '(671) 555-0110'
    },
    shippingAddress: {
      name: 'Maxwell John Doe',
      address: '447 Stroman Rue, Maitama, Federal Capital Territory, Municipal Area Council, Nigeria',
      email: 'johndoem@gmail.com',
      phone: '(671) 555-0110'
    },
    paymentMethod: 'Paypal',
    subtotal: 365.00,
    discount: 20,
    shipping: 'Free',
    total: 84.00,
    products: [
      {
        id: 1,
        name: 'Red Capsicum',
        price: 14.00,
        quantity: 5,
        subtotal: 70.00,
        image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      {
        id: 2,
        name: 'Green Capsicum',
        price: 14.00,
        quantity: 2,
        subtotal: 28.00,
        image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      {
        id: 3,
        name: 'Green Chili',
        price: 26.70,
        quantity: 10,
        subtotal: 267.00,
        image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      }
    ]
  };

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

  const orderSteps = [
    { id: 1, title: 'Order received', completed: true, current: false },
    { id: 2, title: 'Processing', completed: true, current: true },
    { id: 3, title: 'On the way', completed: false, current: false },
    { id: 4, title: 'Delivered', completed: false, current: false }
  ];

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

          {/* Order Details Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{orderDetails.date}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{orderDetails.productCount} Products</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/account')}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Back to List
                </button>
              </div>

              {/* Address Information */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">BILLING ADDRESS</h3>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">{orderDetails.billingAddress.name}</p>
                    <p className="text-gray-600">{orderDetails.billingAddress.address}</p>
                    <p className="text-gray-600">EMAIL: {orderDetails.billingAddress.email}</p>
                    <p className="text-gray-600">PHONE: {orderDetails.billingAddress.phone}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">SHIPPING ADDRESS</h3>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">{orderDetails.shippingAddress.name}</p>
                    <p className="text-gray-600">{orderDetails.shippingAddress.address}</p>
                    <p className="text-gray-600">EMAIL: {orderDetails.shippingAddress.email}</p>
                    <p className="text-gray-600">PHONE: {orderDetails.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">ORDER ID</h3>
                  <p className="font-semibold text-gray-900">{orderDetails.id}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">PAYMENT METHOD</h3>
                  <p className="font-semibold text-gray-900">{orderDetails.paymentMethod}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8 text-right">
                <div>
                  <p className="text-sm text-gray-600">Subtotal:</p>
                  <p className="font-semibold">${orderDetails.subtotal.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Discount:</p>
                  <p className="font-semibold">{orderDetails.discount}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Shipping:</p>
                  <p className="font-semibold">{orderDetails.shipping}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total:</p>
                  <p className="text-xl font-bold text-gray-900">${orderDetails.total.toFixed(2)}</p>
                </div>
              </div>

              {/* Order Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between relative">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200"></div>
                  <div className="absolute top-5 left-0 h-0.5 bg-green-500" style={{ width: '50%' }}></div>
                  
                  {orderSteps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center relative z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        step.completed 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : step.current
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-white border-gray-300 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-medium">{step.id.toString().padStart(2, '0')}</span>
                        )}
                      </div>
                      <p className={`mt-2 text-sm font-medium ${
                        step.completed || step.current ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">PRODUCT</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">PRICE</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">QUANTITY</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="font-medium text-gray-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-900">${product.price.toFixed(2)}</td>
                        <td className="py-4 px-4 text-gray-900">x{product.quantity}</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">${product.subtotal.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default OrderDetailsPage;