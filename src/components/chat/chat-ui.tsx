"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, MoreHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { toast } from "sonner";
interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const res = await axios.post("/api/chat", {
      username: "bhai",
      message: userMessage.text,
    });
    console.log(res);
    if (!res.data) throw new Error("No response stream");
    const data = res.data;
    const message = data.message;
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: message?.content || "No res",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("Copy successfully");
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-center items-center h-full min-w-md w-full gap-y-3 px-2 md:px-6 py-2 pt-0 max-w-5xl mx-auto">
      <Card className=" relative  flex h-full overflow-y-auto  w-full flex-grow  scrollbar shadow-xl  border-none bg-transparent ">
        <CardContent className="space-y-3 h-full">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2 items-start pb-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className=" flex flex-col group ">
                <div
                  className={`p-2 px-4 rounded-lg  break-words py-2 text-sm md:text-md drop-shadow-2xl  ${
                    msg.sender === "user"
                      ? "bg-secondary shadow-xl text-accent-foreground max-w-xl"
                      : "text-accent-foreground max-w-3xl"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex w-full justify-end opacity-0 group-hover:opacity-95 mt-1 gap-x-1 ">
                  <Button
                    className="bg-accent h-8"
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(msg.text)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button className="bg-accent h-8" variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className=" pb-4 ">
              <div className="p-2 rounded-lg max-w-3xs bg-muted text-sm md:text-shadow-md text-accent-foreground animate-pulse ">
                AI is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
      </Card>

      <div className="flex space-x-2 w-full max-w-5xl mx-auto px-5 ">
        <div className=" min-h-30 max-h-30 w-full   mx-auto relative border rounded-xl bg-gradient-to-b from-chart-1/30 to-chart-2/30  shadow-xl ">
          <Textarea
            className="h-full w-full !bg-background !focus:outline-0 !ring-0 pt-3 resize-none !focus:ring-offset-0 rounded-xl !border-0 text-accent-foreground "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            className=" absolute right-2 bottom-2 h-9 bg-gradient-to-b from-chart-2 to-chart-2/30 hover:bg-gradient-to-t text-accent-foreground shadow-2xl"
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
