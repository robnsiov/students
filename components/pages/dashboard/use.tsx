import { useState } from "react";
import {
  BooksStateImpl,
  DiscussionStateImpl,
  ExerciseBooksStateImpl,
  FineStateImpl,
  PenaltyStateImpl,
} from "./types";
import { useToast } from "@/components/ui/use-toast";

const useDashboard = () => {
  const { toast } = useToast();

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

  const onCancelDialog = () => {
    setOpenDialog(false);
  };
  const onContinueDialog = () => {};

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
  };
};
export default useDashboard;
