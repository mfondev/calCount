import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { meals as initialMeals } from "@/utils/data"; // adjust path to your file

// Meal type — matches the shape of your meals array
export type Meal = {
  id: number;
  category: string;
  name: string;
  calories: string;
  time: string;
  difficulty: string;
  rating: number;
  reviews: number;
  tags: string[];
  description: string;
  imageUrl: string;
  recipe: string[];
};

// what AddRecipe will hand us — id/rating/reviews get filled in automatically
type NewMealInput = Omit<Meal, "id" | "rating" | "reviews">;

// Define the context type
type SavedMealsContextType = {
  // the full list of meals (static seed + any user-added ones)
  meals: Meal[];
  addMeal: (meal: NewMealInput) => void;

  // meals saved by the user will be in this savedMealIds array
  savedMealIds: number[];
  isSaved: (id: number) => boolean;
  toggleSaved: (id: number) => void;
  removeSaved: (id: number) => void;
  addSaved: (id: number) => void;
};

// Step 1: Create the context
const SavedMealsContext = createContext<SavedMealsContextType | undefined>(
  undefined,
);

export function SavedMealsProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<Meal[]>(initialMeals as Meal[]);
  const [savedMealIds, setSavedMealIds] = useState<number[]>([]);

  const updateSavedMeals = (ids: number[]) => {
    setSavedMealIds(ids);
  };

  const isSaved = (id: number) => savedMealIds.includes(id);

  const toggleSaved = (id: number) => {
    const next = isSaved(id)
      ? savedMealIds.filter((savedId) => savedId !== id)
      : [...savedMealIds, id];
    updateSavedMeals(next);
  };

  const removeSaved = (id: number) => {
    updateSavedMeals(savedMealIds.filter((savedId) => savedId !== id));
    console.log(`Removed meal with ID ${id} from saved meals.`);
  };

  const addSaved = (id: number) => {
    if (!savedMealIds.includes(id)) {
      updateSavedMeals([...savedMealIds, id]);
    }
  };

  const addMeal = (meal: NewMealInput) => {
    const nextId = meals.length > 0 ? Math.max(...meals.map((m) => m.id)) + 1 : 1;

    const newMeal: Meal = {
      ...meal,
      id: nextId,
      rating: 0,
      reviews: 0,
    };

    setMeals((prev) => [...prev, newMeal]);
  };

  return (
    <SavedMealsContext.Provider
      value={{
        meals,
        addMeal,
        savedMealIds,
        isSaved,
        toggleSaved,
        removeSaved,
        addSaved,
      }}
    >
      {children}
    </SavedMealsContext.Provider>
  );
}

export function useSavedMeals() {
  const ctx = useContext(SavedMealsContext);
  if (!ctx) {
    throw new Error("useSavedMeals must be used within a SavedMealsProvider");
  }
  return ctx;
}