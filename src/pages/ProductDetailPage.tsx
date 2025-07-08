import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, Phone, ShoppingCart, User, ChevronDown, Star, Heart, Share2, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('Description');

  const product = {
    id: 1,
    name: 'Medix 5.5 Vitamin C + Turmeric Firming + Brightening Cream 444ml',
    price: 180000,
    originalPrice: 120000,
    rating: 4.5,
    reviews: 340,
    category: 'FACE CREAM',
    images: [
      'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ],
    variations: [
      { name: 'Red Yam 50g (1 Kg)', price: 180000 },
      { name: 'Sweet Yam 50g (1 Kg)', price: 180000 },
      { name: 'Purple Yam 50g (1 Kg)', price: 180000 },
      { name: 'White Yam 50g (1 Kg)', price: 180000 }
    ],
    sizes: ['10 pieces (1 Kg)', '15 pieces (1.5Kg)', '20 pieces (2Kg)', '30 pieces (3Kg)'],
    description: `Lorem ipsum dolor sit amet consectetur. Rhoncus quis magna fringilla nunc vitae porta nullam suspendisse cum. Velit tristique quisque tempus mi nisl egestas felis sed rhoncus.

🔸 Sed in metus pellentesque.
🔸 Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
🔸 Maecenas ut nunc fringilla erat varius.

🔸 Sed in metus pellentesque.
🔸 Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
🔸 Maecenas ut nunc fringilla erat varius.

🔸 Sed in metus pellentesque.
🔸 Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
🔸 Maecenas ut nunc fringilla erat varius.`
  };

  const relatedProducts = [
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
      date: 'Jan 20, 2024',
      comment: 'A really love product',
      description: 'Exceptionally good electronic. Aut sapiente et quia fugiat maiores nihil facere. Aut molestiae non enim voluptatem et a voluptatem consequatur. Ut molestiae voluptatem et a voluptatem consequatur.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4.5,
      date: 'Jan 18, 2024',
      comment: 'A really love product',
      description: 'Exceptionally good electronic. Aut sapiente et quia fugiat maiores nihil facere. Aut molestiae non enim voluptatem et a voluptatem consequatur. Ut molestiae voluptatem et a voluptatem consequatur.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rating: 4.5,
      date: 'Jan 15, 2024',
      comment: 'A really love product',
      description: 'Exceptionally good electronic. Aut sapiente et quia fugiat maiores nihil facere. Aut molestiae non enim voluptatem et a voluptatem consequatur. Ut molestiae voluptatem et a voluptatem consequatur.'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      rating: 4.5,
      date: 'Jan 12, 2024',
      comment: 'A really love product',
      description: 'Exceptionally good electronic. Aut sapiente et quia fugiat maiores nihil facere. Aut molestiae non enim voluptatem et a voluptatem consequatur. Ut molestiae voluptatem et a voluptatem consequatur.'
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <span className="italic">Skin Care</span> / <span className="italic">Facials</span> / <span>Name of facial product here</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-green-600 font-medium mb-2">{product.category}</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews})</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              <span className="text-xl text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            </div>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus quis magna fringilla nunc vitae porta nullam suspendisse cum. Velit tristique quisque tempus mi nisl egestas felis sed rhoncus.
            </p>

            {/* Variations */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Variation</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.variations.map((variation, index) => (
                  <button
                    key={index}
                    className="p-3 border border-gray-300 rounded-lg text-left hover:border-green-500 transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-900">{variation.name}</div>
                    <div className="text-sm text-gray-600">{formatPrice(variation.price)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="p-3 border border-gray-300 rounded-lg text-sm hover:border-green-500 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 text-center min-w-[3rem]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">only 12 left in stock</span>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Purchase Product
              </button>
              <button 
                onClick={() => navigate('/cart')}
                className="flex-1 border border-green-600 text-green-600 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Free shipping on orders over $35</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Free & easy returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Secure payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['Description', 'From the seller', 'Specifications', 'Key Features'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'Description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                <div className="mt-8">
                  <img
                    src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                    alt="Product detail"
                    className="w-full max-w-md rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews ({product.reviews})</h2>
          <p className="text-gray-600 mb-8">Read Reviews from our satisfied customers. Share your experience with us by clicking the review button</p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-6xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on 1,258 verified purchases</p>
              <p className="text-sm text-gray-500">Read Reviews from our satisfied customers. Share your experience with us by clicking the review button</p>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{stars} Stars</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{stars === 5 ? '5' : stars === 4 ? '1' : stars === 3 ? '1' : stars === 2 ? '1' : '0'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="font-medium text-gray-900">{review.name}</span>
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
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{review.comment}</h4>
                <p className="text-gray-600">{review.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
              See More
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Product You May Also Like</h2>
          <div className="grid grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{formatPrice(product.price)}</span>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
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

export default ProductDetailPage;