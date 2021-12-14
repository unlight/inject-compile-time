import { Logger, NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppController } from './app/app.controller';

import { AppModule } from './app/app.module';

export async function createApp(options?: NestApplicationOptions) {
  const app = await NestFactory.create(AppModule, options);
  app.setGlobalPrefix('api');
  return app;
}

async function bootstrap() {
  const app = await createApp();
  const firstTodo = await app.get(AppController).getFirstTodo();
  console.log(firstTodo);
  // const port = process.env.PORT || 3333;
  // await app.listen(port);
  // Logger.log(`Listening at ${await app.getUrl()}`, 'main');
}

if (process.env.NODE_ENV !== 'test') {
  void bootstrap();
}