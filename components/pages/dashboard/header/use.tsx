import UserInfoState from "@/context/user-info";
import { useRecoilState } from "recoil";

const useHeader = () => {
  const [userInfo] = useRecoilState(UserInfoState);
  return { userInfo };
};
export default useHeader;
