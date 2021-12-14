import { InterfaceSymbol } from 'ts-di-transformer/api';
import { Controller, Get, Inject } from '@nestjs/common';
import { ITodoService } from '../models/ITodoService';

@Controller()
export class AppController {
  constructor(@Inject(InterfaceSymbol<ITodoService>()) private readonly todoService: ITodoService) { }

  @Get()
  getFirstTodo() {
    return this.todoService.get(1)
  }
}
