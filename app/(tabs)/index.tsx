import { Image } from "expo-image";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import SearchRecipe from "@/components/homePage/searchRecipe";
import Stats from "@/components/homePage/stats";
import ActionIcons from "@/components/homePage/actionIcons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const POPULAR_RECIPES = [
  { id: "1", name: "Jollof Rice", time: "35 min", calories: "420 kcal" },
  { id: "2", name: "Grilled Chicken", time: "25 min", calories: "310 kcal" },
  { id: "3", name: "Veggie Bowl", time: "15 min", calories: "280 kcal" },
];

const TIPS = [
  "Swap white rice for cauliflower rice to cut carbs by 70%",
  "Drink a glass of water before meals — it curbs overeating",
  "Air-frying uses up to 80% less oil than deep frying",
];

export default function HomeScreen() {
  const todayTip = TIPS[new Date().getDate() % TIPS.length];

  return (
    // <SafeAreaView>

    <View style={styles.container}>
      <ScrollView
        // style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <Image
              source={require("@/assets/images/avatar.svg")}
              style={styles.avatar}
              contentFit="cover"
            />
            <View>
              <Text style={styles.name}>Hi, Atauba</Text>
              <Text style={styles.welcome}>Welcome back</Text>
            </View>
          </View>
          <Pressable
            style={styles.notification}
            onPress={() => router.push("/accounts/activity")}
          >
            <BlurView
              intensity={50}
              tint="light"
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.notificationTint} />
            <Ionicons name="notifications" size={20} color="black" />
          </Pressable>
        </View>

        {/* Streak banner */}
        <View style={styles.streakBanner}>
          <View style={styles.streakIconWrap}>
            <Ionicons name="flame" size={18} color="#f97316" />
          </View>
          <Text style={styles.streakText}>
            <Text style={styles.streakNumber}>5 day</Text> cooking streak — keep
            it going!
          </Text>
        </View>

        <SearchRecipe header="Nutrition Insights" />
        <ActionIcons />
        <Stats />

        {/* Random tip card */}
        <View style={styles.tipCard}>
          <View style={styles.tipIconWrap}>
            <Ionicons name="bulb" size={18} color="#3e9401" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.tipLabel}>Tip of the day</Text>
            <Text style={styles.tipText}>{todayTip}</Text>
          </View>
        </View>

        {/* Popular Recipes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Recipes</Text>
          <Pressable onPress={() => router.push("/recipe")}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recipeRow}
        >
          {POPULAR_RECIPES.map((recipe) => (
            <Pressable key={recipe.id} style={styles.recipeCard}>
              <View style={styles.recipeImagePlaceholder} />
              <Text style={styles.recipeName}>{recipe.name}</Text>
              <View style={styles.recipeMetaRow}>
                <View style={styles.recipeMetaItem}>
                  <Ionicons name="time-outline" size={12} color="#64748b" />
                  <Text style={styles.recipeMetaText}>{recipe.time}</Text>
                </View>
                <View style={styles.recipeMetaItem}>
                  <Ionicons name="flame-outline" size={12} color="#64748b" />
                  <Text style={styles.recipeMetaText}>{recipe.calories}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>

      <Pressable style={styles.fab} onPress={() => router.push("/modal")}>
        <Ionicons name="add" size={28} color="black" />
      </Pressable>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },

  scrollContent: {
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingBottom: 10,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
  },

  welcome: {
    fontSize: 12,
    color: "#475569",
    marginTop: 1,
  },

  notification: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  notificationTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 241, 233, 0.55)",
  },

  streakBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 14,
    marginBottom: 8,
    backgroundColor: "#fff7ed",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#fed7aa",
  },

  streakIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#ffedd5",
    alignItems: "center",
    justifyContent: "center",
  },

  streakText: {
    fontSize: 12,
    color: "#7c2d12",
    flex: 1,
  },

  streakNumber: {
    fontWeight: "700",
  },

  tipCard: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 14,
    marginTop: 6,
    marginBottom: 4,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    alignItems: "flex-start",
  },

  tipIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#e9f1e9",
    alignItems: "center",
    justifyContent: "center",
  },

  tipLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#3e9401",
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },

  tipText: {
    fontSize: 12.5,
    color: "#334155",
    lineHeight: 17,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },

  seeAll: {
    fontSize: 12,
    fontWeight: "500",
    color: "#3e9401",
  },

  recipeRow: {
    paddingHorizontal: 14,
    gap: 10,
  },

  recipeCard: {
    width: 138,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  recipeImagePlaceholder: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#e9f1e9",
    marginBottom: 6,
  },

  recipeName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 4,
  },

  recipeMetaRow: {
    flexDirection: "row",
    gap: 8,
  },

  recipeMetaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  recipeMetaText: {
    fontSize: 10.5,
    color: "#64748b",
  },

  fab: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3e9401",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
