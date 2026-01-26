const describePerson = (name: string, age?: number | null): void => {
  const ageInfo = typeof age === "number" ? age.toString() : age === null ? "not specified" : "Unknown";
  console.log(`Name: ${name}, Age: ${ageInfo}`);
}
describePerson("Eve");
describePerson("Frank", 28);
describePerson("Grace", null);

const calculatePrice = (basePrice: number, discount: number = 0.1): number => {
  return basePrice * (1 - discount);
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));

// ❯ bun tsr ex - 13.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-13.ts"
// Name: Eve, Age: Unknown
// Name: Frank, Age: 28
// Name: Grace, Age: not specified
// 90
// 80
// ❯ 
//  ~/pr/pin / 1 - typescript - casestudies │ Faaris - cs!1             