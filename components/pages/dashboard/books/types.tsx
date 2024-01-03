import { Dispatch, SetStateAction } from "react";
import { BooksStateImpl } from "../types";

export default interface BooksImpl {
  state: BooksStateImpl;
  setState: Dispatch<SetStateAction<BooksStateImpl>>;
}
