import { useToast } from "@/components/ui/use-toast";
import authState from "@/context/auth-state";
import UserInfoState from "@/context/user-info";
import Axios from "@/utlis/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { z } from "zod";

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
});

const useHeader = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [openDialog, setOpenDialog] = useState(false);
  const [auth] = useRecoilState(authState);
  const [hasSubmited, setHasSubmited] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (userInfo.name && userInfo.phone) {
      form.setValue("name", userInfo.name);
      form.setValue("phone", userInfo.phone);
    }
  }, [userInfo]);

  const { toast } = useToast();

  const mutationFn = (data: z.infer<typeof formSchema>) => {
    return Axios<{ result: { name: string; phone: string } }>({
      method: "PATCH",
      data,
      url: "/user",
    });
  };
  const mutation = useMutation({
    mutationKey: ["change-info"],
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
        result: { name, phone },
      },
    }) {
      setUserInfo({ name, phone });
      setOpenDialog(false);
      setHasSubmited(false);
      toast({
        title: "Successful!",
        description: "Update info was successful",
        style: { width: "max-content", minWidth: "240px" },
        duration: 3000,
      });
    },
    onSettled() {},
    onMutate() {
      setHasSubmited(true);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return {
    form,
    onSubmit,
    hasSubmited,
    userInfo,
    openDialog,
    setOpenDialog,
    auth,
  };
};
export default useHeader;
