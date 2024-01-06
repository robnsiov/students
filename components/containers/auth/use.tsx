import authState from "@/context/auth-state";
import UserInfoState from "@/context/user-info";
import Axios from "@/utlis/axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useAuthContainer = () => {
  const [_, setAuthState] = useRecoilState(authState);
  const [__, setUserInfo] = useRecoilState(UserInfoState);

  const mutationFn = () => {
    return Axios<{ result: { user: { name: String; phone: String } } }>({
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
    onSuccess({
      data: {
        result: {
          user: { name, phone },
        },
      },
    }) {
      setUserInfo({ name, phone });
      setAuthState("authenticated");
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);
};

export default useAuthContainer;
