import { atom } from "recoil";

const UserInfoState = atom<{ phone?: string; name?: string }>({
  key: "userInfoState",
  default: {},
});

export default UserInfoState;
