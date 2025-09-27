import ChatUI from "@/components/chat/chat-ui";
import { ModeToggle } from "@/components/global/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-full flex justify-center items-center ">
      <ChatUI />
    </div>
  );
}
