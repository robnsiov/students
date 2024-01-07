import authState from "@/context/auth-state";
import Axios from "@/utlis/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useHistory = () => {
  const [auth] = useRecoilState(authState);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeData, setActiveData] = useState<TaskImpl | null>(null);
  const [classes, setClasses] = useState<ClassesStateImpl>([]);

  const queryFn = () => {
    return Axios<{
      result: Array<TaskImpl>;
    }>({
      method: "GET",
      url: "/task",
    });
  };
  const { refetch, data, isFetching } = useQuery({
    queryKey: ["tasks"],
    queryFn,
    enabled: false,
  });

  useEffect(() => {
    if (!data) return;
    const sessions: ClassesStateImpl = [];
    const dt = new Date();
    const today = new Date(2023, 11, 1) as any;
    const end = new Date(2024, 2, 8) as any;
    const days: Array<{ index: number; date: Date }> = [];
    for (let i = 0; i < (end - today) / (1000 * 60 * 60 * 24); i++) {
      const date = new Date(today.getTime() + i * (1000 * 60 * 60 * 24));
      days.push({ index: date.getDay(), date });
    }
    days.forEach(({ date, index }) => {
      const past = (dt as any) >= (date as any);

      if (index === 0)
        sessions.push({
          date,
          index,
          done: past ? "not done" : null,
          data: null,
        });
      if (index === 2)
        sessions.push({
          date,
          index,
          done: past ? "not done" : null,
          data: null,
        });
      if (index === 4)
        sessions.push({
          date,
          index,
          done: past ? "not done" : null,
          data: null,
        });
    });
    data.data.result.forEach((item, i) => {
      if (!item.createdAt) return;
      const dt = new Date(item.createdAt).toDateString();
      const index = sessions.findIndex(({ date }) => {
        return date.toDateString() === dt;
      });
      if (index !== -1) {
        sessions[index].done = "done";
        sessions[index].data = item;
      }
    });
    setClasses(sessions);
  }, [data]);

  useEffect(() => {
    if (auth === "authenticated") {
      refetch();
    }
  }, [auth]);

  return {
    isFetching,
    classes,
    openDialog,
    setOpenDialog,
    activeData,
    setActiveData,
  };
};
export default useHistory;
