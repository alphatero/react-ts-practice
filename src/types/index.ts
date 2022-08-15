export enum STATUS {
  All = "全部",
  Todo = "待完成",
  Done = "已完成",
}

export interface TodoItemTypes {
  id: string;
  text: string;
  status: STATUS;
}
