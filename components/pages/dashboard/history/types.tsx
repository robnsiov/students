type ClassesStateImpl = Array<{
  index: number;
  date: Date;
  done: "done" | "not done" | null;
  data: TaskImpl | null;
}>;

interface TaskImpl {
  _id?: String;
  createdAt?: Date;
  discussion: {
    res: String;
    delay: Number;
  };
  exerciseBooks: {
    res: String;
    notDone: Number;
  };
  fine: {
    res: String;
    remains: Number;
  };
  penalty: {
    res: String;
    remains: Number;
  };
  books: {
    notDone: Number;
    notWithMe: Number;
  };
}
