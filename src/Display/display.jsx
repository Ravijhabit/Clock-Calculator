import React from 'react';

import css from './display.module.css';
import Hms from '../Left/hms/hms';
import Days from '../Left/Days/days';

const display = ()=>{
    return (
        <div className={css.container}>
            <Days/>
            <Hms/>
        </div>
    )
}
export default display;