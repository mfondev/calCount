import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native";
import { useSendMessage } from "@/constants/api";
import AiResponse from "@/components/aiChat/aiResponse";

type ChatMessage = {
  id: string;
  role: "user" | "ai";
  text: string;
};

export default function AskAi() {
  const inputRef = useRef<TextInput>(null);
  const scrollRef = useRef<ScrollView>(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { mutate, isPending } = useSendMessage();

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage(""); 

    mutate(message, {
      onSuccess: (response) => {
        const aiMessage: ChatMessage = {
          id: Date.now().toString() + "-ai",
          role: "ai",
          text: response,
        };
        setMessages((prev) => [...prev, aiMessage]);
      },
    });
  };

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages, isPending]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <Text style={styles.title}>Ask AI</Text>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      >
        <AiResponse messages={messages} isPending={isPending} />
      </ScrollView>

      <View style={styles.aiButtonsContainer}>
        <Pressable>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>

        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
            multiline
            placeholder="Ask anything"
            style={styles.input}
            value={message}
            onChangeText={setMessage}
          />
          <Pressable onPress={handleSend}>
            {message.trim() ? (
              <Ionicons name="send" size={22} color="black" />
            ) : (
              <Entypo name="sound" size={22} color="black" />
            )}
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ede5",
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    // padding: 20,
    // paddingBottom: 20,
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
    marginVertical: 10,

  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  chatContainer: {
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
});  