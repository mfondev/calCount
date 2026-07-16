import { Stack } from "expo-router";

export default function RecipeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(recipeTabs)" />
      <Stack.Screen name="meal/[id]" />
      <Stack.Screen name="sheet" />
    </Stack>
  );
}