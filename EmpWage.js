//UC1 IF ELSE CONDITION
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2
    if(empCheck == 0){
    console.log("UC1- Employee is ABSENT")
    } else{
    console.log("UC1- Employee is PRESENT")
    }
}

//UC2 SWITCH CASE
{
    const IS_PART_TIME = 1
    const IS_FULL_TIME = 2
    const PART_TIME_HOURS = 4
    const FULL_TIME_HOURS = 8
    const WAGE_PER_HOUR = 20

    function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
        return PART_TIME_HOURS
        break

        case IS_FULL_TIME:
        return FULL_TIME_HOURS
        break

        default:
        return 0
    }
    } 

    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck)
    let empWage =  empHrs * WAGE_PER_HOUR
    console.log("UC2- Employee Wage: "+empWage)
}