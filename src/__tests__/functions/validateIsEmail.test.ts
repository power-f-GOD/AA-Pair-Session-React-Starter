import { validateIsEmail } from "src/functions";

test('validateIsEmail to return true if text contains an @', () => {
  expect(validateIsEmail('string@example.com')).toBeTruthy();
  expect(validateIsEmail('string#example.com')).toBeFalsy();
})