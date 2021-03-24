import React from 'react'
import styles from './imageGallery.module.css'

const Button = (props) => {

    const onLoadMoreClick = () => {
        props.fetchImages();
        props.toggleLoader()
    }
    return (
        <div className={styles.containerMore}>
            <button className={styles.moreButton} onClick={onLoadMoreClick}>
                    Load More
            </button>
        </div>
    )
}

export default Button;