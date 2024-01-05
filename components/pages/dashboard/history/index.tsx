"use client";
import { CheckCircle2, XCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import useHistory from "./use";
import { cn } from "@/lib/utils";
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

const History = () => {
  const {
    isFetching,
    classes,
    openDialog,
    setOpenDialog,
    activeData,
    setActiveData,
  } = useHistory();
  return (
    <>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="w-[calc(100%-20px)]">
          <AlertDialogHeader>
            <AlertDialogTitle>Summary of the task </AlertDialogTitle>
            <AlertDialogDescription>
              {activeData === null && "There is no data to display."}
              {activeData !== null && (
                <code>
                  <p>
                    Discussion: {activeData.discussion.res} , delay :{" "}
                    {activeData.discussion.delay.toString()} minute(s)
                  </p>
                  <p>
                    Exercise books: {activeData.exerciseBooks.res} , not done :{" "}
                    {activeData.exerciseBooks.notDone.toString()}
                  </p>
                  <p>
                    Fine : {activeData.fine.res} , remains :{" "}
                    {activeData.fine.remains.toString()}
                  </p>
                  <p>
                    Penalty : {activeData.penalty.res} , not done :{" "}
                    {activeData.penalty.remains.toString()}
                  </p>
                  <p>
                    Books: not done : {activeData.books.notDone.toString()} ,
                    not with me : {activeData.books.notWithMe.toString()}
                  </p>
                </code>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="mt-0">Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="container mx-auto py-4">
        <div className="w-full  flex justify-start items-start mb-6 flex-col sm:mt-[40px] mt-[57px] relative">
          <div
            className={cn(
              ` absolute inset-0 inset-x-0 z-10  transition-all duration-500 bg-white
              flex justify-start items-start`,
              { "opacity-0 -z-10": !isFetching }
            )}
          >
            <div
              className="w-full grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 
          sm:grid-cols-1 gap-3"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <Skeleton key={i} className="h-[41.6px] md:even:hidden" />
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {classes.map(({ date, done, data }, i) => (
              <div
                key={i}
                onClick={() => {
                  if (done === null) return;
                  else if (done === "not done") setActiveData(null);
                  else if (done === "done") setActiveData(data as TaskImpl);
                  setOpenDialog(true);
                }}
                className={cn(
                  `border-[1px] border-slate-200 rounded-md p-2 flex 
                justify-between items-start transition-all duration-200`,
                  done === null
                    ? "opacity-25"
                    : "cursor-pointer hover:bg-slate-100"
                )}
              >
                <span className="text-xs bg-slate-900 py-1 px-2 text-white rounded mr-2">
                  {date.toDateString()}
                </span>
                {done === "done" && <CheckCircle2 size="22" />}
                {done === "not done" && <XCircle size="22" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
