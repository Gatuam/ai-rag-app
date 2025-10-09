import ChatUI from "@/components/chat/chat-ui";
import { ModeToggle } from "@/components/global/mode-toggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || !session?.user) {
    redirect("/auth/sign-in");
  }
  return (
    <div className=" w-full h-full flex justify-center items-center ">
      <ChatUI />
    </div>
  );
}
