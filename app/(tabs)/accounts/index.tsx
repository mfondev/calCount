import { StyleSheet, View, Image, FlatList, Dimensions } from "react-native";
import { meals } from "@/utils/data";
import { Colors } from "@/constants/theme";

const { width } = Dimensions.get("window");
const GAP = 4;
const COLUMNS = 3;
const ITEM_SIZE = (width - GAP * (COLUMNS - 1)) / COLUMNS;

export default function Gallery() {
  return (
    <View style={styles.container}>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id.toString()}
          numColumns={COLUMNS}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={{ gap: GAP }}
          renderItem={({ item }) => (
            <Image source={{ uri: item.imageUrl }} style={styles.photo} />
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
    // gap: 14,
  },
  grid: {
    gap: GAP,
    paddingBottom: 40,
  },
  photo: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: "#eee",
  },
});