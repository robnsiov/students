import authState from "@/context/auth-state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useAuth = () => {
  const [auth] = useRecoilState(authState);
  const router = useRouter();
  useEffect(() => {
    if (auth === "authenticated") {
      router.replace("/dashboard");
    }
  }, [auth]);

  return { auth };
};
export default useAuth;
