import { Image } from "expo-image";
import { StyleSheet, ScrollView } from "react-native";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function SavedScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2ede5", 
  },
});
