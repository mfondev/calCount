import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const activityData = [
  {
    id: 1,
    type: "like",
    user: "chef_mike",
    avatar: "https://i.pravatar.cc/100?img=12",
    action: "liked your recipe",
    target: "Peach Salad",
    time: "2h",
  },
  {
    id: 2,
    type: "comment",
    user: "foodie_amy",
    avatar: "https://i.pravatar.cc/100?img=32",
    action: "commented on",
    target: "Greek Salad",
    time: "5h",
  },
  {
    id: 3,
    type: "follow",
    user: "kwame.cooks",
    avatar: "https://i.pravatar.cc/100?img=45",
    action: "started following you",
    target: "",
    time: "1d",
  },
  {
    id: 4,
    type: "like",
    user: "tasty_bites",
    avatar: "https://i.pravatar.cc/100?img=8",
    action: "liked your recipe",
    target: "Akara & Pap",
    time: "2d",
  },
];

const iconFor = (type: string) => {
  switch (type) {
    case "like":
      return { name: "heart", color: "#e0245e" };
    case "comment":
      return { name: "chatbubble", color: "#3e9401" };
    case "follow":
      return { name: "person-add", color: "#3e9401" };
    default:
      return { name: "notifications", color: "#888" };
  }
};

export default function Activity() {
  return (
    <View style={styles.container}>
        <FlatList
          data={activityData}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            const icon = iconFor(item.type);
            return (
              <View style={styles.row}>
                <View>
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />
                  <View style={[styles.iconBadge, { backgroundColor: icon.color }]}>
                    <Ionicons name={icon.name as any} size={10} color="#fff" />
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>
                    <Text style={styles.user}>{item.user}</Text> {item.action}
                    {item.target ? (
                      <Text style={styles.target}> {item.target}</Text>
                    ) : null}
                  </Text>
                  <Text style={styles.time}>{item.time} ago</Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <Text style={styles.empty}>No activity yet</Text>
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    gap: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  text: {
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
  user: {
    fontWeight: "700",
    color: "#1a1a1a",
  },
  target: {
    fontWeight: "600",
    color: "#3e9401",
  },
  time: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
  },
});