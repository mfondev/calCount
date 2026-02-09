import { StyleSheet, Text, View } from "react-native";

type ChatMessage = {
  id: string;
  role: "user" | "ai";
  text: string;
};

type Props = {
  messages: ChatMessage[];
  isPending: boolean;
};

export default function AiResponse({ messages, isPending }: Props) {
  if (messages.length === 0) {
    return (
      <Text style={styles.subtitle}>
        Get AI-powered insights on meals, calories, and more
      </Text>
    );
  }

  return (
    <>
      {messages.map((msg) => (
        <View
          key={msg.id}
          style={[
            styles.messageBubble,
            msg.role === "user" ? styles.userBubble : styles.aiBubble,
          ]}
        >
          <Text style={styles.messageText}>{msg.text}</Text>
        </View>
      ))}
      {isPending && (
        <View style={[styles.messageBubble, styles.aiBubble]}>
          <Text style={styles.messageText}>...</Text>
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    marginTop: 40,
    color: "#555",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 14,
    marginVertical: 6,
  },
  userBubble: {
    backgroundColor: "#cfe9bc",
    alignSelf: "flex-end",
  },
  aiBubble: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#000",
  },
});

