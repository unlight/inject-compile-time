import { Container, InterfaceSymbol } from 'ts-di-transformer/api';

import { App } from './app';

import { IHttp } from './models/IHttp';
import { Http } from './services/http';
import { ITodoService } from './models/ITodoService';
import { Todo } from './services/todo';

const bootstrap = new Container();

bootstrap.bind(InterfaceSymbol<IHttp>(), Http);
bootstrap.bind(InterfaceSymbol<ITodoService>(), Todo);

bootstrap.resolve(App).run();