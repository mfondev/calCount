import { StyleSheet, Text, View, Modal } from "react-native";
import { Stack } from "expo-router";

export default function onBoardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"  />
    </Stack>
  );
}

const styles = StyleSheet.create({});
