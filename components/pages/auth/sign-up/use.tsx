import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Axios from "@/utlis/axios";
import { useRecoilState } from "recoil";
import authState from "@/context/auth-state";

const formSchema = z.object({
  name: z
    .string()
    .min(4)
    .max(200)
    .regex(/^[a-zA-Z\s]+$/, "Only English letters are allowed"),
  phone: z
    .string()
    .length(11)
    .regex(/^[0-9]+$/, "Only numbers are allowed"),
  password: z.string().min(8).max(64),
});

const useSignup = () => {
  const router = useRouter();
  const [_, setAuthState] = useRecoilState(authState);
  const [hasSubmited, setHasSubmited] = useState(false);
  const [hasClickedOnEye, sethasClickedOnEye] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
      phone: "",
    },
  });

  const { toast } = useToast();

  const mutationFn = (data: z.infer<typeof formSchema>) => {
    return Axios<{ result: { token: string } }>({
      method: "POST",
      data,
      url: "/auth/sign-up",
    });
  };
  const mutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (data: z.infer<typeof formSchema>) => mutationFn(data),
    onError() {
      setHasSubmited(false);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Try another phone.",
        style: { width: "max-content", minWidth: "240px" },
        duration: 3000,
      });
    },
    onSuccess({
      data: {
        result: { token },
      },
    }) {
      setAuthState("authenticated");
      localStorage.setItem("token", token);
      toast({
        title: "Successful!",
        description: "Sign up was successful",
        style: { width: "max-content", minWidth: "240px" },
        duration: 3000,
      });
      router.replace("/dashboard");
    },
    onSettled() {},
    onMutate() {
      setHasSubmited(true);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return { form, onSubmit, hasSubmited, hasClickedOnEye, sethasClickedOnEye };
};
export default useSignup;
