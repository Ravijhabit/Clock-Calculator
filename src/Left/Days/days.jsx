import React from "react";

import css from './days.module.css';
import Unit from '../Unit/unit';

const days = () =>{
    return(
        <div className={css.container}>
        
            <Unit first='2' second='7' type='DAYS'/>
        </div>
    );
}

export default days;