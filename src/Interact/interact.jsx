import React,{useState,useEffect} from "react";

import Display from '../Display/display';
import UserInput from '../UserInput/userInput';
import css from './interact.module.css';

export function Interact (){
    const [totalTime,setTotalTime]=useState([0,0,0,0]);
    function changeHandler(time){
        setTotalTime(time);
    }
    return(
        <div className={css.interact}>
            <Display totalTime={totalTime}/>
            <UserInput totalTime={totalTime} handleChange={changeHandler}/>
        </div>
    )
}