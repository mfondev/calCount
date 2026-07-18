import { StyleSheet, View, Image, FlatList, Dimensions } from "react-native";
import { meals } from "@/utils/data";

const { width } = Dimensions.get("window");
const GAP = 4;
const COLUMNS = 3;
const ITEM_SIZE = (width - GAP * (COLUMNS - 1)) / COLUMNS;

export default function Gallery() {
  return (
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
  );
}

const styles = StyleSheet.create({
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