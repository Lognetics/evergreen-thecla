import {
  Mic,
  Sparkles,
  Feather,
  Compass,
  AudioLines,
  Megaphone,
  ClipboardList,
  GraduationCap,
  ShoppingBag,
  Headphones,
  Video,
  Lightbulb,
  Users,
  BookOpen,
  Heart,
  Building2,
  Globe2,
} from "lucide-react";

// Maps the string keys used in content.js to actual icon components.
export const iconMap = {
  Mic,
  Sparkles,
  Feather,
  Compass,
  AudioLines,
  Megaphone,
  ClipboardList,
  GraduationCap,
  ShoppingBag,
  Headphones,
  Video,
  Lightbulb,
  Users,
  BookOpen,
  Heart,
  Building2,
  Globe2,
};

export const getIcon = (key) => iconMap[key] || Sparkles;
