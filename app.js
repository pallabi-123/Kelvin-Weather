// constant holding our Kelvin value
const kelvin = 0;
// Kelvin value converted to celcius
const celsius = kelvin - 273; 
// celsius value converted to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
