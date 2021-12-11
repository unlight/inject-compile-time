# Example of Dependency Injection with Interfaces
This is an example app that test dependency injection with interfaces. It uses
https://github.com/YePpHa/ts-di-transformer to demonstrate that it's possible
without needing to use annotations.

## How to start this program
__Yarn__
```
$ yarn
$ yarn start
```

__NPM__
```
$ npm install
$ npm run start
```

## How does it work?
The project https://github.com/YePpHa/ts-di-transformer will transform the code
on compile-time. However, this requires the custom transformer to be used that's
included in `ts-di-transformer`.

This example is directly calling the TypeScript API to apply the custom
transformer. However, if you're using webpack you can use
[awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader#getcustomtransformers-string--program-tsprogram--tscustomtransformers--undefined-defaultundefined).

### Bootstraping

All interfaces must be declared before starting the app. This can be done as in
`/src/main.ts`:
```TypeScript
[...]

const bootstrap = new Container();

bootstrap.bind(InterfaceSymbol<IHttp>(), Http);
bootstrap.bind(InterfaceSymbol<ITodoService>(), Todo);

bootstrap.resolve(App).run();
```

Notice that each implementation of an interface must be declared before calling
`.resolve(App)`. If they're not called it will result in an runtime error as the
dependency system will not be able to find the implementation.