import { useEffect, useState } from "react";
import {
  BooksStateImpl,
  DiscussionStateImpl,
  ExerciseBooksStateImpl,
  FineStateImpl,
  PenaltyStateImpl,
} from "./types";
import { useToast } from "@/components/ui/use-toast";
import Axios from "@/utlis/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import authState from "@/context/auth-state";
import { AxiosError } from "axios";

const useDashboard = () => {
  const { toast } = useToast();

  const [auth] = useRecoilState(authState);
  const [taskConfirmationErr, setTaskConfirmationErr] = useState<
    null | string
  >();

  const [formLoading, setFormLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [discussion, setDiscussion] = useState<DiscussionStateImpl>({
    task: null,
    delay: 0,
  });
  const [exerciseBooks, setExerciseBooks] = useState<ExerciseBooksStateImpl>({
    task: null,
    remains: 0,
  });
  const [fine, setFine] = useState<FineStateImpl>({
    task: null,
    remains: 0,
  });

  const [penalty, setPenalty] = useState<PenaltyStateImpl>({
    task: null,
    remains: 0,
  });
  const [books, setBooks] = useState<BooksStateImpl>({
    notDone: 0,
    notWithMe: 0,
  });

  const taskConfirmationQueryFn = () => {
    return Axios<{
      result: { result: string };
    }>({
      method: "GET",
      url: "/task/confirmation",
    });
  };
  const { refetch, data, error } = useQuery({
    queryKey: ["task-confirmation"],
    queryFn: taskConfirmationQueryFn,
    enabled: false,
    retry: 0,
  });
  useEffect(() => {
    if (auth === "authenticated") {
      refetch();
    }
  }, [auth]);

  useEffect(() => {
    const err: any = error;
    if (!err) return;
    setTaskConfirmationErr(err.response.data.message);
  }, [error]);

  useEffect(() => {
    if (!data) return;
    setTaskConfirmationErr("You can set some task.");
  }, [data]);

  const mutationFn = (data: TaskImpl) => {
    return Axios<{ result: { token: string } }>({
      method: "POST",
      data,
      url: "/task",
    });
  };
  const mutation = useMutation({
    mutationKey: ["add-task"],
    mutationFn: (data: TaskImpl) => mutationFn(data),
    onError() {
      toast({
        title: "Uh oh! Something went wrong.",
        variant: "destructive",
        description: "Call to admin for the problem.",
        style: { width: "max-content", minWidth: "280px" },
        duration: 3000,
      });
    },
    onSuccess() {
      toast({
        title: "Successful!",
        description: "Your task saved.",
        style: { width: "max-content", minWidth: "240px" },
        duration: 3000,
      });
    },
    onSettled() {
      setFormLoading(false);
    },
    onMutate() {
      setOpenDialog(false);
      setFormLoading(true);
    },
  });

  const onCancelDialog = () => {
    setOpenDialog(false);
  };
  const onContinueDialog = () => {
    if (formLoading) return;
    mutation.mutate({
      discussion: { res: discussion.task as string, delay: discussion.delay },
      books: { notDone: books.notDone, notWithMe: books.notWithMe },
      exerciseBooks: {
        res: exerciseBooks.task as string,
        notDone: exerciseBooks.remains,
      },
      fine: { res: fine.task as string, remains: fine.remains },
      penalty: { res: penalty.task as string, remains: penalty.remains },
    });
  };

  const onSubmit = () => {
    let task = "";
    if (discussion.task === null) task = "discussion";
    else if (exerciseBooks.task === null) task = "exercise books";
    else if (fine.task === null) task = "fine";
    else if (penalty.task === null) task = "penalty";

    if (task) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: `please Complete the ${task} task.`,
        style: {
          width: "max-content",
          minWidth: "240px",
        },
        duration: 2500,
      });
    } else {
      setOpenDialog(true);
    }
  };

  return {
    discussion,
    setDiscussion,
    exerciseBooks,
    setExerciseBooks,
    fine,
    setFine,
    penalty,
    setPenalty,
    books,
    setBooks,
    onSubmit,
    openDialog,
    setOpenDialog,
    onCancelDialog,
    onContinueDialog,
    formLoading,
    taskConfirmationErr,
  };
};
export default useDashboard;
