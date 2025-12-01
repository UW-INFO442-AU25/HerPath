import { GradientBackground } from "@/components/ui/gradient-background";
import { useProgress } from "@/hooks/useProgress";
import { modulesData } from "@/data/modulesData";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";

export default function ProgressPage() {
  const {
    completedModules,
    totalModules,
    progressPercentage,
    isModuleCompleted,
  } = useProgress();
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  // Force refresh when navigating to this page
  useEffect(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  // Flatten all modules with their section info
  const allModules = [];
  modulesData.forEach((section, sectionIndex) => {
    section.modules.forEach((module, moduleIndex) => {
      allModules.push({
        ...module,
        sectionTitle: section.title,
        sectionIndex,
        moduleIndex,
        globalIndex: allModules.length,
      });
    });
  });

  // Generate snake path positions for game board style
  const generateSnakePath = (total) => {
    const positions = [];
    const segmentWidth = 80; // Wider horizontal spacing
    const modulesPerRow = 8; // More modules per row = wider layout
    const startX = 100; // Start position X (left side for first module)
    const startY = 80; // Start position Y (top)
    const rowSpacing = 100; // Reduced vertical spacing between rows

    let currentX = startX;
    let currentY = startY;
    let direction = 1; // 1 = right, -1 = left
    let rowIndex = 0;
    let colInRow = 0;

    for (let i = 0; i < total; i++) {
      positions.push({
        x: currentX,
        y: currentY,
        isEven: i % 2 === 0, // Alternating colors
      });

      colInRow++;

      // Check if we need to move to next row
      if (colInRow >= modulesPerRow) {
        // Move down to next row
        rowIndex++;
        currentY += rowSpacing;
        direction *= -1; // Reverse direction
        colInRow = 0;
      } else {
        // Move horizontally
        currentX += direction * segmentWidth;
      }
    }

    return positions;
  };

  const pathPositions = generateSnakePath(allModules.length);

  // Calculate SVG viewBox dimensions
  const minX = Math.min(...pathPositions.map((p) => p.x)) - 100;
  const maxX = Math.max(...pathPositions.map((p) => p.x)) + 100;
  const minY = Math.min(...pathPositions.map((p) => p.y)) - 150;
  const maxY = Math.max(...pathPositions.map((p) => p.y)) + 150;
  const svgWidth = maxX - minX;
  const svgHeight = maxY - minY;

  return (
    <GradientBackground>
      <HeaderComponent />

      {/* Main Content */}
      <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
              Your Learning Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Track your progress as you master financial literacy
            </p>

            {/* Progress Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-pink-50">
                <div className="text-3xl font-bold text-pink-500">
                  {progressPercentage}%
                </div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-pink-50">
                <div className="text-3xl font-bold text-pink-500">
                  {completedModules.size}/{totalModules}
                </div>
                <div className="text-sm text-gray-600">Modules</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-xl mx-auto">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-linear-to-r from-pink-500 to-rose-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Snake Path Game Board */}
          <div className="relative flex justify-center items-center mb-12 overflow-x-auto py-4">
            <svg
              viewBox={`${minX} ${minY} ${svgWidth} ${svgHeight}`}
              className="w-full max-w-5xl"
              style={{ minHeight: "450px" }}
            >
              {/* Draw the snake path background */}
              {pathPositions.map((pos, index) => {
                const nextPos = pathPositions[index + 1];
                const completed = isModuleCompleted(allModules[index]?.id);
                const isFirst = index === 0;
                const isLast = index === allModules.length - 1;

                return (
                  <g key={index}>
                    {/* Connection to next segment */}
                    {nextPos && (
                      <line
                        x1={pos.x}
                        y1={pos.y}
                        x2={nextPos.x}
                        y2={nextPos.y}
                        stroke={completed ? "#db2777" : "#c4b5fd"}
                        strokeWidth="45"
                        strokeLinecap="round"
                      />
                    )}
                  </g>
                );
              })}

              {/* Draw the segments and circles */}
              {pathPositions.map((pos, index) => {
                const module = allModules[index];
                const completed = isModuleCompleted(module?.id);
                const isFirst = index === 0;
                const isLast = index === allModules.length - 1;

                // Alternating colors: purple (dark) and pink (light)
                const segmentColor = index % 2 === 0 ? "#a78bfa" : "#f9a8d4";
                const completedColor = index % 2 === 0 ? "#9333ea" : "#ec4899";

                return (
                  <g
                    key={`segment-${index}`}
                    className="cursor-pointer"
                    onClick={() => navigate("/modules")}
                  >
                    {/* Glow effect for completed modules */}
                    {completed && (
                      <rect
                        x={pos.x - 35}
                        y={pos.y - 30}
                        width="70"
                        height="60"
                        rx="14"
                        ry="14"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="4"
                        opacity="0.6"
                      />
                    )}

                    {/* Segment rectangle with rounded corners */}
                    <rect
                      x={pos.x - 30}
                      y={pos.y - 25}
                      width="60"
                      height="50"
                      rx="12"
                      ry="12"
                      fill={completed ? completedColor : segmentColor}
                      stroke={completed ? "#16a34a" : "#8b5cf6"}
                      strokeWidth={completed ? "4" : "3"}
                      className="transition-all duration-300 hover:brightness-110"
                    />

                    {/* White circle with number */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="18"
                      fill="white"
                      stroke={completed ? "#22c55e" : "#e5e7eb"}
                      strokeWidth={completed ? "3" : "2"}
                    />

                    {/* Number or icon */}
                    {isFirst ? (
                      // Flower for first module (top)
                      <g transform={`translate(${pos.x - 15}, ${pos.y - 15})`}>
                        <svg width="30" height="30" viewBox="0 0 100 100">
                          {/* Flower petals */}
                          <ellipse
                            cx="50"
                            cy="25"
                            rx="18"
                            ry="25"
                            fill="#ec4899"
                          />
                          <ellipse
                            cx="50"
                            cy="75"
                            rx="18"
                            ry="25"
                            fill="#ec4899"
                          />
                          <ellipse
                            cx="25"
                            cy="50"
                            rx="25"
                            ry="18"
                            fill="#ec4899"
                          />
                          <ellipse
                            cx="75"
                            cy="50"
                            rx="25"
                            ry="18"
                            fill="#ec4899"
                          />
                          {/* Center */}
                          <circle cx="50" cy="50" r="15" fill="#fde047" />
                          <circle cx="50" cy="50" r="10" fill="#facc15" />
                        </svg>
                      </g>
                    ) : isLast ? (
                      // Heart for last module (bottom)
                      <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="#3b82f6"
                          />
                        </svg>
                      </g>
                    ) : (
                      // Number
                      <text
                        x={pos.x}
                        y={pos.y + 5}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="#374151"
                      >
                        {index + 1}
                      </text>
                    )}

                    {/* Checkmark for completed (non-first, non-last) */}
                    {completed && !isFirst && !isLast && (
                      <g transform={`translate(${pos.x + 12}, ${pos.y - 22})`}>
                        <circle cx="8" cy="8" r="10" fill="#22c55e" />
                        <path
                          d="M4 8l3 3 6-6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Section Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulesData.map((section, sectionIndex) => {
              const sectionModules = section.modules;
              const completedCount = sectionModules.filter((m) =>
                isModuleCompleted(m.id)
              ).length;
              const sectionProgress =
                sectionModules.length > 0
                  ? Math.round((completedCount / sectionModules.length) * 100)
                  : 0;

              const isComplete = sectionProgress === 100;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className={`backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                    isComplete
                      ? "bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-400 ring-2 ring-green-300 ring-offset-2"
                      : "bg-white/90 border border-pink-50"
                  }`}
                  onClick={() => navigate("/modules")}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-lg font-bold ${
                        isComplete ? "text-green-700" : "text-gray-800"
                      }`}
                    >
                      {section.title}
                    </h3>
                    {isComplete && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Complete!
                        </span>
                        <Trophy className="w-6 h-6 text-yellow-500 shrink-0" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div
                      className={`flex justify-between text-sm ${
                        isComplete ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      <span>
                        {completedCount} of {sectionModules.length} complete
                      </span>
                      <span className="font-semibold">{sectionProgress}%</span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isComplete ? "bg-green-200" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${sectionProgress}%` }}
                        transition={{
                          duration: 0.5,
                          delay: sectionIndex * 0.1,
                        }}
                        className={`h-full rounded-full ${
                          isComplete
                            ? "bg-linear-to-r from-green-500 to-emerald-500"
                            : "bg-linear-to-r from-pink-500 to-rose-500"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
