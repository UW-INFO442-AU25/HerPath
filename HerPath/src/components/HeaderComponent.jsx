export default function HeaderComponent() {
    return (
        <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="flex items-baseline hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl sm:text-4xl font-bold text-pink-200 drop-shadow-sm">
              HER
            </span>
            <span className="text-lg sm:text-xl text-gray-400 ml-1">Path</span>
          </a>

          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-500 transition-colors text-sm sm:text-base font-medium"
            >
              About Us
            </a>
            <button className="text-gray-700 hover:text-pink-500 transition-colors text-sm sm:text-base font-medium">
              Log Out
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base font-semibold">
              Start Learning
            </button>
          </nav>
        </div>
      </header>
    )
}