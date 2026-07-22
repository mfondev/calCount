import { Image } from "expo-image";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  Switch,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  type: "nav" | "toggle";
  value?: boolean;
  onToggle?: (val: boolean) => void;
  onPress?: () => void;
  danger?: boolean;
};

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [metricUnits, setMetricUnits] = useState(true);

  const handleLogout = () => {
    Alert.alert("Log out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log out",
        style: "destructive",
        //  onPress: () => router.replace("/login")
      },
    ]);
  };

  const accountItems: SettingItem[] = [
    {
      icon: "person-outline",
      label: "Edit Profile",
      type: "nav",
      onPress: () => router.push("/"),
    },
    {
      icon: "lock-closed-outline",
      label: "Change Password",
      type: "nav",
      onPress: () => {},
    },
    {
      icon: "card-outline",
      label: "Subscription",
      type: "nav",
      onPress: () => {},
    },
  ];

  const preferenceItems: SettingItem[] = [
    {
      icon: "notifications-outline",
      label: "Notifications",
      type: "toggle",
      value: notifications,
      onToggle: setNotifications,
    },
    {
      icon: "moon-outline",
      label: "Dark Mode",
      type: "toggle",
      value: darkMode,
      onToggle: setDarkMode,
    },
    {
      icon: "swap-horizontal-outline",
      label: "Metric Units",
      type: "toggle",
      value: metricUnits,
      onToggle: setMetricUnits,
    },
  ];

  const supportItems: SettingItem[] = [
    {
      icon: "help-circle-outline",
      label: "Help Center",
      type: "nav",
      onPress: () => {},
    },
    {
      icon: "document-text-outline",
      label: "Terms & Privacy",
      type: "nav",
      onPress: () => {},
    },
    {
      icon: "star-outline",
      label: "Rate the App",
      type: "nav",
      onPress: () => {},
    },
  ];

  const renderItem = (item: SettingItem, index: number, isLast: boolean) => (
    <Pressable
      key={item.label}
      style={[styles.row, isLast && styles.rowLast]}
      onPress={item.onPress}
      disabled={item.type === "toggle"}
    >
      <View style={styles.rowLeft}>
        <View style={[styles.iconWrap, item.danger && styles.iconWrapDanger]}>
          <Ionicons
            name={item.icon}
            size={17}
            color={item.danger ? "#dc2626" : "#3e9401"}
          />
        </View>
        <Text style={[styles.rowLabel, item.danger && styles.rowLabelDanger]}>
          {item.label}
        </Text>
      </View>

      {item.type === "toggle" ? (
        <Switch
          value={item.value}
          onValueChange={item.onToggle}
          trackColor={{ false: "#d1d5db", true: "#a3d977" }}
          thumbColor={item.value ? "#3e9401" : "#f4f4f5"}
        />
      ) : (
        <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
      )}
    </Pressable>
  );

  const renderSection = (title: string, items: SettingItem[]) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>
        {items.map((item, i) => renderItem(item, i, i === items.length - 1))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e2ede5" }}>
      <View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
        //   showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Text style={styles.title}>Settings</Text>

          {/* Profile card */}
          <Pressable
            style={styles.profileCard}
            // onPress={() => router.push("/edit-profile")}
          >
            <Image
              source={require("@/assets/images/avatar.svg")}
              style={styles.avatar}
              contentFit="cover"
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>Atauba Johnson</Text>
              <Text style={styles.profileEmail}>atauba@example.com</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
          </Pressable>

          {renderSection("Account", accountItems)}
          {renderSection("Preferences", preferenceItems)}
          {renderSection("Support", supportItems)}

          {/* Logout */}
          <Pressable style={styles.logoutBtn} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={18} color="#dc2626" />
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>

          <Text style={styles.version}>Version 1.0.0</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 14,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  profileName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },

  profileEmail: {
    fontSize: 12.5,
    color: "#64748b",
    marginTop: 2,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: 0.4,
    marginBottom: 8,
    marginLeft: 4,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },

  rowLast: {
    borderBottomWidth: 0,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#e9f1e9",
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapDanger: {
    backgroundColor: "#fee2e2",
  },

  rowLabel: {
    fontSize: 13.5,
    fontWeight: "500",
    color: "#0f172a",
  },

  rowLabelDanger: {
    color: "#dc2626",
  },

  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 13,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#fecaca",
  },

  logoutText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dc2626",
  },

  version: {
    textAlign: "center",
    fontSize: 11.5,
    color: "#94a3b8",
    marginTop: 14,
  },
});
