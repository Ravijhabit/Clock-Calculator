import React from "react";

import Unit from "../Unit/unit";
import css from './hms.module.css';

const hms = ({hr,min,sec}) => {
    console.log(hr+" "+min+" "+sec);
    return(
        <div className={css.container}>

            <Unit first={parseInt((hr/10)%10)} second={hr%10} type='HOURS'/>
            
            <Unit first={parseInt((min/10)%10)} second={min%10} type='MINUTES'/>
            
            <Unit first={parseInt((sec/10)%10)} second={sec%10} type='SECONDS'/>
        </div>
    )
}

export default hms;