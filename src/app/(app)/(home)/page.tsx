
import { Hero } from "@/components/_home/components/hero";


export default function Home() {

  return (
    <div className=" relative pt-29 px-4 md:pt-32 w-full h-full flex flex-col">
      <div className=" absolute -z-0 bottom-0 left-0 right-0 -top-3 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:104px_94px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <Hero/>
    </div>
  );
}
