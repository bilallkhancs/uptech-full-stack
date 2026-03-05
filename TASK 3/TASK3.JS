function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default: dayName = "Invalid day number"; 
    } 
        return dayName;
    }

console.log(getDayName(5))
console.log(getDayName(8))

function print1to10(){
    let i=1
    while(i<=10){
        console.log(i)
        i++
    }
}
print1to10()

function print10to1(){
    let i=10
    do{
        console.log(i)
        i--
    }while(i>=1)
}
print10to1()

