import { StyleSheet, FlatList, View, Text } from "react-native";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";
import {useSavedMeals }from "@/utils/mealContext";

export default function SavedScreen() {
  const { savedMealIds } = useSavedMeals();
  const savedMeals = meals.filter((m) => savedMealIds.includes(m.id));

  if (savedMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No saved meals yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={savedMeals}
      renderItem={({ item }) => <MealCard meal={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e2ede5" },
  content: { padding: 16, gap: 14 },
  emptyContainer: {
    flex: 1,
    backgroundColor: "#e2ede5",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: { fontSize: 14, color: "#8a8f8a" },
});