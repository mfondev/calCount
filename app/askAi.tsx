import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSendMessage } from "@/constants/api";

export default function AskAi() {
  const inputRef = useRef<TextInput>(null);
  const [message, setMessage] = useState("");
  const { mutate, isPending, error, data } = useSendMessage();

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 55 : 50}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Ask AI</Text>
          <View style={styles.content}>
            <Text style={styles.subtitle}>
              Get AI-powered insights on meals, calories, and more
            </Text>
          </View>
          <View style={styles.aiButtonsContainer}>
            <Pressable>
              <AntDesign name="plus" size={24} color="black" />
            </Pressable>
            <Pressable
              style={styles.inputContainer}
              onPress={() => inputRef.current?.focus()}
            >
              <TextInput
                ref={inputRef}
                multiline
                placeholder="Ask Anything"
                style={styles.input}
                placeholderTextColor="#000"
                blurOnSubmit={false}
                value={message}
                onChangeText={setMessage}
              />
              <Pressable onPress={message.trim() ? handleSend : undefined}>
                {message.trim() ? (
                  <Ionicons name="send" size={24} color="black" />
                ) : (
                  <Entypo name="sound" size={24} color="black" />
                )}
              </Pressable>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  aiButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 12,
    width: "90%",
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 4,
    fontSize: 16,
    maxHeight: 100,
    minHeight: 20,
  },
});
