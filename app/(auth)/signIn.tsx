import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LoginForm from "@/components/form/loginForm";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function SignIn() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.header}>
          {/* <Text style={styles.emoji}>🍽️</Text> */}
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.sub}>
            Lets get you your personalized meal plan.
          </Text>
        </View>
        <LoginForm />
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Do have an account? </Text>
          <TouchableOpacity>
            <Link href="/createAccount" style={styles.signupLink}>
              <Text style={styles.signupLink}>Sign in</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  container: { flex: 1, paddingHorizontal: 20 },
  header: { alignItems: "center", paddingTop: 5, marginBottom: 0 },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginBottom: 6,
  },
  sub: { fontSize: 15, color: "#888" },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
  },
  signupText: { color: Colors.accent, fontSize: 14 },
  signupLink: { color: Colors.buttonGreen, fontSize: 14, fontWeight: "700" },
});
