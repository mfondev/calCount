import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";

export default function Dinner() {
  const dinnerMeals = meals.filter((m) => m.category === "Dinner");
  return (
    <View style={styles.container}>
      <FlatList
        data={dinnerMeals}
        renderItem={({ item }) => <MealCard meal={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e2ede5" },
  content: { padding: 16, gap: 14 },
});
