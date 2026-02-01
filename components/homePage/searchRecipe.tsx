import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchRecipe({ header }: { header?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      <View style={styles.searchBar}>
        <AntDesign name="search" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search Recipe.."
          placeholderTextColor="#000"
        />

        <Ionicons name="options-sharp" size={20} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    color: "#000",
    fontSize: 36,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 16,
    height: 58,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    color: "#000",
    marginHorizontal: 8,
    fontSize: 16,
  },
});
