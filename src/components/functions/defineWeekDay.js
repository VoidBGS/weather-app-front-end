function defineWeekDay(day){
    let date = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let errorCheck = date.getDay() + day;

    if(errorCheck === 7) return "Sunday"
    else if(errorCheck === 8) return "Monday"
    else if(errorCheck === 9) return "Tuesday"

    else return days[date.getDay() + day]
}

export default defineWeekDay;