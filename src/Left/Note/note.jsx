import React from 'react';
import css from './note.module.css';

const note = ({val}) => {
    return(
        <div className = {css.note}>
            <div className = {css.abs}/>
            <h1>{val}</h1>
        </div>
    );
}

export default note;