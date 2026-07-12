import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
//for storing saved meals in async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "saved_meals";

// Define the context type
type SavedMealsContextType = {
  savedMealIds: number[];
  isSaved: (id: number) => boolean;
  toggleSaved: (id: number) => void;
};

// Step 1: Create the context
const SavedMealsContext = createContext<SavedMealsContextType | undefined>(
  undefined,
);

export function SavedMealsProvider({ children }: { children: ReactNode }) {
  const [savedMealIds, setSavedMealIds] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setSavedMealIds(JSON.parse(stored));
      } catch (err) {
        console.log("Failed to load saved meals:", err);
      }
    })();
  }, []);

  const persist = async (ids: number[]) => {
    setSavedMealIds(ids);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (err) {
      console.log("Failed to save meals:", err);
    }
  };

  const isSaved = (id: number) => savedMealIds.includes(id);

  const toggleSaved = (id: number) => {
    const next = isSaved(id)
      ? savedMealIds.filter((savedId) => savedId !== id)
      : [...savedMealIds, id];
    persist(next);
  };

  return (
    <SavedMealsContext.Provider value={{ savedMealIds, isSaved, toggleSaved }}>
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
