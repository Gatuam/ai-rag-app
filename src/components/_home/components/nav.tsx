"use client";

import { ModeToggle } from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "chat", label: "Chat", href: "/chat" },
  { id: "about", label: "About", href: "/about" },
];

export default function Navbar() {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const { data: session } = authClient.useSession();
  const [active, setActive] = useState("home");

  return (
    <div className=" flex items-center justify-between px-4 md:px-1 border-b py-2 shadow-md w-full bg-background ">
      <nav className=" md:px-5 py-3 flex !justify-between items-center w-full max-w-7xl mx-auto ">
        <div className=" flex items-center justify-center gap-x-3">
          <Link href={"/"} className=" flex justify-center items-center gap-2">
            <div className="text-md md:text-2xl font-semibold flex gap-x-3">
              <Image src={"/code.svg"} alt="logo" width={20} height={30} />
              <p className=" text-xl">Helix-AI</p>
            </div>
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-4">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`${
                    active === item.id
                      ? "text-chart-2 text-sm font-semibold"
                      : "text-accent-foreground hover:text-accent-foreground text-sm"
                  } transition-colors`}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
          {!!session?.user && (
            <Button
              onClick={() => handleSignOut()}
              variant={"secondary"}
              className=" h-8"
            >
              Sign-out
            </Button>
          )}
          {!session?.user && (
            <Button
              onClick={() => {
                router.push("/auth/sign-in");
              }}
              variant={"secondary"}
              className=" h-8"
            >
              Sign-In
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}
