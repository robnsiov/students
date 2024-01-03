import { Dispatch, SetStateAction } from "react";
import { ExerciseBooksStateImpl } from "../types";

export default interface ExerciseBooksImpl {
  state: ExerciseBooksStateImpl;
  setState: Dispatch<SetStateAction<ExerciseBooksStateImpl>>;
}
