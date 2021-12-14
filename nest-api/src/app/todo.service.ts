import { ITodo } from '../models/ITodo';
import { ITodoService } from '../models/ITodoService';

export class TodoService implements ITodoService {
  getAll(): Promise<ITodo[]> {
      throw new Error('Method not implemented.');
  }
  get(id: number): Promise<ITodo> {
    return Promise.resolve({
      userId: 1,
      id: 1,
      title: 'Fake first',
      completed: false
    });
  }
}
