import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const meals = [
  { name: "Avocado Toast", calories: "320 kcal", time: "15 min", difficulty: "Easy" },
  { name: "Greek Yogurt Bowl", calories: "280 kcal", time: "5 min", difficulty: "Easy" },
  { name: "Oat Pancakes", calories: "410 kcal", time: "20 min", difficulty: "Medium" },
];

export default function index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {meals.map((meal, i) => (
        <View key={i} style={styles.card}>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealMeta}>{meal.calories} · {meal.time}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{meal.difficulty}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  content: {
    padding: 16,
    gap: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
  },
  timeContainer:{
    
  },

  image: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#c8e6b0",
  },
  info: {
    flex: 1,
  },
  mealName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 3,
  },
  mealMeta: {
    fontSize: 12,
    color: "#888",
  },
  badge: {
    backgroundColor: "#e8f5e0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#3e9401",
  },
});