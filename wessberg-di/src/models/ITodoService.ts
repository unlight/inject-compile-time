import { ITodo } from "./ITodo";

export interface ITodoService {
  getAll(): Promise<ITodo[]>;
  get(id: number): Promise<ITodo>;
}