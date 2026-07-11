import { View, StyleSheet,FlatList } from "react-native";
import React from "react";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";

export default function Lunch() {
  const lunchMeals = meals.filter((m) => m.category === "Lunch");

  return (
    <View style={styles.container}>
      <FlatList
        data={lunchMeals}
        renderItem={({ item }) => <MealCard meal={item} />}
      contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e2ede5" },
  content: { padding: 16, gap: 14 },
});