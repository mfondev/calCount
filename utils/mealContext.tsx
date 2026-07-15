import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

// Define the context type
type SavedMealsContextType = {
  //meals saved by the user will be in this savedMealIds array
  savedMealIds: number[];
  isSaved: (id: number) => boolean;
  toggleSaved: (id: number) => void;
  removeSaved:(id: number) => void;
};

// Step 1: Create the context
const SavedMealsContext = createContext<SavedMealsContextType | undefined>(
  undefined,
);

export function SavedMealsProvider({ children }: { children: ReactNode }) {
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

  return (
    <SavedMealsContext.Provider value={{ savedMealIds, isSaved, toggleSaved, removeSaved }}>
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