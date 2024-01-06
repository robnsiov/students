import { atom } from "recoil";

const UserInfoState = atom<{ phone?: String; name?: String }>({
  key: "userInfoState",
  default: {},
});

export default UserInfoState;
