import { ShoppingBag, Shield, Trophy, Heart, ChevronRight, Search, Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Gameworn</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Auctions</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Athletes</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Start Bidding
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Own a piece of <span className="text-indigo-600">sports history</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Bid on authentic, game-worn memorabilia from your favorite sports stars. Every piece tells a story.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-md hover:bg-indigo-700 flex items-center justify-center">
                  Explore Auctions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-indigo-600 hover:text-indigo-600 flex items-center justify-center">
                  How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800"
                alt="Sports Memorabilia"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Live Auction</span>
                </div>
                <p className="mt-1 text-xs text-gray-600">15 active bidders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">100% Authentic</h3>
              <p className="mt-2 text-gray-600">Every item is verified and comes with a certificate of authenticity.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full">
                <ShoppingBag className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Exclusive Items</h3>
              <p className="mt-2 text-gray-600">Direct partnerships with athletes and organizations.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Giving Back</h3>
              <p className="mt-2 text-gray-600">A portion of every sale supports charitable causes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Auctions</h2>
            <p className="mt-4 text-xl text-gray-600">Don't miss out on these unique pieces of history</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Championship Ring",
                image: "https://images.unsplash.com/photo-1617696618050-b0fef0c666af?auto=format&fit=crop&q=80&w=800",
                price: "Current Bid: $15,000",
                time: "2 days left"
              },
              {
                title: "Match-Worn Jersey",
                image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80&w=800",
                price: "Current Bid: $8,500",
                time: "4 hours left"
              },
              {
                title: "Signed Memorabilia",
                image: "https://images.unsplash.com/photo-1610887940067-2ceac11b2326?auto=format&fit=crop&q=80&w=800",
                price: "Current Bid: $3,200",
                time: "1 day left"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-indigo-600 font-medium">{item.price}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{item.time}</span>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-indigo-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Find Your Perfect Piece</h2>
          <p className="mt-4 text-xl text-indigo-100">Search through thousands of authentic items</p>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search by athlete, team, or item..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Trophy className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-2xl font-bold">Gameworn</span>
              </div>
              <p className="mt-4 text-gray-400">Own a piece of sports history</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Wrestling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Football</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Basketball</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Baseball</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with new auctions</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Gameworn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;