import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { modulesData } from "@/data/modulesData";

export function useProgress() {
  const { user } = useAuth();
  const [completedModules, setCompletedModules] = useState(new Set());
  const [loading, setLoading] = useState(true);

  // Calculate total modules count
  const totalModules = modulesData.reduce(
    (total, section) => total + section.modules.length,
    0
  );

  // Load progress from Firestore
  useEffect(() => {
    if (!user) {
      setCompletedModules(new Set());
      setLoading(false);
      return;
    }

    const loadProgress = async () => {
      try {
        const progressRef = doc(db, "userProgress", user.uid);
        const progressSnap = await getDoc(progressRef);

        if (progressSnap.exists()) {
          const data = progressSnap.data();
          const modulesArray = data.completedModules || [];
          // Ensure we create a new Set instance for React to detect changes
          setCompletedModules(new Set(modulesArray));
        } else {
          // Initialize progress document
          await setDoc(progressRef, {
            completedModules: [],
            lastUpdated: new Date(),
          });
          setCompletedModules(new Set());
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  // Mark module as completed (only adds, doesn't remove)
  const markModuleComplete = async (moduleId) => {
    if (!user) {
      return;
    }

    // If already completed, don't do anything
    if (completedModules.has(moduleId)) {
      return;
    }

    // Create a new Set to ensure React detects the state change
    const newCompleted = new Set(completedModules);
    newCompleted.add(moduleId);

    // Update state immediately for UI responsiveness
    setCompletedModules(new Set(newCompleted));

    try {
      const progressRef = doc(db, "userProgress", user.uid);
      // Check if document exists, if not create it
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        await updateDoc(progressRef, {
          completedModules: Array.from(newCompleted),
          lastUpdated: new Date(),
        });
      } else {
        await setDoc(progressRef, {
          completedModules: Array.from(newCompleted),
          lastUpdated: new Date(),
        });
      }
    } catch (error) {
      console.error("Error saving progress:", error);
      // Revert on error - create new Set to trigger re-render
      setCompletedModules(new Set(completedModules));
    }
  };

  // Toggle module completion (for manual toggle button)
  const toggleModuleComplete = async (moduleId) => {
    if (!user) return;

    const newCompleted = new Set(completedModules);
    if (newCompleted.has(moduleId)) {
      newCompleted.delete(moduleId);
    } else {
      newCompleted.add(moduleId);
    }

    // Create new Set to ensure React detects state change
    setCompletedModules(new Set(newCompleted));

    try {
      const progressRef = doc(db, "userProgress", user.uid);
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        await updateDoc(progressRef, {
          completedModules: Array.from(newCompleted),
          lastUpdated: new Date(),
        });
      } else {
        await setDoc(progressRef, {
          completedModules: Array.from(newCompleted),
          lastUpdated: new Date(),
        });
      }
    } catch (error) {
      console.error("Error saving progress:", error);
      // Revert on error - create new Set to trigger re-render
      setCompletedModules(new Set(completedModules));
    }
  };

  // Check if module is completed
  const isModuleCompleted = (moduleId) => {
    return completedModules.has(moduleId);
  };

  // Calculate progress percentage
  const progressPercentage =
    totalModules > 0
      ? Math.round((completedModules.size / totalModules) * 100)
      : 0;

  return {
    completedModules,
    totalModules,
    progressPercentage,
    markModuleComplete,
    toggleModuleComplete,
    isModuleCompleted,
    loading,
  };
}
