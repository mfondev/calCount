import { ScrollView, StatusBar, Text, View } from "react-native";

export default function RecipeScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "#e2ede5" }}
    >
      <StatusBar barStyle="dark-content" />
      <View style={{ padding: 16 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Recipes</Text>
      </View>
    </ScrollView>
  );
}
