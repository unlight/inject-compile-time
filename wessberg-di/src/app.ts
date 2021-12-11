import { ITodoService } from "./models/ITodoService";

export class App {
  private _todo: ITodoService;

  constructor(todo: ITodoService) {
    this._todo = todo;
  }

  public async run() {
    const firstTodo = await this._todo.get(1);

    console.log(firstTodo);
  }
}