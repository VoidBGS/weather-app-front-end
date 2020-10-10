import React from 'react'
import PhotosTitle from './PhotosTitle'
import './Photos.css'
import ImageSection from './ImageSection'

const Photos = () =>{
    return(
        <div>
        <PhotosTitle/>
       <ImageSection/>
       <ImageSection/>
        </div>
    )
}

export default Photos;