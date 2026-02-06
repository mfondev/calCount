import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function AskAi() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask AI</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Get AI-powered insights on meals, calories, and more
        </Text>
      </View>
      <View style={styles.aiButtonsContainer}>
        <Pressable>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            placeholder="Ask Ai"
            style={styles.input}
            placeholderTextColor="#000"
          />
          <Pressable>
            <Entypo name="sound" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 16,
    // color: "#64748b",
    textAlign: "center",
  },
    aiButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "90%",
  },
  input: {
    flex: 1,
  },
});
