import SearchRecipe from "@/components/homePage/searchRecipe";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dinner from "./dinner";
import Lunch from "./lunch";
import Snacks from "./snacks";
import index from "./index";

// const { Navigator } = createMaterialTopTabNavigator();
const Tab = createMaterialTopTabNavigator();

// export const MaterialTopTabs = withLayoutContext<
//   MaterialTopTabNavigationOptions,
//   typeof Navigator,
//   TabNavigationState<ParamListBase>,
//   MaterialTopTabNavigationEventMap
// >(Navigator);

export default function RecipeScreen() {
  return (
    <SafeAreaView
      //   contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "#e2ede5", flex: 1 }}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialCommunityIcons
            name="arrow-left-thin"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recipe</Text>
        <View style={{ width: 48 }} />
      </View>
      <SearchRecipe header={"Today's Nutritious Meal Ideas"} />
      {/* <MaterialTopTabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#e2ede5",
          },
          tabBarItemStyle: {
            paddingVertical: 8,
            paddingHorizontal: 12,
          },
          tabBarLabelStyle: {
            textTransform: "none",
            fontWeight: "600",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#5b8e37",
            height: "100%",
            borderRadius: 30,
            
          },
          
          tabBarIndicatorContainerStyle: {
            alignItems: "center",
          },
        }}
      >
        <MaterialTopTabs.Screen options={{ title: "Breakfast" }} name="index" />
        <MaterialTopTabs.Screen options={{ title: "Lunch" }} name="lunch" />
        <MaterialTopTabs.Screen options={{ title: "Dinner" }} name="dinner" />
        <MaterialTopTabs.Screen options={{ title: "Snacks" }} name="snacks" />
      </MaterialTopTabs> */}
      <Tab.Navigator 
       screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        // tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
        <Tab.Screen name="Breakfast" component={index} />
        <Tab.Screen name="Lunch" component={Lunch} />
        <Tab.Screen name="Dinner" component={Dinner} />
        <Tab.Screen name="Snacks" component={Snacks} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
    color: "#000",
  },
});
