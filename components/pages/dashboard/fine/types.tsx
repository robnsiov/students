import { Dispatch, SetStateAction } from "react";
import { FineStateImpl } from "../types";

export default interface FineImpl {
  state: FineStateImpl;
  setState: Dispatch<SetStateAction<FineStateImpl>>;
}
