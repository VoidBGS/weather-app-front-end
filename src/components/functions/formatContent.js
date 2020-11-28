import React from 'react'

function formatContent(array){
    let formattedArray = array.split('**').map(str => <p>{str}</p>);

    return formattedArray;
}
function formatContentBold(array){
    let formattedArrayBold = array.split('*').map(str => <b>{str}</b>);
    
    return formattedArrayBold;
}

export default formatContent;