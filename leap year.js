// function leapYear(year){
//     if(year%4===0){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// const isLeapYear=leapYear(2028)
// console.log(isLeapYear)



function leapYear(year){
        if(year%100!==0 && year%4===0){
            return true
        }
        else if(year%100===0 && year%400===0){
            return true;
        }
        return false
    }
    const isLeapYear=leapYear(2029)
    console.log(isLeapYear)