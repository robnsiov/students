"use client";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import useHome from "./use";

const Home = () => {
  const { letsGoLink } = useHome();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col relative">
        <div className="absolute bottom-5 left-5 z-20 flex justify-start items-center">
          <CardContent className="p-0 text-[13px]">Designed By</CardContent>{" "}
          <Button variant="link" className="-ml-3 text-base" asChild>
            <Link href={"https://github.com/robnsiov"} target="_blank">
              <CardTitle>Robnsiov</CardTitle>
            </Link>
          </Button>
        </div>
        <div className="inset-0 fixed flex justify-between items-center opacity-10">
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900 md:hidden"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900 md:hidden"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900 md:hidden"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900 md:hidden"></span>
          <span className="inline-block w-0.5 h-full bg-slate-900 md:hidden"></span>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col p-8 md:p-1 text-center relative z-10">
          <div className="relative">
            <CardTitle
              className="text-[160px] xl:text-[90px] lg:text-[70px] 
          font-black relative md:flex md:flex-col md:justify-center md:items-center md:text-[20vw]
          md:leading-[1]"
            >
              <span>English</span> <span>Class</span>
            </CardTitle>
            <div className="-mt-6 md:mt-4 flex justify-end items-center">
              <CardDescription className="text-[10px] mr-2">By</CardDescription>
              <CardTitle className="text-sm uppercase tracking-wider font-extrabold">
                Mr Esghaei
              </CardTitle>
            </div>
          </div>
          <Link className="mt-20" href={letsGoLink}>
            <Button variant="default">Let{"'"}s Go</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
