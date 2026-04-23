import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HAS_ONBOARDED_KEY = "has_onboarded";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    "MaintakerDemo-ExtraBold": require("../assets/fonts/maintaker-demo/MaintakerDemo-ExtraBold.otf"),
  });

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  // if (!loaded && !error) {
  //   return null;
  // }
  useEffect(() => {
  if (!loaded && !error) return; // wait for fonts

  const init = async () => {
    await SplashScreen.hideAsync();
    
    try {
      const hasOnboarded = await AsyncStorage.getItem(HAS_ONBOARDED_KEY);
      router.replace(hasOnboarded === null ? "/onboarding" : "/(tabs)");
    } catch {
      router.replace("/onboarding");
    }
  };

  init();
}, [loaded, error]);

// if (!loaded && !error) {
//   return null; // ← keep this!
// }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              title: "Modal",
              headerShown: false,
              contentStyle: {
                backgroundColor: "#000",
              },
            }}
          />
          <Stack.Screen
            name="askAi"
            options={{
              presentation: "modal",
              title: "Modal",
              headerShown: false,
              contentStyle: {
                backgroundColor: "#e2ede5",
              },
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
