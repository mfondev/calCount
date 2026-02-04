import { Image } from "expo-image";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchRecipe from "@/components/homePage/searchRecipe";
import Stats from "@/components/homePage/stats";
import ActionIcons from "@/components/homePage/actionIcons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <Image
              source={require("@/assets/images/avatar.svg")}
              style={styles.avatar}
              contentFit="cover"
            />
            <View>
              <Text style={styles.name}>Hi, Atauba</Text>
              <Text style={styles.welcome}>Welcome back</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <Ionicons
              name="notifications"
              size={20}
              color="black"
            />
          </View>
        </View>
        <SearchRecipe header="Today's Nutrition Overview"/>
        <ActionIcons />
        <Stats />
      </ScrollView>
      <Pressable 
        style={styles.fab}
        onPress={() => router.push('/modal')}
      >
        <Ionicons name="add" size={28} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2ede5",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 14,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },

  welcome: {
    fontSize: 13,
    color: "#475569",
    marginTop: 2,
  },

  notification: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#e9f1e9",
    borderWidth: 1,
    borderColor: "#ffffff", 
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },

  // FAB styles
  fab: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3e9401", 
    alignItems: "center",
    justifyContent: "center",
    elevation: 8, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});