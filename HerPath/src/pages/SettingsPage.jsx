import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { LogOut, Trophy, Sparkles } from "lucide-react";
import { avatars } from "@/hooks/useUserAvatar";
import HeaderComponent from "@/components/HeaderComponent";

export default function SettingsPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [pendingAvatar, setPendingAvatar] = useState(1);
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const { user, logOut } = useAuth();
  const { completedModules, totalModules, progressPercentage } = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    // Load saved avatar preference
    if (user) {
      const loadAvatar = async () => {
        try {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists() && userDoc.data().avatar) {
            const savedAvatar = userDoc.data().avatar;
            setSelectedAvatar(savedAvatar);
            setPendingAvatar(savedAvatar);
          }
        } catch (error) {
          console.error("Error loading avatar:", error);
        }
      };
      loadAvatar();
    }
  }, [user]);

  useEffect(() => {
    // Check if there are unsaved changes
    setHasChanges(pendingAvatar !== selectedAvatar);
  }, [pendingAvatar, selectedAvatar]);

  const handleAvatarChange = (avatarId) => {
    setPendingAvatar(avatarId);
  };

  const handleSaveChanges = async () => {
    if (!user || !hasChanges) return;

    setSaving(true);
    try {
      const userRef = doc(db, "users", user.uid);
      // Check if document exists, if not create it
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        await updateDoc(userRef, {
          avatar: pendingAvatar,
          lastUpdated: new Date(),
        });
      } else {
        // Create document if it doesn't exist
        await setDoc(userRef, {
          avatar: pendingAvatar,
          lastUpdated: new Date(),
        });
      }
      setSelectedAvatar(pendingAvatar);
      setHasChanges(false);
      // Show success message
      alert("Changes saved successfully! ✨");
    } catch (error) {
      console.error("Error saving avatar:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleResetProgress = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset all your progress? This cannot be undone."
      )
    ) {
      try {
        const progressRef = doc(db, "userProgress", user.uid);
        await updateDoc(progressRef, {
          completedModules: [],
          lastUpdated: new Date(),
        });
        alert("Progress reset successfully! ✨");
        navigate("/modules");
      } catch (error) {
        console.error("Error resetting progress:", error);
        alert("Failed to reset progress. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <GradientBackground>
      <HeaderComponent />

      {/* Main content */}
      <main className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Settings
          </h1>

          {/* Profile Section */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8">
            <div className="flex items-center gap-4 mb-6">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-16 h-16 rounded-full border-2 border-pink-200"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold">
                  {user?.displayName?.[0]?.toUpperCase() || "U"}
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {user?.displayName || "User"}
                </h2>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Learning Progress
                </span>
                <span className="text-sm font-bold text-pink-600">
                  {progressPercentage}%
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                />
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  {completedModules.size} completed
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  {totalModules - completedModules.size} remaining
                </span>
              </div>
            </div>
          </section>

          {/* Avatar Selection */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Choose Your Avatar
            </h2>
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-4">
              {avatars.map((avatar) => (
                <motion.button
                  key={avatar.id}
                  onClick={() => handleAvatarChange(avatar.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center text-3xl sm:text-4xl transition-all ${
                    pendingAvatar === avatar.id
                      ? "border-pink-500 bg-pink-50 shadow-lg scale-110"
                      : "border-gray-300 bg-gray-50 hover:border-pink-300"
                  }`}
                  title={avatar.name}
                >
                  {avatar.emoji}
                </motion.button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Selected: {avatars.find((a) => a.id === pendingAvatar)?.name}
            </p>
            {hasChanges && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSaveChanges}
                  disabled={saving}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </section>

          {/* Password */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Account Security
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Signed in with Google. Your account is secure.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 sm:px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </section>

          {/* Reset Progress */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Reset Progress
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                Resets your account, allowing you to start learning from the
                beginning without distraction.
              </p>
            </div>
            <button
              onClick={handleResetProgress}
              className="bg-red-500 hover:bg-red-600 text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              Reset Progress →
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 pb-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 text-xs sm:text-sm text-gray-600">
          <div className="flex items-baseline">
            <span className="text-2xl font-extrabold text-pink-400">HER</span>
            <span className="ml-1 text-lg font-semibold text-pink-300">
              Path
            </span>
          </div>
          <p>INFO 442 Group 6, 2025</p>
          <p>University of Washington</p>
        </div>
      </footer>
    </GradientBackground>
  );
}
