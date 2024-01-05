import authState from "@/context/auth-state";
import Axios from "@/utlis/axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useAuthContainer = () => {
  const [_, setAuthState] = useRecoilState(authState);

  const mutationFn = () => {
    return Axios<{ result: { token: string } }>({
      method: "GET",
      url: "/auth/token-validation",
    });
  };

  const mutation = useMutation({
    mutationKey: ["token-validate"],
    mutationFn,
    onError() {
      setAuthState("unAuthenticated");
    },
    onSuccess() {
      setAuthState("authenticated");
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);
};

export default useAuthContainer;
