"use client";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryContainer from "../react-query";
import RootContainerImpl from "./types";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ReactQueryContainer>
        {children}
        <Toaster />
      </ReactQueryContainer>
    </>
  );
};
export default RootContainer;
