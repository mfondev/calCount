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

const Tab = createMaterialTopTabNavigator();

export default function RecipeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#e2ede5", flex: 1 }}>
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
      <SearchRecipe header={"Nutritious Meal Ideas"} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            marginHorizontal: 16,
            borderRadius: 12,
            elevation: 0,
            shadowOpacity: 0,
          },
          
          tabBarIndicatorStyle: {
            height: "70%",
            backgroundColor: "#3e9401",
            borderRadius: 10,
            top: "15%",
            // marginHorizontal: 4,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "400",
            textTransform: "none",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#888",
          tabBarItemStyle: {
            borderRadius: 220,
          },
          tabBarPressColor: "transparent",
        }}
      >
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
