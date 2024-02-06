// Generate a random number between 10 to 20.

function randomNumber(numbers){
    const randomNumber=Math.random()*11+10;
    const decimal=Math.floor(randomNumber)
    return decimal
}
const num=randomNumber()
console.log(num)