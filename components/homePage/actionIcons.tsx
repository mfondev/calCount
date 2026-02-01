import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function ActionIcons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="image-outline" size={30} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="camera-outline" size={30} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <MaterialIcons name="keyboard-voice" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 24,
  },

  iconWrapper: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
});
