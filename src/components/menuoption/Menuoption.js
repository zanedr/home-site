import React from 'react';
import './Menuoption.css';

export const Menuoption = (props) => {
    const { title, classes } = props

    return (
        <article className={`menu-option ${classes}`}>
            <button className="menu-option-text">{title}</button>
        </article>
    )
}