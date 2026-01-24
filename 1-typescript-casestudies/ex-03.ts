const city:string = "trichy"
const temperature:number = 40
const isRaining = false

const weatherReport = (city:string,temperature:number,isRaining:boolean) => {
  console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`)
}

weatherReport(city,temperature,isRaining)
