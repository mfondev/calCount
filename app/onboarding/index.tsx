import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnboardingCarousel from "./onBoardingCarousel";

export default function Index() {
  const HAS_ONBOARDED_KEY = "has_onboarded";

  const finishOnboarding = async () => {
    await AsyncStorage.setItem(HAS_ONBOARDED_KEY, "true");
    router.replace("/login");
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  // const snapPoints = useMemo(() => ["50%"], []);
  const snapPoints = [350, 500];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>calCount</Text>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: "#fff" }}
        handleIndicatorStyle={{ backgroundColor: Colors.accent , width: 40,  }}
      >
        <BottomSheetView style={styles.sheetContent}>
          <OnboardingCarousel />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "MaintakerDemo-ExtraBold",
  },
  sheetContent: {
    flex: 1,
    padding: 20,
  },
});
