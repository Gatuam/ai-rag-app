import Navbar from "@/components/_home/components/nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-screen flex flex-col gap-y-3 bg-gradient-to-b from-accent/5 to-chart-2/1">
      <Navbar />
      <main className=" relative flex-1 flex-col h-full w-full mx-auto">
        {children}
        <div className=" absolute -z-1 bottom-0 left-0 right-0 -top-3 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:104px_94px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </main>
    </div>
  );
};

export default layout;
