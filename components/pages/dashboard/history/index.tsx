import { CheckCircle2, XCircle } from "lucide-react";

const History = () => {
  return (
    <>
      <div className="container mx-auto py-4">
        <div className="w-full  flex justify-start items-start flex-col sm:mt-[40px] mt-[57px]">
          <div className="w-full grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="border-[1px] border-slate-200 rounded-md p-2 flex 
                justify-between items-start cursor-pointer"
              >
                <span className="text-xs bg-slate-900 py-1 px-2 text-white rounded mr-2">
                  FR - 13 febraty 2024
                </span>
                {/* <CheckCircle2 size="22" /> */}
                <XCircle size="22" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
