import { useSavedMeals } from "@/utils/mealContext";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  const { savedMealIds } = useSavedMeals();
  console.log("Saved meal IDs:", savedMealIds.length); // Log the saved meal IDs
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeTabs
        minimizeBehavior="onScrollDown"
        backgroundColor="black"
        iconColor="#3e9401"
        titlePositionAdjustment={{ horizontal: 8, vertical: 5 }}
        blurEffect="systemDefault"
        labelStyle={{
          color: DynamicColorIOS({
            dark: "white",
            light: "black",
          }),
        }}
        tintColor={DynamicColorIOS({
          dark: "#3e9401",
          light: "#3e9401",
        })}
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label hidden>Home</NativeTabs.Trigger.Label>
          {/* {Platform.select({
          ios: <NativeTabs.Trigger.Icon sf="house.fill" md="home" />,
          android: (
            <NativeTabs.Trigger.Icon drawable="custom_android_drawable" />
          ),
        })} */}
          <NativeTabs.Trigger.Icon
            sf={{ default: "house", selected: "house.fill" }}
            // md={{ default: 'home', selected: 'home_filled' }}
          />

          {/* <Icon sf="house.fill" drawable="custom_android_drawable" /> */}
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="recipe">
          <NativeTabs.Trigger.Icon
            sf={{ default: "book", selected: "book.fill" }}
            drawable="custom_recipe_drawable"
          />
          <NativeTabs.Trigger.Label hidden>Recipe</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="saved">
          <NativeTabs.Trigger.Icon
            sf={{ default: "bookmark", selected: "bookmark.fill" }}
            drawable="custom_saved_drawable"
          />
          {savedMealIds.length > 0 && (
            <NativeTabs.Trigger.Badge>
              {savedMealIds.length.toString()}
            </NativeTabs.Trigger.Badge>
          )}

          <NativeTabs.Trigger.Label hidden>Saved</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="accounts">
          <NativeTabs.Trigger.Icon
            sf={{ default: "person", selected: "person.fill" }}
            drawable="custom_account_drawable"
          />
          <NativeTabs.Trigger.Label hidden>Accounts</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </GestureHandlerRootView>
  );
}
