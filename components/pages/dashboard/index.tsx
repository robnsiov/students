"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Discussion from "./discussion";
import useDashboard from "./use";
import ExerciseBooks from "./excercise-books";
import Fine from "./fine";
import Penalty from "./penalty";
import Books from "./books";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
    onSubmit,
    onCancelDialog,
    onContinueDialog,
    openDialog,
    setOpenDialog,
  } = useDashboard();
  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="sm:w-[calc(100%-20px)]">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Read the below summery and if was correct, click on Continue else
              click on Cancel to edit the tasks.
            </AlertDialogDescription>
            <code>
              <p>
                Discussion: {discussion.task} , delay : {discussion.delay}{" "}
                minute(s)
              </p>
              <p>
                Exercise books: {exerciseBooks.task} , not done :{" "}
                {exerciseBooks.remains}
              </p>
              <p>
                Fine : {fine.task} , remains : {fine.remains}
              </p>
              <p>
                Penalty : {penalty.task} , not done : {penalty.remains}
              </p>
              <p>
                Books: not done : {books.notDone} , not with me :{" "}
                {books.notWithMe}
              </p>
            </code>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              variant="outline"
              onClick={onCancelDialog}
              className="mt-0 mr-3"
            >
              Cancel
            </Button>
            <Button onClick={onContinueDialog}>Continue</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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

              <Button onClick={onSubmit} className="mt-8">
                submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
