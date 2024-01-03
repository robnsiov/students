import { Dispatch, SetStateAction } from "react";
import { DiscussionStateImpl } from "../types";

export default interface DiscussionImpl {
  state: DiscussionStateImpl;
  setState: Dispatch<SetStateAction<DiscussionStateImpl>>;
}
