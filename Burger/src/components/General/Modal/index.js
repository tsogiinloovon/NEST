import React from 'react';
import css from './style.module.css';
const Modal = (probs) =>{
    return (
        <div className = {css.Modal}>{probs.children}</div>
    )
}
export default Modal;