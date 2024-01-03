import { Dispatch, SetStateAction } from "react";
import { PenaltyStateImpl } from "../types";

export default interface PenaltyImpl {
  state: PenaltyStateImpl;
  setState: Dispatch<SetStateAction<PenaltyStateImpl>>;
}
