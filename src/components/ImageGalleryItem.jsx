import React from 'react'
import styles from './imageGallery.module.css'

const ImageGalleryItem = ({image, toggleModal}) => {
    return (
                <li className={styles.listItem}>
                    <img onClick={(e) => {
                        if (e.currentTarget === e.target) {
                            toggleModal(image.largeImageURL);
                        }
                    }}
                        src={image.previewURL}
                        alt={image.tags}
                        className={styles.listImage} />
                </li>
            )
}

export default ImageGalleryItem;