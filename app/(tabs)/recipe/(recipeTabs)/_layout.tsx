import SearchRecipe from "@/components/homePage/searchRecipe";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
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
const TopTab = createMaterialTopTabNavigator();

export default function RecipeLayout() {
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
      <TopTab.Navigator
        backBehavior="history"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            marginHorizontal: 16,
            borderRadius: 12,
            shadowOpacity: 0,
          },
          tabBarIndicatorStyle: {
            height: "70%",
            backgroundColor: "#3e9401",
            borderRadius: 10,
            top: "15%",
            width: "22%",
            marginHorizontal: 4,
            
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "400",
            textTransform: "none",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#000",
          tabBarItemStyle: {
            borderRadius: 220,
          },
          tabBarPressColor: "transparent",
        }}
      >
        <TopTab.Screen name="Breakfast" component={index} />
        <TopTab.Screen name="Lunch" component={Lunch} />
        <TopTab.Screen name="Dinner" component={Dinner} />
        <TopTab.Screen name="Snacks" component={Snacks} />
      </TopTab.Navigator>
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
