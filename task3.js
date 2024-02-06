
// Write a function to count the number of vowels in a string.



function countRepeated(string){
    let sum=0
    let vowels='aAeEiIoOuU'
    for(const value of string){
        if(vowels.includes(value)){
            sum=sum+1
        }
        
    }
    return sum
}

const valu=countRepeated('I am aA student')
console.log('vowels value is ' , valu ,'times')