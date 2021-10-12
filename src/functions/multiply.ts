export const add = (num?: string) => {
  if (num && /-\d+/.test(num)) {
    const negatives = num.split(',')
      .filter(n => n.includes('-'));

    throw new Error(`negatives not allowed: ${negatives}`);
  }

  const delimiter = num?.startsWith('//') ? num.slice(2, 3) : '';
  const [num1, num2, ...other] = num ? num
    .split(new RegExp(`${delimiter}|\\n|,`))
    .map(Number).filter(n => +n)
    : [0];

  return num1 + num2 + other.reduce((a, b) => a + b, 0) || num1;
}