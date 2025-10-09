import { Hero } from "@/components/_home/components/hero";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers() 
})
if(!session || !session?.user){
  redirect('/auth/sign-in')
}
  return (
    <div className="pt-10 px-4 md:pt-15 w-full h-full flex flex-col">
      <Hero />
    </div>
  );
}
