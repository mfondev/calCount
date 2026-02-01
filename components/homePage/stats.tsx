import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MacroItem = ({ label, value }: { label: string; value: string }) => {
  const [current, total] = value.split("/");

  return (
    <View style={styles.macroItem}>
      <Text style={styles.macroLabel}>{label}</Text>

      <Text style={styles.macroValue}>
        {current}
        <Text style={styles.macroDivider}> / </Text>
        <Text style={styles.macroTotal}>{total}</Text>
      </Text>
    </View>
  );
};

export default function Stats() {
  return (
    <View style={styles.container}>
      <Text style={styles.eatenText}>Eaten 3,143</Text>
      <View style={styles.kcalRow}>
        <Text style={styles.kcalNumber}>456</Text>
        <Text style={styles.kcalText}>kcal over</Text>
      </View>
      <Text style={styles.burnedText}>Burned 650</Text>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Stats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.macroContainer}>
        <MacroItem label="Carbs" value="251/535g" />
        <MacroItem label="Protein" value="120/180g" />
        <MacroItem label="Fat" value="65/90g" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  eatenText: {
    color: "#000",
    fontSize: 16,
    textAlign: "left",
    marginBottom: 8,
  },

  kcalRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  kcalNumber: {
    color: "#000",
    fontSize: 112,
    fontWeight: "700",
    marginRight: 6,
  },

  kcalText: {
    color: "#000",
    fontSize: 26,
    marginBottom: 20,
  },

  burnedText: {
    // color: "#fff",
    fontSize: 16,
    marginBottom: 16,
  },

  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "transparent",
    width: "30%",
  },

  buttonText: {
    // color: "#fff",
    fontSize: 16,
  },

  macroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  macroItem: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    height: 100,
    width: "31%",
  },

  macroLabel: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginBottom: 6,
  },

  macroValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  macroDivider: {
    color: "#000",
  },

  macroTotal: {
    color: "#9CA3AF",
  },
});
