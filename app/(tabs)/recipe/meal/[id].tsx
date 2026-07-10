import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function MealId() {
  const meal = useLocalSearchParams<{ id: string }>();
  console.log(meal, "meal");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MealId</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
