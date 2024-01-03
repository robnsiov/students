export interface DiscussionStateImpl {
  task: "I did" | "I didn't" | null;
  delay: number;
}

export interface ExerciseBooksStateImpl {
  task: "They're with me" | "They aren't with me" | null;
  remains: number;
}
export interface FineStateImpl {
  task: "I didn't have" | "I have" | null;
  remains: number;
}
export interface PenaltyStateImpl extends FineStateImpl {}

export interface BooksStateImpl {
  notWithMe: number;
  notDone: number;
}
