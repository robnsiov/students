"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-start items-center #fff flex-col">
        <div className="fixed inset-x-0 top-0 border-b-[1px] border-black/10">
          <div className="container mx-auto">
            <div className="flex justify-start items-center py-4 sm:py-2">
              <span className="sm:text-sm">Welcome</span>{" "}
              <h3 className="ml-2  font-semibold">Mr Zollfaghari</h3>
            </div>
          </div>
        </div>
        <div className="sm:mt-[40px] mt-[57px] w-full mb-[150px]">
          <div className="container mx-auto py-4">
            <div className="w-full flex justify-end md:justify-center sm:scale-75 items-center">
              <div
                className="bg-black text-white inline-flex justify-start
             items-center uppercase py-4 px-7 text-center rounded-md mb-4 md:mb-7 sm:mb-8"
              >
                <div className="flex justify-start items-center flex-col">
                  <div className=" flex justify-start items-center">
                    <span className="text-2xl">FR</span>{" "}
                  </div>
                  <span className="text-zinc-400 text-[8px] mt-3">Day</span>
                </div>
                <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">
                  :
                </div>
                <div className="flex justify-start items-center flex-col">
                  <div className=" flex justify-start items-center">
                    <span className="text-2xl">10</span>{" "}
                  </div>
                  <span className="text-zinc-400 text-[8px] mt-3">HOURS</span>
                </div>
                <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">
                  :
                </div>
                <div className="flex justify-start items-center flex-col">
                  <div className=" flex justify-start items-center">
                    <span className="text-2xl">14</span>{" "}
                  </div>
                  <span className="text-zinc-400 text-[8px] mt-3">MINUTES</span>
                </div>
                <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">
                  :
                </div>
                <div className="flex justify-start items-center flex-col">
                  <div className=" flex justify-start items-center">
                    <span className="text-2xl">14</span>{" "}
                  </div>
                  <span className="text-zinc-400 text-[8px] mt-3">SECONDS</span>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col">
              <div className="flex justify-start items-center flex-wrap">
                <span className="mr-4 mb-2">Discussion</span>
                <div className="mb-2 mr-4 flex justify-center items-center">
                  <Button variant="default" className="mr-2">
                    I did
                  </Button>
                  <Button variant="default">I didn{"'"}t</Button>
                </div>
                <div className="flex justify-start items-center flex-wrap">
                  <code className="mr-2 mb-2">delay :</code>
                  <div className="mb-2 flex justify-center items-center flex-wrap">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 mx-2" size="icon">
                      42
                    </Button>
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <div className="flex justify-start items-center flex-wrap mt-3">
                <span className="mr-4 mb-2">Exercise books</span>
                <div className="mr-4 flex justify-start items-center flex-wrap">
                  <Button variant="default" className="mr-2 mb-2">
                    They{"'"}re with me
                  </Button>
                  <Button className="mb-2" variant="default">
                    They aren{"'"}t with me
                  </Button>
                </div>
                <div className="flex justify-start items-center flex-wrap">
                  <code className="mb-2 mr-2">not done :</code>
                  <div className="mb-2 flex justify-center items-center flex-wrap">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 mx-2" size="icon">
                      42
                    </Button>
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <div className="flex justify-start items-center flex-wrap mt-3">
                <span className="mr-4 mb-2">Fine</span>
                <div className="mr-4 flex justify-start items-center flex-wrap">
                  <Button variant="default" className="mr-2 mb-2">
                    I did{"'"}nt have
                  </Button>
                  <Button className="mb-2" variant="default">
                    I had
                  </Button>
                </div>
                <div className="flex justify-start items-center flex-wrap">
                  <code className="mr-2 mb-2">remains(Toman) :</code>
                  <div className="flex justify-center items-center flex-wrap mb-2">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 mx-2" size="icon">
                      42
                    </Button>
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <div className="flex justify-start items-center flex-wrap mt-3">
                <span className="mr-4 mb-2">Written Penlaty</span>
                <div className="mr-4 flex justify-start items-center flex-wrap">
                  <Button variant="default" className="mr-2 mb-2">
                    I did{"'"}nt have
                  </Button>
                  <Button className="mb-2" variant="default">
                    I had
                  </Button>
                </div>
                <div className="flex justify-start items-center flex-wrap">
                  <code className="mr-2 mb-2">remains(sentences) :</code>
                  <div className="flex justify-center items-center flex-wrap">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 mx-2" size="icon">
                      42
                    </Button>
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <div className="flex justify-start items-center flex-wrap mt-3">
                <span className="mr-4 mb-2">Books</span>
                <div className="flex justify-start items-center flex-wrap">
                  <code className="mr-2 mb-2">not with me :</code>
                  <div className="flex justify-center items-center flex-wrap">
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 mx-2" size="icon">
                      42
                    </Button>
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
