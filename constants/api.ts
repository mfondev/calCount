import axios from "axios";
import {
  useQuery, //for fetching data
  useMutation, //for creating/updating/deleting data
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const GROQ_API_KEY = "random";

const axiosInstance = axios.create({
  baseURL: "https://api.groq.com/openai/v1/chat/completions",
  headers: {
    Authorization: `Bearer ${GROQ_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const sendMessage = async (text: string) => {
  const res = await axiosInstance.post("", {
    messages: [{ role: "user", content: text }],
    model: "llama-3.3-70b-versatile",
  });
  return res.data.choices[0]?.message?.content;
};

// export const sendMessage = async (message: string) => {
export const useSendMessage = () => {
  return useMutation({
    mutationFn: (message: string) => sendMessage(message),
  });
};
;
