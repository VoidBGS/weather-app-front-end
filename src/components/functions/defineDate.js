function defineDate(passedDate = ""){
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    let monthDay = passedDate[5] + passedDate[6];
    if(monthDay.startsWith(0)) monthDay.replace(0, " ")
    let day = passedDate[8] + passedDate[9];
    let year = passedDate.slice(0, 4);
    let concat = day.replace("0", " ") + " " + months[monthDay - 1] + " " + year;
    
    return concat;
}

export default defineDate;