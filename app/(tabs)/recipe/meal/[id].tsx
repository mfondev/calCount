import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { meals } from "@/utils/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSavedMeals } from "@/utils/mealContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/theme";
import {GlassView, isLiquidGlassAvailable} from "expo-glass-effect";


export default function MealId() {
  const params = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const recipe = meals.find((m) => m.id === parseInt(params.id));
  const { isSaved, toggleSaved } = useSavedMeals();

  if (!recipe) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFound}>Meal not found</Text>
      </SafeAreaView>
    );
  }

  const saved = isSaved(recipe.id);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = [450, 620];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          hitSlop={8}
        >
          <MaterialCommunityIcons
            name="arrow-left-thin"
            size={24}
            color="black"
          />
        </Pressable>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable
            style={styles.saveButton}
            hitSlop={8}
            onPress={() => toggleSaved(recipe.id)}
          >
            <MaterialIcons
              name={saved ? "favorite" : "favorite-border"}
              size={16}
              color={saved ? "#3e9401" : "#1a1a1a"}
            />
          </Pressable>
          <Pressable
            style={styles.saveButton}
            hitSlop={8}
            onPress={() => toggleSaved(recipe.id)}
          >
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={16}
              color={saved ? "#3e9401" : "#1a1a1a"}
            />
          </Pressable>
        </View>
      </View>

      <Image
        source={{ uri: recipe.imageUrl }}
        style={styles.imagePlaceholder}
        resizeMode="cover"
      />

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={0}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: Colors.primary }}
        // backgroundStyle={isLiquidGlassAvailable() ? { backgroundColor: "transparent" } : { backgroundColor: "#fff" }}
        handleIndicatorStyle={{ backgroundColor: "#ccc", width: 40 }}
      >
        <BottomSheetScrollView contentContainerStyle={styles.body}>
          {/* Title row + rating */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>{recipe.name}</Text>
            {recipe.rating && (
              <View style={styles.ratingPill}>
                <Ionicons name="star" size={14} color="#f5a623" />
                <Text style={styles.ratingText}>{recipe.rating}</Text>
              </View>
            )}
          </View>

          <Text style={styles.subtitle}>{recipe.description}</Text>

          {/* Meta row: kcal, time, difficulty */}
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <MaterialCommunityIcons name="fire" size={16} color="#3e9401" />
              <Text style={styles.metaText}>{recipe.calories}</Text>
            </View>
            {recipe.time && (
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={16} color="#3e9401" />
                <Text style={styles.metaText}>{recipe.time}</Text>
              </View>
            )}
            {recipe.difficulty && (
              <View style={styles.metaItem}>
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={16}
                  color="#3e9401"
                />
                <Text style={styles.metaText}>{recipe.difficulty}</Text>
              </View>
            )}
          </View>

          {recipe.tags && (
            <View style={styles.tagsRow}>
              {recipe.tags.map((tag, i) => (
                <View key={i} style={styles.tagPill}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.divider} />

          {/* Recipe steps */}
          <Text style={styles.sectionLabel}>Recipe</Text>
          <View style={styles.stepsContainer}>
            {recipe.recipe.map((step, index) => (
              <View key={index} style={styles.stepRow}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>

          {/* Reviews summary */}
          {recipe.reviews && (
            <>
              <View style={styles.divider} />
              <Text style={styles.sectionLabel}>Reviews</Text>
              <View style={styles.reviewsRow}>
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Ionicons
                      key={i}
                      name={i <= Math.round(recipe.rating ?? 0) ? "star" : "star-outline"}
                      size={16}
                      color="#f5a623"
                    />
                  ))}
                </View>
                <Text style={styles.reviewsText}>
                  {recipe.rating} ({recipe.reviews} reviews)
                </Text>
              </View>
            </>
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    width: 34,
    height: 34,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    height: 500,
    backgroundColor: "#c8e6b0",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    flexShrink: 1,
  },
  ratingPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 14,
    color: "#8a8f8a",
    marginTop: 4,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#f2f5f2",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  tagPill: {
    borderWidth: 1,
    borderColor: "#d3ddd5",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: "#3a3f3a",
  },
  divider: {
    height: 1,
    backgroundColor: "#d3ddd5",
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  stepsContainer: {
    gap: 14,
  },
  stepRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3e9401",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  stepNumberText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: "#3a3f3a",
  },
  reviewsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  starsRow: {
    flexDirection: "row",
    gap: 2,
  },
  reviewsText: {
    fontSize: 13,
    color: "#8a8f8a",
  },
  notFound: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#8a8f8a",
  },
});