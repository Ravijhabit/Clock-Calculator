import React from 'react';
import css from './header.module.css';

const header = ()=>{
    return (
        <div className={css.heading}>
            <h1>Clock Calculator</h1>
            <hr/>
        </div>
    )
}
export default header;