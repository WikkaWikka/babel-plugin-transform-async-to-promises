const babel = require("@babel/core");
const asyncToPromises = require("./async-to-promises");

const input = `"use transform-async-to-promises-runtime";
async function test() { 
  return await Promise.resolve(42); 
}`;

try {
  const result = babel.transformSync(input, {
    plugins: [[asyncToPromises, { externalHelpers: "global" }]],
    compact: false,
  });

  console.log("SUCCESS!");
  console.log("Generated code:");
  console.log(result.code);
} catch (error) {
  console.log("ERROR:", error.message);
  console.log("Stack:", error.stack);
}
