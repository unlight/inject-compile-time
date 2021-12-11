const ts = require('typescript');
const transformer = require('ts-di-transformer/transformer').default;
const path = require('path');

/** @type {!ts.CompilerOptions} */
const compilerOptions = require('./tsconfig.json').compilerOptions;
if (compilerOptions.lib) {
  compilerOptions.lib = compilerOptions.lib.map(x => "lib." + x + ".d.ts");
}
const compilerHost = ts.createCompilerHost(compilerOptions);

const program = ts.createProgram(
  [path.join(__dirname, 'src/main.ts')],
  compilerOptions,
  compilerHost
);

const transformers = {
  before: [transformer(program)],
  after: []
};

const { emitSkipped, diagnostics } = program.emit(undefined, undefined, undefined, false, transformers);

if (emitSkipped) {
  throw new Error(diagnostics.map(diagnostic => diagnostic.messageText).join('\n'));
}