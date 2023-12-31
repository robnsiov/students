import { cn } from "@/lib/utils";
import LoadingImpl from "./types";

const Loading = ({ show }: LoadingImpl) => {
  return (
    <>
      <div
        className={cn(
          `fixed inset-0 z-[99] bg-white/5 backdrop-blur-sm flex justify-center items-center
          transition-all duration-300`,
          { "!opacity-0 -z-10": !show }
        )}
      >
        <div className="size-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.3s;]"></div>
        <div className="size-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.15s] mx-2"></div>
        <div className="size-4 bg-slate-600 rounded-full animate-bounce"></div>
      </div>
    </>
  );
};
export default Loading;
