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

bootstrap.resolve(app_1.App, [Symbol.for("ITodoService#0978228aaa42ef84957335a179a6d615a6ef31a5501e613bc4a8aa16a2febbdd")]);
```

### Pros/cons
[+] Maybe better for NestJS
```ts
providers: [
    { provide: InterfaceSymbol<ITodoService>(), useClass: class Todo implements ITodoService { } },
]

class App {
	constructor(@Inject(InterfaceSymbol<ITodoService>()) private todo: ITodoService) {}
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