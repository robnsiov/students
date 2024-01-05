"use client";
import Loading from "@/components/shared/loading";
import DashboardContainerImpl from "./types";
import useDashboardContainer from "./use";

const DashboardContainer = ({ children }: DashboardContainerImpl) => {
  const { auth } = useDashboardContainer();
  return (
    <>
      <Loading show={auth === "unAuthenticated" || auth === "loading..."} />
      {children}
    </>
  );
};
export default DashboardContainer;
