import { useState } from "react";
import { GradientBackground } from "@/components/ui/gradient-background";
import HeaderComponent from "../components/HeaderComponent";

export default function SettingsPage() {
  const [theme, setTheme] = useState("pink");
  const [avatar, setAvatar] = useState(1);

  const handleResetProgress = () => {
    alert("Progress reset (placeholder) ✨");
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

          {/* Password */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Password
              </h2>
              <p className="mt-2 font-mono tracking-widest text-gray-700">
                ••••••••
              </p>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg">
              Change Password &gt;
            </button>
          </section>

          {/* Color Theme */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Color Theme
            </h2>

            <div className="flex flex-wrap gap-6 items-center">
              {/* Pink theme */}
              <button
                onClick={() => setTheme("pink")}
                className="flex items-center gap-3"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 ${
                    theme === "pink"
                      ? "border-pink-500"
                      : "border-gray-300"
                  }`}
                />
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-pink-300 shadow" />
                  <span className="w-7 h-7 rounded-full bg-pink-200 shadow" />
                  <span className="w-7 h-7 rounded-full bg-purple-200 shadow" />
                </div>
              </button>

              {/* Peach theme */}
              <button
                onClick={() => setTheme("peach")}
                className="flex items-center gap-3"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 ${
                    theme === "peach"
                      ? "border-pink-500"
                      : "border-gray-300"
                  }`}
                />
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-amber-200 shadow" />
                  <span className="w-7 h-7 rounded-full bg-yellow-100 shadow" />
                  <span className="w-7 h-7 rounded-full bg-rose-100 shadow" />
                </div>
              </button>

              {/* Green theme */}
              <button
                onClick={() => setTheme("green")}
                className="flex items-center gap-3"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 ${
                    theme === "green"
                      ? "border-pink-500"
                      : "border-gray-300"
                  }`}
                />
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-lime-300 shadow" />
                  <span className="w-7 h-7 rounded-full bg-emerald-200 shadow" />
                  <span className="w-7 h-7 rounded-full bg-lime-200 shadow" />
                </div>
              </button>
            </div>
          </section>

          {/* Avatar */}
          <section className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Avatar
            </h2>

            <div className="flex gap-6">
              {[1, 2].map((id) => (
                <button
                  key={id}
                  onClick={() => setAvatar(id)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed flex items-center justify-center ${
                    avatar === id
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-300 bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-400 mb-1" />
                    <div className="w-10 h-6 rounded-t-lg bg-gray-500" />
                  </div>
                </button>
              ))}
            </div>
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
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              Reset Progress &gt;
            </button>
          </section>
        </div>
      </main>

      {/* Footer logo bar */}
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
