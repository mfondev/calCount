import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";

export default function ActionIcons() {
  return (
    <View style={styles.container}>
      <GlassView
        style={styles.glassView}
        isInteractive
        tintColor="#b9dba0"
      >
        <Ionicons name="image-outline" size={30} color="#000" />
      </GlassView>

      <GlassView style={styles.glassView} isInteractive tintColor="#b9dba0">
        <Ionicons name="camera-outline" size={30} color="#000" />
      </GlassView>

      <GlassView style={styles.glassView} isInteractive tintColor="#b9dba0">
        <MaterialIcons name="keyboard-voice" size={30} color="#000" />
      </GlassView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    },

  glassView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 20,
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
