import { DIContainer } from '@wessberg/di';

import { App } from './app';

import { IHttp } from './models/IHttp';
import { Http } from './services/http';
import { ITodoService } from './models/ITodoService';
import { Todo } from './services/todo';

// Instantiate a new container for services
const container = new DIContainer();

container.registerSingleton<IHttp, Http>();
container.registerTransient<ITodoService, Todo>();

// Rather than mapping a class to an interface,
// here we provide a function that returns an object that implements
// the required interface
// container.registerSingleton<IAppConfig>(() => myAppConfig);

// You don't have to map an interface to an implementation.
// container.registerSingleton<MyAwesomeService>();

container.registerSingleton<App>();

const app = container.get<App>();
void app.run();