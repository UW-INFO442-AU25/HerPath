import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

// Avatar options (same as in SettingsPage)
export const avatars = [
  { id: 1, emoji: "👩‍💼", name: "Business Professional" },
  { id: 2, emoji: "👩‍🎓", name: "Student" },
  { id: 3, emoji: "👩‍💻", name: "Tech Enthusiast" },
  { id: 4, emoji: "👩‍🎨", name: "Creative" },
  { id: 5, emoji: "👩‍🚀", name: "Explorer" },
  { id: 6, emoji: "👩‍🔬", name: "Scientist" },
  { id: 7, emoji: "👩‍⚕️", name: "Helper" },
  { id: 8, emoji: "👩‍🏫", name: "Teacher" },
  { id: 9, emoji: "👸", name: "Leader" },
  { id: 10, emoji: "🦸‍♀️", name: "Superhero" },
];

export function useUserAvatar() {
  const { user } = useAuth();
  const [avatarId, setAvatarId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setAvatarId(1);
      setLoading(false);
      return;
    }

    const loadAvatar = async () => {
      try {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists() && userDoc.data().avatar) {
          setAvatarId(userDoc.data().avatar);
        }
      } catch (error) {
        console.error("Error loading avatar:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAvatar();
  }, [user]);

  const avatar = avatars.find((a) => a.id === avatarId) || avatars[0];

  return { avatar, avatarId, loading };
}
