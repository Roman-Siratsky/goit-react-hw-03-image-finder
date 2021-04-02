import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'
import styles from './imageGallery.module.css'

const ImageGallery = (props) => {
    console.log(props.images);
    return (
        <ul className={styles.imageGallery}>
            {props.images.map(image => {
                return (
                    <ImageGalleryItem key={image.id} image={image} toggleModal={props.toggleModal}/>
                )
            })}
        </ul>
    )
}

export default ImageGallery;