import { StyleSheet, Text, View, Modal } from "react-native";
import { Stack } from "expo-router";

export default function onBoardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"  />
      <Stack.Screen
        name="sheet"
        options={{
          title: "sheet",
          headerShown: false,
          presentation: "card",
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          sheetInitialDetentIndex: 0,
          sheetAllowedDetents: [0.65, 1],
          sheetCornerRadius: 20,
          sheetExpandsWhenScrolledToEdge: true,
          sheetElevation: 24,
          //   contentStyle: { backgroundColor: Colors.gray },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
