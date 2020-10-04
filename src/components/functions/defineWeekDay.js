function defineWeekDay(day){
    let date = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', "Sunday", "Monday", "Tuesday"];

    return days[date.getDay() + day]
}

export default defineWeekDay;