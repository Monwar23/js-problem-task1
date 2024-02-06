// You are given an array of numbers. Count how many times the a number is repeated in the array.



function countRepeated(number,target){
    let sum=0
    for(const num of number){
        if(num===target){
            sum=sum+1
        }
        
    }
    return sum
}

const value=countRepeated([5,6,11,12,98, 5, 5],25)
console.log('target value is ' , value ,'times')