const babel = require("@babel/core");
const asyncToPromises = require("./async-to-promises");

const input = `async function test() { await Promise.resolve(42); }`;

// Add some debugging to see what's happening
const originalConsoleLog = console.log;
console.log = (...args) => {
  if (args[0] && args[0].includes && (args[0].includes("externalHelpers") || args[0].includes("global"))) {
    originalConsoleLog(...args);
  }
};

const result = babel.transformSync(input, {
  plugins: [[asyncToPromises, { externalHelpers: "global" }]],
  compact: false,
});

console.log = originalConsoleLog;

console.log("Generated code:");
console.log(result.code);
console.log("\nContains global identifier:", result.code.includes("__GLOBAL_ASYNC_TO_PROMISES__"));
console.log("Contains import:", result.code.includes("import"));
