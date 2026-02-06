import { router } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActionButton } from "@/components/homePage/actionButton";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create New</Text>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="close-circle" size={28} color="#64748b" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>What would you like to add?</Text>

        <ActionButton
          icon="restaurant"
          title="Add Recipe"
          description="Create a new recipe"
          href="/modal"
        />

        <ActionButton
          icon="nutrition"
          title="Log Meal"
          description="Track what you ate"
          href="/modal"
        />

        <ActionButton
          icon="barbell"
          title="Track Workout"
          description="Log your exercise"
          href="/modal"
        />

        <ActionButton
          icon="chatbubbles"
          title="Ask AI"
          description="Get AI-powered insights"
          href="/askAi"
        />
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

  content: {
    padding: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 20,
  },
});
