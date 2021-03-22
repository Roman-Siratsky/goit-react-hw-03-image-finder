import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'
import styles from './imageGallery.module.css'

const ImageGallery = (props) => {
    console.log(props.images);
    return (
        <ul className={styles.imageGallery}>
            <ImageGalleryItem images={props.images} toggleModal={ props.toggleModal}/>
        </ul>
    )
}

export default ImageGallery;