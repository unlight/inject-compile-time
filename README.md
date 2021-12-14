## Peers
- https://github.com/YePpHa/ts-di-transformer
- https://github.com/wessberg/DI

## https://github.com/YePpHa/ts-di-transformer

```sh
npx webpack && node dist/main.js
```

```ts
class App {
    constructor(todo) {
        this._todo = todo;
    }
}

bootstrap.resolve(app_1.App, [Symbol.for("ITodoService#0978228a")]);
```

### Pros/cons
[-] Do not enable `transpileOnly` - will not work  
[+] Maybe better for NestJS  
```ts
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
export class AppController {
  constructor(@Inject(InterfaceSymbol<ITodoService>()) private readonly todoService: ITodoService) { }
}
```

## https://github.com/wessberg/di-compiler
```sh
npx webpack && node dist/bundle.js
```

```ts
class App {
    constructor(todo) {
        this._todo = todo;
    }
    static get [Symbol.for("___CTOR_ARGS___")]() { return [`ITodoService`]; }
}
```

## Resouces
- https://github.com/TypeStrong/ts-node#third-party-compilers
- https://github.com/nonara/ts-patch#configuring