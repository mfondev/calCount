import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { meals } from "@/utils/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSavedMeals } from "@/utils/mealContext";

export default function MealId() {
  const params = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const recipe = meals.find((m) => m.id === parseInt(params.id));
    const { isSaved, toggleSaved } = useSavedMeals();


  if (!recipe) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFound}>Meal not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
            hitSlop={8}
          >
            <MaterialCommunityIcons
              name="arrow-left-thin"
              size={24}
              color="black"
            />
          </Pressable>
          <Pressable style={styles.saveButton} hitSlop={8} onPress={() => toggleSaved(recipe.id)}>
            <Ionicons name="bookmark-outline" size={20} color="#1a1a1a" />
          </Pressable>
        </View>

        <Image
          source={{ uri: recipe.imageUrl }}
          style={styles.imagePlaceholder}
          resizeMode="cover"
        />

        <View style={styles.body}>
          {recipe.category && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{recipe.category}</Text>
            </View>
          )}
          <Text style={styles.title}>{recipe.name}</Text>
          <Text style={styles.subtitle}>{recipe.description}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <MaterialCommunityIcons name="fire" size={18} color="#3e9401" />
              <Text style={styles.metaText}>{recipe.calories}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.sectionLabel}>Recipe</Text>
          <View style={styles.stepsContainer}>
            {recipe.recipe.map((step, index) => (
              <View key={index} style={styles.stepRow}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  content: {
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    height: 220,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 24,
    backgroundColor: "#c8e6b0",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#3e9401",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#8a8f8a",
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  metaText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  divider: {
    height: 1,
    backgroundColor: "#d3ddd5",
    marginVertical: 12,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  recipeText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#3a3f3a",
  },
  notFound: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#8a8f8a",
  },
  stepsContainer: {
    gap: 14,
  },
  stepRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3e9401",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  stepNumberText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: "#3a3f3a",
  },
});
