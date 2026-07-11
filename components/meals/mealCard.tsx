import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Meal = {
  id: number;
  name: string;
  calories: string;
  description: string;
  category?: string;
  recipe?: string;
};

export default function MealCard({ meal }: { meal: Meal }) {
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.saveButton}
        onPress={() => setSaved((prev) => !prev)}
        hitSlop={8}
      >
        <Ionicons
          name={saved ? "bookmark" : "bookmark-outline"}
          size={16}
          color={saved ? "#3e9401" : "#1a1a1a"}
        />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.mealName}>{meal.name}</Text>
        <Text style={styles.mealMeta}>
          {meal.calories} {meal.description}
        </Text>

        <Link href={`/recipe/meal/${meal.id}`} asChild>
          <Pressable style={styles.recipeButton}>
            <Text style={styles.recipeText}>See Recipe</Text>
            <MaterialIcons name="arrow-right" size={16} color="#fff" />
          </Pressable>
        </Link>
      </View>

      <View style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  saveButton: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f3f6f2",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 16,
    backgroundColor: "#c8e6b0",
  },
  info: {
    flex: 1,
    paddingTop: 14,
  },
  mealName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
    marginTop: 20,
  },
  mealMeta: {
    fontSize: 13,
    color: "#8a8f8a",
    marginBottom: 10,
  },
  recipeButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 8,
  },
  recipeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});