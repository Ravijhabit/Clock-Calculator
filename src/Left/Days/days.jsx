import React from "react";

import css from './days.module.css';
import Note from "../Note/note";

const days = ({day}) =>{
    return(
        <div className={css.container}>
            <div className={css.holder}>
                <Note className={css.note} val={(day/100)%10} />    
                <Note className={css.note} val={(day/10)%10} />    
                <Note className={css.note} val={day%10} />  
            </div>
            <h3>DAYS</h3>  
        </div>
    );
}

export default days;