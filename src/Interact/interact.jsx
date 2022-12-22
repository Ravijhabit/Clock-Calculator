import React from "react";

import Display from '../Display/display';
import UserInput from '../UserInput/userInput';
import css from './interact.module.css';

export function Interact (){
    return(
        <div className={css.interact}>
            <Display/>
            <UserInput/>
        </div>
    )
}