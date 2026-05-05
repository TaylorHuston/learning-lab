// Use JSON.stringify() to convert a JavaScript value into a JSON string.
const jsonString = JSON.stringify({
  name: "Bob",
  born: 1990,
});
console.log(jsonString);

// Use JSON.parse() to convert a JSON string back into a JavaScript value.
const parsed = JSON.parse(jsonString);
console.log(parsed.born);

// JSON supports strings, numbers, booleans, null, arrays, and objects.
// It does not preserve functions, undefined, Symbols, Maps, Sets, or Dates as-is.
