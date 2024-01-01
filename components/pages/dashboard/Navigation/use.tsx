import { CheckCircle, LogOut } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const menus = [
  {
    name: "Tasks",
    Icon: <CheckCircle />,
    dis: "translate-x-0",
    href: "/dashboard",
  },
  {
    name: "Logout",
    Icon: <LogOut />,
    dis: "translate-x-16",
    href: "/dashboard?logout=true",
  },
];
const useNavigation = () => {
  const params = useSearchParams();
  const router = useRouter();

  const logout = params.get("logout");
  const [active, setActive] = useState(0);
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
    // do something
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
