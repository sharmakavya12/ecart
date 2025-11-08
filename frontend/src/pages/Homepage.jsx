import Productlist from '../components/Productlist';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-40 animate-ping"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Unleash Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
                Style
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover trendy products that match your vibe. Quality, affordability, and fun all in one place!
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-110 transition-all duration-300 shadow-lg">
                🛒 Start Shopping
              </button>
              <button className="border-2 border-orange-300 text-orange-700 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 hover:border-orange-500 transition-all duration-300">
                ✨ Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-pulse">Hot Picks 🔥</h2>
          <p className="text-gray-600">Curated collection of must-have items</p>
        </div>
        <Productlist />
      </div>
    </div>
  );
};

export default Homepage;
