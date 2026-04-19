import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Link, Href } from "expo-router";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";

export default function index() {
  const HAS_ONBOARDED_KEY = "has_onboarded";

  const finishOnboarding = async () => {
    await AsyncStorage.setItem(HAS_ONBOARDED_KEY, "true");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>calCount</Text>
      <Link href="/onboarding/sheet">Finish Onboarding</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "MaintakerDemo-ExtraBold"
  },
});
