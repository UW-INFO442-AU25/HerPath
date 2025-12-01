import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/modules");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate("/modules");
    } catch (error) {
      console.error("Auth error:", error);
      // Handle specific Firebase errors
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError(
          isSignUp
            ? "Failed to create account. Please try again."
            : "Failed to sign in. Please check your credentials."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientBackground>
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-md">
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
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-50 p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                {isSignUp ? "Create Account" : "Welcome to HerPath"}
              </h1>
              <p className="text-gray-600">
                {isSignUp
                  ? "Sign up to start your financial journey"
                  : "Sign in to track your progress and continue your financial journey"}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {isSignUp && (
                  <p className="text-xs text-gray-500">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Please wait...</span>
                  </div>
                ) : (
                  <span>{isSignUp ? "Create Account" : "Sign In"}</span>
                )}
              </Button>
            </form>

            {/* Toggle Sign Up/Sign In */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError("");
                  }}
                  className="text-pink-600 hover:text-pink-700 font-medium underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            {/* Continue without account */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <button
                onClick={() => navigate("/modules")}
                className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
              >
                Continue without account →
              </button>
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
