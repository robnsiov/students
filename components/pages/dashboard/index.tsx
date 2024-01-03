"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Discussion from "./discussion";
import useDashboard from "./use";
import ExerciseBooks from "./excercise-books";
import Fine from "./fine";
import Penalty from "./penalty";
import Books from "./books";

const Dashboard = () => {
  const {
    discussion,
    setDiscussion,
    exerciseBooks,
    setExerciseBooks,
    fine,
    setFine,
    penalty,
    setPenalty,
    books,
    setBooks,
  } = useDashboard();
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
              <Discussion state={discussion} setState={setDiscussion} />
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <ExerciseBooks
                state={exerciseBooks}
                setState={setExerciseBooks}
              />

              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <Fine state={fine} setState={setFine} />

              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <Penalty state={penalty} setState={setPenalty} />
              <div className="w-full my-3 h-[1px] border-dashed border-[1px] border-slate-700 hidden sm:inline-block"></div>
              <Books state={books} setState={setBooks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
