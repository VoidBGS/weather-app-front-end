function defineDate(passedDate = ""){
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let year = passedDate.slice(0, 4);
    let monthDay = passedDate[5] + passedDate[6];
    let day = passedDate[8] + passedDate[9];

    if(monthDay.startsWith('0')) monthDay = monthDay.replace('0', " ")
    if(day.startsWith('0'))  day = day.replace('0', " ")

    let concat = day + " " + months[monthDay - 1] + " " + year;
    
    return concat;
}

export default defineDate;