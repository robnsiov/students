import authState from "@/context/auth-state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useDashboardContainer = () => {
  const [auth] = useRecoilState(authState);
  const router = useRouter();
  useEffect(() => {
    if (auth === "unAuthenticated") {
      router.replace("/auth");
    }
  }, [auth]);
  return {
    auth,
  };
};
export default useDashboardContainer;
