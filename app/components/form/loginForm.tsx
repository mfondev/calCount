import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";

export default function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  const handleGoogle = () => {};

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>First name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="transparent"
              autoCapitalize="words"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="transparent"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="transparent"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.helperText}>Minimum 8 characters.</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>create</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleBtn}>
            <Image
              source={require("../../../assets/images/apple.png")}
              style={{ width: 28, height: 20 }}
            />
            <Text style={styles.appleBtnText}>Sign in with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleBtn} onPress={handleGoogle}>
            <Image
              source={require("../../../assets/images/google.png")}
              style={{ width: 14, height: 14 }}
            />

            <Text style={styles.googleBtnText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termsRow}>
          <Text style={styles.termsText}>
            By continuing, you agree to calCount's{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Terms &amp; Conditions</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}> and </Text>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  container: { flex: 1, paddingHorizontal: 20 },
  header: { alignItems: "center", paddingTop: 5, marginBottom: 36 },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginBottom: 6,
  },
  sub: { fontSize: 15, color: "#888" },

  form: { gap: 15 },

  fieldGroup: {
    gap: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.black,
    marginBottom: 2,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.black,
    paddingVertical: 5,
    fontSize: 15,
    color: "#1a1a1a",
    backgroundColor: "transparent",
  },
  helperText: {
    fontSize: 14,
    color: Colors.accent,
    marginTop: 0,
  },

  forgot: {
    color: Colors.black,
    fontSize: 13,
    textAlign: "right",
    marginTop: -30,
  },
  loginBtn: {
    backgroundColor: Colors.buttonGreen,
    borderRadius: 9,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 30,
  },
  loginBtnText: { color: "#fff", fontSize: 14, textTransform: "uppercase" },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 4,
  },
  // line: { flex: 1, height: 1, backgroundColor: "#ddd" },
  // orText: { color: "#999", fontSize: 13 },
  appleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
    borderRadius: 9,
    paddingVertical: 14,
    // gap: 10,
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 9,
    paddingVertical: 14,
    gap: 10,
  },
  googleIcon: { fontSize: 16, fontWeight: "800", color: "#4285F4" },
  googleBtnText: {
    fontSize: 13,
    fontWeight: 500,

    color: Colors.black,
    textTransform: "uppercase",
  },
  appleBtnText: {
    fontSize: 13,
    fontWeight: 500,
    color: "#fff",
    textTransform: "uppercase",
  },

  termsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 24,
    paddingHorizontal: 8,
  },
  termsText: { fontSize: 12, color: "#888" },
  termsLink: {
    fontSize: 12,
    color: "#242ad4",
    textDecorationLine: "underline",
  },

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
