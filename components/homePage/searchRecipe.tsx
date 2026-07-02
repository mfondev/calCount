import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchRecipe({ header }: { header?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Today's</Text>
      <Text style={styles.title}>{header}</Text>
      <View style={styles.searchBar}>
        <AntDesign name="search" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search Recipe.."
          placeholderTextColor="#888"
        />
        <Ionicons name="options-sharp" size={20} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    fontWeight: "400",
    marginBottom: 2,
    marginTop: 12
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 14,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: "#e9f1e9",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    color: "#000",
    marginHorizontal: 8,
    fontSize: 15,
  },
});