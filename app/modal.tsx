import { router, Stack } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create New</Text>
        <Pressable style={styles.closeButton} onPress={() => router.back()}>
          <Ionicons name="close-circle" size={28} color="#64748b" />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>What would you like to add?</Text>

        <Pressable style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Ionicons name="restaurant" size={24} color="#3e9401" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.actionText}>Add Recipe</Text>
            <Text style={styles.actionDescription}>Create a new recipe</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
        </Pressable>

        <Pressable style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Ionicons name="nutrition" size={24} color="#3e9401" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.actionText}>Log Meal</Text>
            <Text style={styles.actionDescription}>Track what you ate</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
        </Pressable>

        <Pressable style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Ionicons name="barbell" size={24} color="#3e9401" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.actionText}>Track Workout</Text>
            <Text style={styles.actionDescription}>Log your exercise</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
        </Pressable>
        <Pressable style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubbles" size={24} color="#3e9401" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.actionText}>Ask Ai</Text>
            <Text style={styles.actionDescription}>Get AI-powered insights</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#cbd5e1" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
  },

  closeButton: {
    padding: 4,
  },

  content: {
    padding: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 20,
  },

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