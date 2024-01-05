import authState from "@/context/auth-state";
import { useRecoilState } from "recoil";

const useHome = () => {
  const [auth] = useRecoilState(authState);

  return {
    letsGoLink:
      auth === "loading..." || auth === "unAuthenticated"
        ? "/auth"
        : "/dashboard",
  };
};
export default useHome;
