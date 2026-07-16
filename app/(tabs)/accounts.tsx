import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";

export default function AccountsScreen() {
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
        <Text style={styles.subtitle}>Passionate about food and cook 🍲🥗🍤</Text>
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

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareBtnText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <View style={styles.tabItem}>
          <Ionicons name="restaurant-outline" size={18} color="#888" />
          <Text style={styles.tabText}>Recipes</Text>
        </View>
        <View style={[styles.tabItem, styles.tabItemActive]}>
          <Ionicons name="images-outline" size={18} color="#000" />
          <Text style={[styles.tabText, styles.tabTextActive]}>Gallery</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="pulse-outline" size={18} color="#888" />
          <Text style={styles.tabText}>Activity</Text>
        </View>
      </View>

      {/* Food Photos */}
      {/* <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Food Photos</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View> */}

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photoRow}>
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            source={require("@/assets/images/profile.png")} // swap with real food photos
            style={[styles.foodPhoto, i === 3 && styles.foodPhotoActive]}
          />
        ))}
      </ScrollView> */}

      {/* Favorite Recipes */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Favorite Recipes</Text>
      </View>

      <RecipeCard
        title="Peach Salad"
        category="Salad"
        rating={4.7}
        reviews={123}
        kcal={230}
        time={15}
      />
      <RecipeCard
        title="Greek Salad"
        category="Salad"
        rating={4.8}
        reviews={185}
        kcal={210}
        time={12}
      />
    </View>
  );
}

function RecipeCard({
  title,
  category,
  rating,
  reviews,
  kcal,
  time,
}: {
  title: string;
  category: string;
  rating: number;
  reviews: number;
  kcal: number;
  time: number;
}) {
  return (
    <TouchableOpacity style={styles.recipeCard}>
      <Image
        source={require("@/assets/images/profile.png")} 
        style={styles.recipeImage}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.recipeTitle}>{title}</Text>
        <View style={styles.recipeMetaRow}>
          <Text style={styles.recipeCategory}>{category}</Text>
          <Ionicons name="star" size={12} color="#f5a623" />
          <Text style={styles.recipeRating}>
            {rating} ({reviews})
          </Text>
        </View>
        <View style={styles.recipeMetaRow}>
          <Text style={styles.recipeSub}>🔥 {kcal} kCal</Text>
          <Text style={styles.recipeSub}>⏱ {time} min</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#ccc" />
    </TouchableOpacity>
  );
}

const AVATAR_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: '#fff',
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
    marginTop: 16,
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
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  editBtn: {
    flex: 1,
    backgroundColor: "#d8d8b0",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  editBtnText: {
    fontWeight: "600",
    color: "#333",
  },
  shareBtn: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  shareBtnText: {
    fontWeight: "600",
    color: "#333",
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  tabItem: {
    alignItems: "center",
    gap: 4,
    opacity: 0.6,
  },
  tabItemActive: {
    opacity: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 12,
    color: "#888",
  },
  tabTextActive: {
    color: "#000",
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  seeAll: {
    fontSize: 13,
    color: "#888",
  },
  photoRow: {
    paddingLeft: 20,
  },
  foodPhoto: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 10,
  },
  foodPhotoActive: {
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  recipeCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 12,
  },
  recipeImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  recipeMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  recipeCategory: {
    fontSize: 12,
    color: "#888",
    marginRight: 4,
  },
  recipeRating: {
    fontSize: 12,
    color: "#888",
  },
  recipeSub: {
    fontSize: 12,
    color: "#888",
  },
});