import { add } from "src/functions";

// Given the user input is empty when calculating the sum then it should return zero.
test('when user input is empty, return zero', () => {
  const res = add();
  expect(res).toBe(0);
})
// Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
test('when user input is one number, then return same number', () => {
  const res = add("3");
  expect(res).toBe(3);
})
// Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
test('when user input is two numbers, then return the sum of them', () => {
  const res = add("1,2");
  expect(res).toBe(3);
})
// Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
test('when user input is an unknown amount of numbers, then return the sum of them all', () => {
  const res = add("1,2,3");
  expect(res).toBe(6);
})
// Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
test('when user input is multiple numbers with new line and comma delimiters, then return the sum of them all', () => {
  const res = add("1\n2,3");
  expect(res).toBe(6);
})
// Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
test('when user input is multiple numbers with a custom single-character delimiter, then return the sum of them all', () => {
  const res = add("//;\n1;2");
  expect(res).toBe(3);
})
// Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
test('when user input contains one negative number, then it should throw an exception "negatives not allowed: x"', () => {
  expect(() => add("-5,2,3")).toThrow("negatives not allowed: -5");
})
// Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
// Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
// Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[]\n12***3” should return 6)
// Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[][%]\n12%3” should return 6)

//https://jestjs.io/docs/expect#tothrowerror