import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-background";
import HeaderComponent from "@/components/HeaderComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { modulesData } from "@/data/modulesData";
import { PlayCircle, CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/contexts/AuthContext";

export default function ModulesPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollContainerRef = useRef(null);
  const { markModuleComplete, toggleModuleComplete, isModuleCompleted } =
    useProgress();
  const { user } = useAuth();

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setHasScrolledToBottom(false);
  };

  const handleCloseModal = () => {
    setSelectedModule(null);
    setHasScrolledToBottom(false);
  };

  // Handle scroll detection to mark module as complete
  useEffect(() => {
    if (!selectedModule || !user) return;

    // Reset scroll state when module changes
    setHasScrolledToBottom(false);
    let markedComplete = false; // Track if we've already marked this module

    const checkScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer || markedComplete) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      // Mark as complete when user scrolls 80% down or if content is short
      if (scrollPercentage >= 0.8) {
        markedComplete = true;
        setHasScrolledToBottom(true);
        markModuleComplete(selectedModule.id);
      }
    };

    // Wait for DOM to be ready, then set up listener
    const timeoutId = setTimeout(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      // Check immediately in case content is short
      checkScroll();

      // Add scroll listener
      scrollContainer.addEventListener("scroll", checkScroll, {
        passive: true,
      });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, [selectedModule?.id, user, markModuleComplete]);

  return (
    <GradientBackground>
      <HeaderComponent />

      {/* Main Content */}
      <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
              Learning Modules
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Explore our comprehensive financial literacy curriculum
            </p>
          </motion.div>

          {/* Sections Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modulesData.map((section, sectionIndex) => {
              // Check if all modules in this section are completed
              const completedCount = section.modules.filter((m) =>
                isModuleCompleted(m.id)
              ).length;
              const isSectionComplete =
                section.modules.length > 0 &&
                completedCount === section.modules.length;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <AccordionItem
                    value={section.id}
                    className={`rounded-lg backdrop-blur-sm shadow-md overflow-hidden transition-all ${
                      isSectionComplete
                        ? "border-2 border-green-400 bg-linear-to-br from-green-50 to-emerald-50 ring-2 ring-green-300 ring-offset-2"
                        : "border border-gray-200 bg-white/90"
                    }`}
                  >
                    <AccordionTrigger
                      className={`px-6 py-4 transition-colors ${
                        isSectionComplete
                          ? "hover:bg-green-100/50"
                          : "hover:bg-pink-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <div
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                            isSectionComplete
                              ? "bg-linear-to-r from-green-500 to-emerald-500"
                              : "bg-linear-to-r from-pink-500 to-rose-500"
                          }`}
                        >
                          {isSectionComplete ? "✓" : sectionIndex + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h2
                              className={`text-xl sm:text-2xl font-bold ${
                                isSectionComplete
                                  ? "text-green-700"
                                  : "text-gray-800"
                              }`}
                            >
                              {section.title}
                            </h2>
                            {isSectionComplete && (
                              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                Complete!
                              </span>
                            )}
                          </div>
                          {section.modules.length > 0 && (
                            <p
                              className={`text-sm mt-1 ${
                                isSectionComplete
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }`}
                            >
                              {completedCount} of {section.modules.length}{" "}
                              module
                              {section.modules.length !== 1 ? "s" : ""} complete
                            </p>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      {section.modules.length === 0 ? (
                        <div className="py-8 text-center text-gray-500">
                          <p>Coming soon!</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {section.modules.map((module, moduleIndex) => {
                            const isCompleted = isModuleCompleted(module.id);
                            return (
                              <motion.div
                                key={module.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: moduleIndex * 0.05,
                                }}
                              >
                                <Card
                                  className={`cursor-pointer hover:shadow-lg transition-all duration-300 border-2 ${
                                    isCompleted
                                      ? "border-green-300 bg-green-50/30"
                                      : "hover:border-pink-300 bg-white"
                                  }`}
                                  onClick={() => handleModuleClick(module)}
                                >
                                  <CardContent className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                          <span className="text-sm font-semibold text-pink-600">
                                            Module {moduleIndex + 1}
                                          </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                          {module.title}
                                        </h3>
                                        {module.content.length > 0 && (
                                          <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <PlayCircle className="w-4 h-4" />
                                            <span>
                                              {
                                                module.content.filter(
                                                  (c) => c.type === "video"
                                                ).length
                                              }{" "}
                                              video
                                              {module.content.filter(
                                                (c) => c.type === "video"
                                              ).length !== 1
                                                ? "s"
                                                : ""}
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="shrink-0"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleModuleComplete(module.id);
                                        }}
                                      >
                                        {isCompleted ? (
                                          <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500" />
                                        ) : (
                                          <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>

      {/* Module Content Modal */}
      <Dialog open={!!selectedModule} onOpenChange={handleCloseModal}>
        {selectedModule && (
          <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
            <DialogHeader className="shrink-0 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {selectedModule.title}
                </DialogTitle>
                {user && isModuleCompleted(selectedModule.id) && (
                  <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-500 shrink-0" />
                )}
              </div>
            </DialogHeader>
            <DialogDescription className="sr-only">
              Module content and action items
            </DialogDescription>

            <div
              ref={scrollContainerRef}
              className="space-y-6 mt-4 overflow-y-auto flex-1 min-h-0 pr-2 -mr-2"
            >
              {/* Content Items */}
              {selectedModule.content.length > 0 ? (
                selectedModule.content.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    {item.type === "video" && (
                      <YouTubeEmbed url={item.videoUrl} title={item.title} />
                    )}
                    {item.type === "text" && (
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-gray-700 leading-relaxed">
                        <div className="whitespace-pre-line text-sm sm:text-base">
                          {item.text || "Content coming soon!"}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Content coming soon!</p>
                </div>
              )}

              {/* Action Items */}
              {selectedModule.actionItems &&
                selectedModule.actionItems.length > 0 && (
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                      Action Items
                    </h3>
                    <ul className="space-y-3">
                      {selectedModule.actionItems.map((actionItem, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-pink-50 rounded-lg p-4 border border-pink-100"
                        >
                          <span className="shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed">
                            {actionItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </GradientBackground>
  );
}
