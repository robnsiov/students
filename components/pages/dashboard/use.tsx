import { useState } from "react";
import {
  BooksStateImpl,
  DiscussionStateImpl,
  ExerciseBooksStateImpl,
  FineStateImpl,
  PenaltyStateImpl,
} from "./types";

const useDashboard = () => {
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
  };
};
export default useDashboard;
