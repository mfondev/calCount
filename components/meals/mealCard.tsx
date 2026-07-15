import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSavedMeals } from "@/utils/mealContext";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

type Meal = {
  id: number;
  name: string;
  calories: string;
  description: string;
  category?: string;
  recipe: string[];
  imageUrl?: string;
};

export default function MealCard({
  meal,
  enableSwipeToDelete = false,
}: {
  meal: Meal;
  enableSwipeToDelete?: boolean;
}) {
  const { isSaved, toggleSaved, removeSaved } = useSavedMeals();
  const saved = isSaved(meal.id);

  const renderRightSwipeToDelete = () => {
    return (
      <View style={styles.deleteContainer}>
        <Pressable
          style={styles.deleteButton}
          onPress={() => removeSaved(meal.id)}
          hitSlop={8}
        >
          <Ionicons name="trash" size={22} color="#ff3b30" />
        </Pressable>
      </View>
    );
  };

  const cardContent = (
    <View style={styles.card}>
      <Pressable
        style={styles.saveButton}
        onPress={() => toggleSaved(meal.id)}
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
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
    </View>
  );

  if (!enableSwipeToDelete) {
    return cardContent;
  }

  return (
    <Swipeable renderRightActions={renderRightSwipeToDelete}>
      {cardContent}
    </Swipeable>
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
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  deleteButton: {
    backgroundColor: "#ffe5e3", // light reddish-white
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 16,
  },
});
