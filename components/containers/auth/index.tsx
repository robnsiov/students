import AuthContainerImpl from "./types";
import useAuthContainer from "./use";

const AuthContainer = ({ children }: AuthContainerImpl) => {
  useAuthContainer();
  return <>{children}</>;
};
export default AuthContainer;
