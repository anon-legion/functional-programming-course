function increment(num: number): number {
  return num + 1;
}

function numToString(num: number): string {
  return num.toString();
}

function compose<T>(func1: Function, func2: Function): Function {
  return (arg: T) => func2(func1(arg));
}

const incrementThenToString = compose<number>(increment, numToString);

const testcase = 69;
const result = incrementThenToString(testcase);

console.log(`testcase:${testcase}\nresult:${result}\ndata type: ${typeof result}`);