import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";

type actionProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  href: Href;
};

export function ActionButton({ icon, title, description, href }: actionProps) {
  return (
    <Pressable
      style={styles.actionButton}
      onPress={() => router.push(href)}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#3e9401" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.actionText}>{title}</Text>
        <Text style={styles.actionDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#e9f1e9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  actionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 2,
  },

  actionDescription: {
    fontSize: 13,
    color: "#64748b",
  },
});
