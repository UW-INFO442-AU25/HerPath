import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserAvatar } from "@/hooks/useUserAvatar";
import { Menu, X } from "lucide-react";

export default function HeaderComponent() {
  const { user, logOut } = useAuth();
  const { avatar } = useUserAvatar();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-baseline hover:opacity-80 transition-opacity"
        >
          <span className="text-3xl sm:text-4xl font-bold text-pink-300 drop-shadow-sm">
            HER
          </span>
          <span className="text-lg sm:text-xl text-gray-400 ml-1">Path</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/modules")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Modules
              </button>
              <button
                onClick={() => navigate("/progress")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Progress
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Log Out
              </button>
              {/* Profile Avatar */}
              <button
                onClick={() => navigate("/settings")}
                className="w-10 h-10 rounded-full bg-linear-to-r from-pink-100 to-rose-100 border-2 border-pink-300 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer ml-2"
                title="Profile Settings"
              >
                {avatar.emoji}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/modules")}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Modules
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-linear-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
              >
                Sign In
              </button>
            </>
          )}
        </nav>

        {/* Mobile: Profile + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {user && (
            <button
              onClick={() => navigate("/settings")}
              className="w-9 h-9 rounded-full bg-linear-to-r from-pink-100 to-rose-100 border-2 border-pink-300 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer"
              title="Profile Settings"
            >
              {avatar.emoji}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <nav className="flex flex-col gap-2">
            {user ? (
              <>
                <button
                  onClick={() => handleNavigation("/")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation("/modules")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Modules
                </button>
                <button
                  onClick={() => handleNavigation("/progress")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Progress
                </button>
                <button
                  onClick={() => handleNavigation("/settings")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Settings
                </button>
                <div className="border-t border-gray-100 my-2" />
                <button
                  onClick={handleLogout}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors font-medium"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation("/modules")}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors font-medium"
                >
                  Modules
                </button>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="mx-4 mt-2 bg-linear-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md font-semibold text-center"
                >
                  Sign In
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
