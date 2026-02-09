import axios from "axios";
import {
  useQuery, //for fetching data
  useMutation, //for creating/updating/deleting data
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { use } from "react";

const GROQ_API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.groq.com/openai",
  headers: {
    Authorization: `Bearer ${GROQ_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const sendMessage = async (text: string) => {
  try {
    const res = await axiosInstance.post("/v1/chat/completions", {
      messages: [{ role: "user", content: text }],
      model: "llama-3.3-70b-versatile",
    });
    return res.data.choices[0]?.message?.content;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// export const sendMessage = async (message: string) => {
export const useSendMessage = () => {
  return useMutation({
    mutationFn: (message: string) => sendMessage(message),
  });
};
 