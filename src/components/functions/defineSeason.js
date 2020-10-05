function defineSeason(){
    //         start    end
    //Winter - 1/12 	28/02
    //Spring - 1/03 	31/05 
    //Summer - 1/06 	31/08 
    //Autumn - 1/09 	30/11

    let date = new Date();
    let season = "";
    let thisMonth = String(date.getMonth() + 1);
    switch(thisMonth) {
        case '12':
        case '1':
        case '2':
            season = 'Winter';
        break;
        case '3':
        case '4':
        case '5':
            season = 'Spring';
        break;
        case '6':
        case '7':
        case '8':
            season = 'Summer';
        break;
        case '9':
        case '10': 
        case '11':
            season = 'Autumn';
        break;
        default: season = 'Summer';
    }

    return season;
}

export default defineSeason;