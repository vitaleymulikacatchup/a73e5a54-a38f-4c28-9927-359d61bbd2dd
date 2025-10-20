import React from 'react'
import { Search, ShoppingBag, X } from 'lucide-react'

const Header = () => {
  return (
    <>
      {/* Top notification bar */}
      <div className="bg-apple-gray-700 text-white py-2 px-4 text-center text-sm relative">
        <span className="text-apple-gray-200">
          Виберіть свою країну чи регіон, щоб переглянути контент відповідно до місця вашого перебування.
        </span>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
          <select className="bg-transparent text-white border border-apple-gray-500 rounded px-2 py-1 text-xs">
            <option value="ua">🇺🇦 Україна</option>
          </select>
          <button className="text-white hover:text-apple-gray-300">
            <X size={16} />
          </button>
        </div>
      </div>
      
      {/* Main navigation */}
      <header className="bg-apple-gray-700 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-8xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <div className="text-white text-xl font-semibold">
                🍎
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="apple-nav-link">Store</a>
                <a href="#" className="apple-nav-link">Mac</a>
                <a href="#" className="apple-nav-link">iPad</a>
                <a href="#" className="apple-nav-link">iPhone</a>
                <a href="#" className="apple-nav-link">Watch</a>
                <a href="#" className="apple-nav-link">Vision</a>
                <a href="#" className="apple-nav-link">AirPods</a>
                <a href="#" className="apple-nav-link">TV & Home</a>
                <a href="#" className="apple-nav-link">Entertainment</a>
                <a href="#" className="apple-nav-link">Accessories</a>
                <a href="#" className="apple-nav-link">Support</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-apple-gray-400 hover:text-white transition-colors">
                <Search size={18} />
              </button>
              <button className="text-apple-gray-400 hover:text-white transition-colors">
                <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
