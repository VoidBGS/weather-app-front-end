import React from 'react'

function formatContent(array){
    let formattedArray = array.split('**').map(str => <p>{str}</p>);;

    return formattedArray;
}

export default formatContent;