import readline from "readline-sync";

const functions = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
};

function calc(exp: Array<number | string>): number | undefined {
  try {
    let stack: Array<number | string> = [];

    exp.forEach((op: number | string) => {
      if (typeof op === "number") {
        stack.push(op);
      } else if (typeof op === "string") {
        const func = (functions as any)[op];
        const number1 = stack.splice(-1)[0];
        const number2 = stack.splice(-1)[0];
        const result = func(number2, number1);
        stack.push(result);
      }
    });

    return stack[0] as number;
  } catch (error) {
    console.log("Hatalı ifade girdiniz.");
    return undefined;
  }
}

console.log("İfade girin : ");

let exp: Array<string | number> = readline.question().split(" ").reverse();
exp = exp.map((i: string | number) => {
  return Number(i) ? Number(i) : i;
});

console.log(calc(exp));
