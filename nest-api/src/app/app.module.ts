import { InterfaceSymbol } from 'ts-di-transformer/api';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TodoService } from './todo.service';
import { ITodoService } from '../models/ITodoService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: InterfaceSymbol<ITodoService>(),
      useClass: TodoService,
    },
  ],
})
export class AppModule {}
