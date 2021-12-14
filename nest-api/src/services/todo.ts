import { ITodoService } from "../models/ITodoService";
import { IHttp } from "../models/IHttp";
import { ITodo } from "../models/ITodo";

export class Todo implements ITodoService {
  private _http: IHttp;

  constructor(http: IHttp) {
    this._http = http;
  }

  public async getAll(): Promise<ITodo[]> {
    const body = await this._http.get("https://jsonplaceholder.typicode.com/todos");
    
    return JSON.parse(body);
  }

  public async get(id: number): Promise<ITodo> {
    const body = await this._http.get("https://jsonplaceholder.typicode.com/todos/" + id);
    
    return JSON.parse(body);
  }
}