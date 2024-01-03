import { Button } from "@/components/ui/button";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import PenaltyImpl from "./types";

const Penalty = ({ setState, state }: PenaltyImpl) => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap mt-3">
        <span className="mr-4 mb-2">Penalty</span>
        <div className="mb-2 mr-4 flex justify-center items-center">
          <Button
            variant="default"
            className="mr-2"
            onClick={() =>
              setState((prev) => ({ ...prev, task: "I didn't have" }))
            }
          >
            I did{"'"}nt have
            {state.task === "I didn't have" && (
              <CheckCircle2 className="ml-2" size="18" />
            )}
          </Button>
          <Button
            variant="default"
            onClick={() => setState(() => ({ remains: 0, task: "I have" }))}
          >
            I had
            {state.task === "I have" && (
              <CheckCircle2 className="ml-2" size="18" />
            )}
          </Button>
        </div>
        {state.task === "I have" && (
          <div className="flex justify-start items-center flex-wrap">
            <code className="mr-2 mb-2">not done(sentences) :</code>
            <div className="mb-2 flex justify-center items-center flex-wrap">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  state.remains >= 90 ||
                  setState((prev) => ({ ...prev, remains: prev.remains + 1 }))
                }
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-10 mx-2" size="icon">
                {state.remains}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  state.remains <= 0 ||
                  setState((prev) => ({ ...prev, remains: prev.remains - 1 }))
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
export default Penalty;
