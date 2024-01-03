import { Button } from "@/components/ui/button";
import DiscussionImpl from "./types";
import { CheckCircle2, Minus, Plus } from "lucide-react";

const Discussion = ({ setState, state }: DiscussionImpl) => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap">
        <span className="mr-4 mb-2">Discussion</span>
        <div className="mb-2 mr-4 flex justify-center items-center">
          <Button
            variant="default"
            className="mr-2"
            onClick={() => setState((prev) => ({ ...prev, task: "I did" }))}
          >
            I did
            {state.task === "I did" && (
              <CheckCircle2 className="ml-2" size="18" />
            )}
          </Button>
          <Button
            variant="default"
            onClick={() => setState(() => ({ delay: 0, task: "I didn't" }))}
          >
            I didn{"'"}t{" "}
            {state.task === "I didn't" && (
              <CheckCircle2 className="ml-2" size="18" />
            )}
          </Button>
        </div>
        {state.task === "I did" && (
          <div className="flex justify-start items-center flex-wrap">
            <code className="mr-2 mb-2">delay :</code>
            <div className="mb-2 flex justify-center items-center flex-wrap">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  state.delay >= 90 ||
                  setState((prev) => ({ ...prev, delay: prev.delay + 1 }))
                }
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-10 mx-2" size="icon">
                {state.delay}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  state.delay <= 0 ||
                  setState((prev) => ({ ...prev, delay: prev.delay - 1 }))
                }
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Discussion;
