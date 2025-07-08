import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Send, MoreHorizontal, Smile } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  isOwn: boolean;
}

interface Contact {
  id: number;
  name: string;
  company: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isOnline: boolean;
}

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'David Azeribie',
      company: 'Chiamaka & Co ltd',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'You: Sure thing, I\'ll have a look today. They\'re looking great!',
      time: '1hr ago',
      isOnline: false
    },
    {
      id: 2,
      name: 'Chiamaka Okolo',
      company: 'Chiamaka & Co ltd',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'at Jiji',
      time: '',
      isOnline: true
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'David Azeribie',
      content: 'You: Sure thing, I\'ll have a look today. They\'re looking great!',
      time: '1hr ago',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thanks Olivia! Almost there. I\'ll work on making those changes you suggested and will shoot it over.',
      time: 'Today 2:20pm',
      isOwn: true
    }
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

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add message logic here
      setMessageInput('');
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
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex h-[600px]">
              {/* Messages Sidebar */}
              <div className="w-1/3 border-r border-gray-200">
                {/* Messages Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                      Proceed to checkout
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet consectetur. Laoreet amet nunc dign...
                  </p>
                  
                  {/* Search */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Contacts List */}
                <div className="overflow-y-auto">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                        selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                            <img
                              src={contact.avatar}
                              alt={contact.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {contact.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                            {contact.time && (
                              <span className="text-xs text-gray-500">{contact.time}</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 truncate">{contact.company}</p>
                          <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {selectedContact ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                              <img
                                src={selectedContact.avatar}
                                alt={selectedContact.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {selectedContact.isOnline && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{selectedContact.name}</h3>
                            <p className="text-sm text-gray-600">
                              {selectedContact.isOnline ? 'Online' : selectedContact.company}
                            </p>
                          </div>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                          Proceed to checkout
                        </button>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.isOwn
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-100 text-gray-900'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Today marker */}
                      <div className="text-center my-4">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Send a message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Smile className="w-5 h-5" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={handleSendMessage}
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                        >
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                  </div>
                )}
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

export default MessagesPage;