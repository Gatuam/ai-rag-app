'use client'
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialButton = () => {
  return (
    <div className=" w-full flex justify-center items-center px-8 gap-x-3 ">
      <Button onClick={() => {}} variant={"outline"} className=" w-1/2">
        <FaGithub />
      </Button>
      <Button onClick={() => {}} variant={"outline"} className=" w-1/2">
        <FcGoogle />
      </Button>
    </div>
  );
};

export default SocialButton;
