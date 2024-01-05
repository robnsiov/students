import authState from "@/context/auth-state";
import { CheckCircle, KanbanSquare, LogOut } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const menus = [
  {
    name: "Tasks",
    Icon: <CheckCircle />,
    dis: "translate-x-0",
    href: "/dashboard",
  },
  {
    name: "History",
    Icon: <KanbanSquare />,
    dis: "translate-x-16",
    href: "/dashboard/history",
  },
  {
    name: "Logout",
    Icon: <LogOut />,
    dis: "translate-x-32",
    href: "/dashboard?logout=true",
  },
];
const useNavigation = () => {
  const params = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();
  const logout = params.get("logout");

  const [_, setAuthState] = useRecoilState(authState);

  const [active, setActive] = useState(
    menus.findIndex(({ href }) => href === pathname)
  );
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (logout === "true") {
      setOpenDialog(true);
    }
  }, [logout]);

  const onCancelDialog = () => {
    setActive(0); // index 0
    router.push("/dashboard");
  };
  const onContinueDialog = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      setAuthState("unAuthenticated");
    }, 1000);
    router.replace("/");
  };

  const clickOnMenuLink = (href: string) => {
    // do something
  };
  return {
    menus,
    active,
    setActive,
    clickOnMenuLink,
    openDialog,
    setOpenDialog,
    onCancelDialog,
    onContinueDialog,
  };
};
export default useNavigation;
