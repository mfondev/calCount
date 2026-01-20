import { Image } from "expo-image";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Image
            source={require("@/assets/images/avatar.svg")}
            style={styles.avatar}
            contentFit="cover"
          />
          <View>
            <Text style={styles.name}>Atauba Gideon</Text>
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
    </ScrollView>
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
    // backgroundColor: "#ffffff",
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
});
