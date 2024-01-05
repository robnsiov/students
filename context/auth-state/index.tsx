import { atom } from "recoil";

const authState = atom<"loading..." | "authenticated" | "unAuthenticated">({
  key: "authState",
  default: "loading...",
});

export default authState;
