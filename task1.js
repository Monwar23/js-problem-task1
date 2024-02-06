// Write a function to convert temperature from Celsius to Fahrenheit.

function CelsiusToFahrenheit(degree){
    const Fahrenheit=(degree*(9/5))+32;
    return Fahrenheit;
}
const newFahrenheit=CelsiusToFahrenheit(2)
console.log(newFahrenheit)