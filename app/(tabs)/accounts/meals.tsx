import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { meals } from "@/utils/data";

export default function Meals() {
  const router = useRouter();

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
        //   onPress={() => router.push(`/meal/${item.id}`)}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.category}>{item.category}</Text>
              {item.rating && (
                <>
                  <Ionicons name="star" size={12} color="#f5a623" />
                  <Text style={styles.rating}>
                    {item.rating} ({item.reviews})
                  </Text>
                </>
              )}
            </View>
            <View style={styles.metaRow}>
              <Text style={styles.sub}>🔥 {item.calories}</Text>
              {item.time && <Text style={styles.sub}>⏱ {item.time}</Text>}
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#ccc" />
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <Text style={styles.empty}>No recipes yet</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    gap: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 3,
  },
  category: {
    fontSize: 12,
    color: "#888",
    marginRight: 6,
  },
  rating: {
    fontSize: 12,
    color: "#888",
  },
  sub: {
    fontSize: 12,
    color: "#888",
    marginRight: 10,
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
  },
});