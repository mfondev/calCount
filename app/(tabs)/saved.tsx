import { StyleSheet, FlatList, View, Text } from "react-native";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";
import { useSavedMeals } from "@/utils/mealContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SavedScreen() {
  const { savedMealIds } = useSavedMeals();
  const savedMeals = meals.filter((m) => savedMealIds.includes(m.id));

  if (savedMeals.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No saved meals yet</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={savedMeals}
        renderItem={({ item }) => <MealCard meal={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#8a8f8a",
  },
});