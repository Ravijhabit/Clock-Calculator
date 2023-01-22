import React, {useEffect, useRef, useState} from 'react';
import css from './userInput.module.css';

import Input from '../Input/input';
const userInput = ({handleChange,totalTime})=>{
    const bottomRef = useRef(null);
    const [inputArr,setInputArr]=useState([<Input handlerOption={handlerOption} key='0'/>]);
    const onAddBtnClick = () =>{
        setInputArr(inputArr.concat(<Input key={inputArr.length}/>));
    };
    // changeTime([4,1,5,1]);
    // const onSubBtnClick = ()  =>{
    //     //remove last Element
    // };
    
    //disabled
    function handlerOption(add){
        totalTime[1]+=parseInt(add.hours);
        totalTime[2]+=parseInt(add.minutes);
        totalTime[3]+=parseInt(add.seconds);
        handleChange(totalTime);
    }

    useEffect(() => {

        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [inputArr]);
    
    return (
        <div className={css.container}>
            <div className={css.helper}>
                <h5>Hrs</h5>
                <h5>Min</h5>
                <h5>Sec</h5>
            </div>
            <div className={css.inpt}>
                {inputArr}
                <div style={{'display':'flex','justifyContent':'space-between'}}>
                    <span ref={bottomRef} className={css.add} onClick={onAddBtnClick}>+</span>
                    {/* <span className={css.add} onClick={onSubBtnClick}>-</span> */}
                </div>
            </div>
        </div>
    )
}
export default userInput;