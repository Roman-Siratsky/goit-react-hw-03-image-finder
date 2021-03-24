import React, { Component } from 'react'
import styles from './Modal.module.css';
import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown',this.onEscape)
    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscape)
    }

    onEscape = (e) => {
            if (e.code === 'Escape') {
                this.props.toggleModal()
                console.log(e.code);
            }
    } 

    onOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal()
        }
    }
    render() {
        return createPortal(<div onClick={this.onOverlayClick} className={styles.overlay}>
            <div className={styles.modal}>
                {this.props.children}
            </div>
        </div>, modalRoot)
    }
}

export default Modal;