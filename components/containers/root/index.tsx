"use client";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryContainer from "../react-query";
import RootContainerImpl from "./types";
import RecoilContainer from "../recoil";
import AuthContainer from "../auth";
import useRootContainer from "./use";

const RootContainer = ({ children }: RootContainerImpl) => {
  const {} = useRootContainer();
  return (
    <>
      <RecoilContainer>
        <ReactQueryContainer>
          <AuthContainer>
            <div className="">{children}</div>
            <Toaster />
          </AuthContainer>
        </ReactQueryContainer>
      </RecoilContainer>
    </>
  );
};
export default RootContainer;
