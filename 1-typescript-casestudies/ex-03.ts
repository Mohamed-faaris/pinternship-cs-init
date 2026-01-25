const city:string = "trichy"
const temperature:number = 40
const isRaining = false

const weatherReport = (city:string,temperature:number,isRaining:boolean) => {
  console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`)
}

weatherReport(city,temperature,isRaining)

// ❯ bun tsr ex-03.ts

// $ bun x tsc--noEmit && bun run "ex-03.ts"
// In trichy, it is 40°C.Is it raining ? false