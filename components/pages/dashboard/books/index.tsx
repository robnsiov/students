import { Button } from "@/components/ui/button";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import BooksImpl from "./types";

const Books = ({ setState, state }: BooksImpl) => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap mt-3">
        <span className="mr-4 mb-2">Books</span>
        <div className="flex justify-start items-center flex-wrap mr-8">
          <code className="mr-2 mb-2">not done :</code>
          <div className="mb-2 flex justify-center items-center flex-wrap">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                state.notDone >= 90 ||
                setState((prev) => ({ ...prev, notDone: prev.notDone + 1 }))
              }
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-10 mx-2" size="icon">
              {state.notDone}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                state.notDone <= 0 ||
                setState((prev) => ({ ...prev, notDone: prev.notDone - 1 }))
              }
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-start items-center flex-wrap">
          <code className="mr-2 mb-2">not with me :</code>
          <div className="mb-2 flex justify-center items-center flex-wrap">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                state.notWithMe >= 90 ||
                setState((prev) => ({ ...prev, notWithMe: prev.notWithMe + 1 }))
              }
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-10 mx-2" size="icon">
              {state.notWithMe}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                state.notWithMe <= 0 ||
                setState((prev) => ({ ...prev, notWithMe: prev.notWithMe - 1 }))
              }
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Books;
