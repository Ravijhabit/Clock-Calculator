import React from 'react';

import css from './display.module.css';
import Hms from '../Left/hms/hms';
import Days from '../Left/Days/days';

const display = ({totalTime})=>{
    console.log(totalTime);
    return (
        <div className={css.container}>
            <Days day={totalTime[0]}/>
            <Hms hr={totalTime[1]} min={totalTime[2]} sec={totalTime[3]}/>
        </div>
    )
}
export default display;