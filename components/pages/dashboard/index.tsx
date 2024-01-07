"use client";

import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Discussion from "./discussion";
import useDashboard from "./use";
import ExerciseBooks from "./excercise-books";
import Fine from "./fine";
import Penalty from "./penalty";
import Books from "./books";
import {
  AlertDialog,
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
    formLoading,
    taskConfirmationErr,
    time,
    timer,
    refetch,
  } = useDashboard();

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (hours === 0 && seconds === 0 && minutes === 0) {
      refetch();
    }
    return (
      <>
        <div className="flex justify-start items-center flex-col">
          <div className=" flex justify-start items-center">
            <span className="text-2xl">{hours}</span>{" "}
          </div>
          <span className="text-zinc-400 text-[8px] mt-3">HOURS</span>
        </div>
        <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">:</div>
        <div className="flex justify-start items-center flex-col">
          <div className=" flex justify-start items-center">
            <span className="text-2xl">{minutes}</span>{" "}
          </div>
          <span className="text-zinc-400 text-[8px] mt-3">MINUTES</span>
        </div>
        <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">:</div>
        <div className="flex justify-start items-center flex-col">
          <div className=" flex justify-start items-center">
            <span className="text-2xl">{seconds}</span>{" "}
          </div>
          <span className="text-zinc-400 text-[8px] mt-3">SECONDS</span>
        </div>
      </>
    );
  };

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
            <Button disabled={formLoading} onClick={onContinueDialog}>
              {formLoading && (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              )}
              {!formLoading && "Continue"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="w-full min-h-screen flex justify-start items-center  flex-col">
        <div className="sm:mt-[40px] mt-[57px] w-full mb-[150px] relative">
          {taskConfirmationErr !== "You can set some task." && (
            <div className="bg-white/20 backdrop-blur absolute inset-0 z-20 flex justify-center items-center text-center p-5">
              <div className="w-full max-w-sm font-semibold relative sm:bottom-[100px]">
                {taskConfirmationErr === `You can't set a task today.` && (
                  <span>
                    You can{"'"}t set a task today because you can only add
                    tasks on Sundays, Tuesdays and Thursdays
                  </span>
                )}
                {taskConfirmationErr === `You've set a task today.` && (
                  <span>
                    You can{"'"}t set a new task today because you are only
                    allowed to set one task today
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="container mx-auto py-4">
            {time && (
              <div className="w-full flex justify-end md:justify-center sm:scale-75 items-center">
                <div
                  className="bg-black text-white inline-flex justify-start
             items-center uppercase py-4 px-7 text-center rounded-md mb-4 md:mb-7 sm:mb-8"
                >
                  <div className="flex justify-start items-center flex-col">
                    <div className=" flex justify-start items-center">
                      <span className="text-2xl">
                        {new Date(time.current).toLocaleString("en-us", {
                          weekday: "short",
                        })}
                      </span>{" "}
                    </div>
                    <span className="text-zinc-400 text-[8px] mt-3">Day</span>
                  </div>
                  <div className="mx-5 text-xl text-zinc-500 relative -top-3.5">
                    :
                  </div>
                  {time && timer !== -1 && (
                    <Countdown date={Date.now() + timer} renderer={renderer} />
                  )}
                </div>
              </div>
            )}
            ,
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
