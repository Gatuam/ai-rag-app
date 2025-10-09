import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialButton from "@/components/auth/components/social-button";
import { SignUpForm } from "@/components/auth/components/sign-up-form";

const Page = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center ">
      <Card className=" max-w-xs min-w-[360px] md:max-w-md md:min-w-md flex flex-col px-3 py-11 ">
        <CardHeader className=" text-center">
          <CardTitle className=" font-semibold text-lg">Welcome by Helix-ai</CardTitle>
          <CardDescription>
            <p>Sign-up to get start with Helix-ai</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <>
          <SocialButton />
        </>
        <CardFooter className="flex justify-center items-center">
          <p className=" flex gap-x-4 justify-center items-center text-sm">
            Already have an acccount?
            <Link href={"/auth/sign-in"}>
              <Button className=" text-blue-500" variant={"link"} size={"icon"}>
                Sign-in
              </Button>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
