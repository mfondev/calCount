import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import index from "./index";
import meals from "./meals";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import activity from "./activity";
import { Dimensions } from "react-native";

export default function AccountsScreen() {
  const TopTab = createMaterialTopTabNavigator();
  const { width: screenWidth } = Dimensions.get("window");
  const tabWidth = screenWidth / 3;
  const indicatorWidth = 40;
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          source={require("@/assets/images/profileCover.webp")}
          style={styles.cover}
        />

        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Profile</Text>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>@hannacook</Text>
            <Ionicons name="checkmark-circle" size={14} color="#4CAF50" />
          </View>
          <View style={styles.topBarIcons}>
            <Ionicons name="person-add-outline" size={20} color="#000" />
            <Ionicons name="settings-outline" size={20} color="#000" />
          </View>
        </View>

        <View style={styles.avatarWrapper}>
          <Image
            source={require("@/assets/images/profile.png")}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Name / bio */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Hanna Rosser</Text>
        <Text style={styles.subtitle}>Home Chef 👨‍🍳</Text>
        <Text style={styles.subtitle}>
          Passionate about food and cook 🍲🥗🍤
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>32</Text>
          <Text style={styles.statLabel}>Recipe</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>112</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>366</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>


      {/* Tabs */}
      <TopTab.Navigator
        screenOptions={{
            tabBarStyle: {
            backgroundColor: "#fff",
            marginHorizontal: 16,
            borderRadius: 12,
            shadowOpacity: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#3e9401",
            height: 3,
            width: indicatorWidth,
            marginLeft: (tabWidth - indicatorWidth) / 2,
            borderRadius: 2,
          },
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "600",
            textTransform: "none",
          },
        }}
      >
        <TopTab.Screen
          name="Meals"
          component={meals}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="restaurant-outline"
                size={18}
                color={color}
                style={{ marginRight: 4 }}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Gallery"
          component={index}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="images-outline"
                size={18}
                color={color}
                style={{ marginRight: 4 }}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Activity"
          component={activity}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="pulse-outline"
                size={18}
                color={color}
                style={{ marginRight: 4 }}
              />
            ),
          }}
        />
      </TopTab.Navigator>
    </View>
  );
}

const AVATAR_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerWrapper: {
    width: "100%",
    marginBottom: AVATAR_SIZE / 2 + 10,
  },
  cover: {
    width: "100%",
    height: 130,
  },
  topBar: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
  },
  topBarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  topBarIcons: {
    flexDirection: "row",
    gap: 14,
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  username: {
    color: Colors.black,
    fontSize: 13,
    fontWeight: "500",
  },
  avatarWrapper: {
    position: "absolute",
    bottom: -AVATAR_SIZE / 2,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  profileInfo: {
    alignItems: "center",
    gap: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 13,
    color: "#777",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginVertical: 16,

  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
  },
});
