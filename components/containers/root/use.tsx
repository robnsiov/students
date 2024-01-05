import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useRootContainer = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [pathname]);
  return { show };
};
export default useRootContainer;
