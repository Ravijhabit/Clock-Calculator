import React from "react";

import Unit from "../Unit/unit";
import css from './hms.module.css';

const hms = () => {
    return(
        <div className={css.container}>

            <Unit first='9' second='1' type='HOURS'/>
            
            <Unit first='9' second='1' type='MINUTES'/>
            
            <Unit first='9' second='1' type='SECONDS'/>
        </div>
    )
}

export default hms;