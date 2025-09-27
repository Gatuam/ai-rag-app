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
    if (!res.data) throw new Error("No response stream");
    const data = res.data;
    const reasoning = res.data.message.reasoning;

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text:
          "This is AI response to: " + data?.message?.content ||
          "This is AI response to: " + data,
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
    <div className="flex flex-col justify-center items-center h-full min-w-md w-full max-w-7xl mx-auto  gap-y-3 px-2 md:px-6 py-2 pt-0">
      <Card className=" relative  flex h-full overflow-y-auto  w-full flex-grow  scrollbar shadow-xl border   ">
        <div className=" absolute -z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:84px_94px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
                <div className="flex w-full justify-end opacity-0 group-hover:opacity-95 ">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(msg.text)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className=" pb-4 ">
              <div className="p-3 rounded-lg max-w-3xs bg-muted text-sm md:text-shadow-md text-accent-foreground animate-pulse ">
                AI is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
      </Card>

      <div className="flex space-x-2 w-full">
        <div className=" min-h-30 max-h-30 w-full  mx-auto relative border rounded-xl bg-gradient-to-b from-chart-2/30 to-chart-2/30 p-[0.1px] shadow-xl">
          <div className="  absolute top-0 left-4 bg-gradient-to-r from-transparent via-chart-2 to-transparent rounded-lg w-[90%] h-[2px]  blur-xs animate-pulse " />

          <div className=" absolute bottom-0 left-4 bg-gradient-to-r from-transparent via-chart-2 to-transparent rounded-lg w-[90%] h-[2px]  blur-xs animate-pulse " />
          <Textarea
            className="h-full w-full !bg-background !focus:outline-0 !ring-0 pt-3 resize-none !focus:ring-offset-0 rounded-xl "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            className=" absolute right-2 bottom-2 h-9 bg-gradient-to-b from-chart-2 to-chart-2/60 hover:bg-gradient-to-t text-accent-foreground shadow-2xl"
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
