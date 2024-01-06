"use client";

import useHeader from "./use";

const Header = () => {
  const { userInfo } = useHeader();
  return (
    <>
      <div className="fixed inset-x-0 top-0 border-b-[1px] border-black/10">
        <div className="container mx-auto">
          <div className="py-4 sm:py-2 text-nowrap truncate">
            <span className="sm:text-sm">Welcome</span>{" "}
            <span className="ml-2 font-semibold capitalize">
              {userInfo.name ?? "X"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
