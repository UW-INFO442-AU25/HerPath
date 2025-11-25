import { GradientBackground } from "@/components/ui/gradient-background";
import { Highlight } from "@/components/ui/hero-highlight";
import malalaImage from "@/assets/malala.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <GradientBackground>
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
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
            <a
              href="#login"
              className="text-gray-700 hover:text-pink-500 transition-colors text-sm sm:text-base font-medium"
            >
              Log In
            </a>
            <button
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base font-semibold"
              aria-label="Start Learning"
            >
              Start Learning
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Illustration */}
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-md min-h-[300px] sm:min-h-[400px]">
              {/* Woman with coin illustration */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-18 h-18 sm:w-24 sm:h-24 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-16 h-24 sm:w-20 sm:h-32 bg-gray-300 rounded-t-lg mt-2 mx-auto"></div>
                  <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-yellow-700 shadow-lg">
                      $
                    </div>
                  </div>
                </div>
                {/* Money jar */}
                <div className="absolute right-0 top-12 sm:top-16">
                  <div className="w-20 h-28 sm:w-24 sm:h-32 border-4 border-pink-100 rounded-lg bg-pink-50/50 relative">
                    <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 bg-pink-100 rounded-t"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-pink-100 rounded-b"></div>
                    <div className="p-2 space-y-1">
                      <div className="h-2 sm:h-3 bg-green-500 rounded"></div>
                      <div className="h-2 sm:h-3 bg-green-500 rounded"></div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-800 drop-shadow-lg block mb-2"
              >
                HerPath:
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-800 drop-shadow-md block"
              >
                Learn. Earn. Lead.
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-semibold"
            >
              Interactive lessons, rewards, and a supportive community to{" "}
              <Highlight className="text-gray-800">
                empower your financial journey.
              </Highlight>
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Start Learning"
            >
              Start Learning
            </motion.button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              Your path to financial freedom starts here. We believe financial
              literacy is self-empowerment. HerPath equips young women with the
              tools and mindset to grow their financial confidence,{" "}
              <Highlight className="text-gray-800 font-bold whitespace-nowrap">
                one lesson at a time.
              </Highlight>
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
            <div className="relative">
              <div className="w-40 h-56 sm:w-48 sm:h-64 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 bg-teal-600 rounded-t-lg"></div>
                  <div className="w-28 h-12 sm:w-32 sm:h-16 bg-gray-500 rounded-b-lg"></div>
                </div>
                {/* Credit card */}
                <div className="absolute top-24 sm:top-32 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-32 h-20 sm:w-40 sm:h-24 bg-pink-100 rounded-lg shadow-xl relative">
                    <div className="absolute top-2 left-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full"></div>
                    <div className="absolute top-2 left-8 sm:left-10 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heroine Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Portrait */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <div className="w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-[40%] overflow-hidden border-4 border-white shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,0.8),0_0_120px_rgba(255,255,255,0.6)]">
              <img
                src={malalaImage}
                alt="Malala Yousafzai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 text-center lg:text-right">
            <p className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wider mb-6">
              Featured heroine inspired by women who lead change
            </p>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight italic">
              "One voice can change the world."
            </blockquote>
            <p className="text-lg sm:text-xl text-gray-800 mb-2 font-bold">
              - Malala Yousafzai
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Girls' education activist
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-12 sm:py-16 bg-white/80 backdrop-blur-sm border-t-2 border-pink-100 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="flex flex-col">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                  HER
                </span>
                <span className="text-lg sm:text-xl text-gray-600 ml-1 font-semibold">
                  Path
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Empowering young women through financial literacy, one lesson at
                a time.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#login"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
                  >
                    Log In
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact/Info Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="font-medium">INFO 442 Group 6</li>
                <li>University of Washington</li>
                <li>2025</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © 2025 HerPath. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs sm:text-sm text-gray-500">
              <a
                href="#privacy"
                className="hover:text-pink-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-pink-500 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </GradientBackground>
  );
}

export default Home;
