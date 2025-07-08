const babel = require("@babel/core");
const asyncToPromises = require("./async-to-promises");

const input = `async function test() { await Promise.resolve(42); }`;

const result = babel.transformSync(input, {
  plugins: [[asyncToPromises, { externalHelpers: "global" }]],
  compact: false,
});

console.log("Generated code:");
console.log(result.code);
console.log("\nContains global identifier:", result.code.includes("__GLOBAL_ASYNC_TO_PROMISES__"));
