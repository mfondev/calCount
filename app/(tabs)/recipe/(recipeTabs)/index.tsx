import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";

export default function Index() {
  const breakfastMeals = meals.filter((m) => m.category === "Breakfast");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {breakfastMeals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e2ede5" },
  content: { padding: 16, gap: 14 },
});