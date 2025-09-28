"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlignVerticalSpaceAround,
  ArrowUp,
  LineSquiggle,
  SquareSplitHorizontalIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TypewriterTextGemini } from "./types";

export const Hero = () => {
  const router = useRouter();
  const [value, setvalue] = useState("");
  return (
    <div className=" max-w-7xl mx-auto flex flex-col gap-y-7">
      <div className=" w-full flex flex-col justify-center items-center gap-3 mt-6">
        <TypewriterTextGemini />
        <h2 className=" text-xl md:text-4xl text-center font-semibold">
          What do you want to build today
        </h2>
      </div>

      <div className=" relative max-w-full min-w-full md:max-w-xl  md:min-w-xl mx-auto h-35 bg-gradient-to-b from-blue-500/50 to-chart-2/80 rounded-lg p-[1px]">
        <Textarea
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          placeholder=" what on your mind"
          className=" !ring-0 resize-none w-full h-full !rounded-lg   break-words !bg-background "
        />
        <div className=" absolute top-0 left-4 bg-gradient-to-r from-transparent via-chart-2 to-transparent rounded-lg w-[90%] h-[1px]  blur-xs animate-pulse " />
        <div className=" absolute bottom-0 left-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-lg w-[90%] h-[1px]  blur-xs animate-pulse " />
        <Button
          onClick={() => {
            router.push("/chat");
          }}
          className=" absolute bottom-2 right-2 size-8 rounded-full  bg-gradient-to-b from-primary to-chart-2 drop-shadow-2xl "
        >
          <ArrowUp />
        </Button>
      </div>

      <div className=" relative flex flex-col justify-center items-center mt-8 gap-y-4 border-t border-primary/15">
        <div className=" absolute top-0  bg-gradient-to-r from-transparent via-chart-2 to-transparent rounded-lg w-[90%] h-[2px]  blur-xs animate-pulse " />
        <div className=" flex flex-col justify-center items-center gap-y-3 ">
          <h1 className=" bg-clip-text bg-gradient-to-b from-primary to-chart-2 text-3xl text-transparent font-semibold mt-10">
            Get Ai Suggesting
          </h1>
        </div>

        <div>
          <Button className="bg-gradient-to-b from-primary to-chart-2 drop-shadow-2xl ">
            <LineSquiggle className=" animate-bounce " />
            Generate Message with AI
            <LineSquiggle className=" animate-bounce " />
          </Button>
        </div>
      </div>
    </div>
  );
};
