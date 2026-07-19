import { StyleSheet, FlatList, View, Text } from "react-native";
import MealCard from "@/components/meals/mealCard";
import { meals } from "@/utils/data";
import { useSavedMeals } from "@/utils/mealContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function SavedScreen() {
  const { savedMealIds } = useSavedMeals();
  // const savedMeals = meals.filter((m) => savedMealIds.includes(m.id));
  const savedMeals = meals
    .filter((meal) => savedMealIds.includes(meal.id))
    .map((meal) => ({ ...meal, description: meal.description ?? "" }));


  if (savedMeals.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.header}>
          <Text style={styles.title}>Saved Meals</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Ionicons name="bookmark-outline" size={40} color="#c3cbc4" />
          <Text style={styles.emptyText}>No saved meals yet</Text>
          <Text style={styles.emptySubtext}>
            Tap the bookmark icon on a meal to save it here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Meals</Text>
        <Text style={styles.subtitle}>
          {savedMeals.length} {savedMeals.length === 1 ? "meal" : "meals"} saved
        </Text>
      </View>
      <FlatList
        data={savedMeals}
        renderItem={({ item }) => (
          <MealCard meal={item} enableSwipeToDelete={true} />
        )}
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 13,
    color: "#6b716c",
    marginTop: 2,
  },
  content: {
    padding: 16,
    gap: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    gap: 6,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#5c635d",
    marginTop: 8,
  },
  emptySubtext: {
    fontSize: 13,
    color: "#8a8f8a",
    textAlign: "center",
  },
});