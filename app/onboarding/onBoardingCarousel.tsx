import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    emoji: "🥗",
    title: "Discover healthy meals, ready in minutes",
    subtitle: "Browse nutritious recipes, track calories, and build better eating habits effortlessly.",
  },
  {
    id: "2",
    emoji: "📊",
    title: "Track your calories with ease",
    subtitle: "Log meals in seconds and get real-time insights into your daily nutrition and calorie intake.",
  },
  {
    id: "3",
    emoji: "🎯",
    title: "Reach your health goals faster",
    subtitle: "Set personal targets, monitor your progress, and stay motivated every step of the way.",
  },
];

export default function OnboardingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const next = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setCurrentIndex(next);
    } else {
      router.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        scrollEnabled={false} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === currentIndex && styles.dotActive]}
          />
        ))}
      </View>

      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? "Start Your Journey" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingBottom: 16,
  },
  slide: {
    width: width - 48, 
    alignItems: "center",
  },
  emoji: {
    fontSize: 40,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 32,
    color: "#111",
    marginBottom: 10,
    textAlign: "center",
    
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    textAlign: "center",
  },
  dots: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 24,
    justifyContent: "center",
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: "#ddd",
  },
  dotActive: {
    width: 28,
    backgroundColor: Colors.buttonGreen, 
  },
  button: {
    backgroundColor: Colors.buttonGreen, 
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});