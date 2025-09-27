"use client";

import { ModeToggle } from "@/components/global/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "chat", label: "Chat", href: "/chat" },
  { id: "about", label: "About", href: "/about" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div className=" flex items-center justify-between px-4 md:px-1 border-b py-2 shadow-md w-full bg-background ">
      <nav className=" md:px-5 py-3 flex !justify-between items-center w-full max-w-7xl mx-auto ">
        <div className=" flex items-center justify-center gap-x-3">
          <Link href={"/"}>
            <div className="text-md md:text-2xl font-semibold text-chart-2 flex gap-x-3">
              Helix-AI
              <Image src={"/code.svg"} alt="logo" width={30} height={30} />
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
        </div>
      </nav>
    </div>
  );
}
