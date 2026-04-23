import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "@/constants/theme";

const HAS_ONBOARDED_KEY = "has_onboarded";

export default function Index() {
  // useEffect(() => {
  //   const checkOnboarding = async () => {
  //     try {
  //       const hasOnboarded = await AsyncStorage.getItem(HAS_ONBOARDED_KEY);

  //       if (hasOnboarded === null) {
  //         router.replace("/onboarding");
  //       } else {
  //         router.replace("/(tabs)");
  //       }
  //     } catch {
  //       router.replace("/onboarding");
  //     }
  //   };

  //   checkOnboarding();
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <ActivityIndicator size="large" color={Colors.buttonGreen} />
    </View>
  );
}