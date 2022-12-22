import React,{useState} from "react";

import css from './input.module.css';

const initialValues = {
    hours:"",
    minutes:"",
    seconds:"",
};

const input = ()=>{
    const [values,setValues] = useState(initialValues);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]:(value)%60,
        });
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Time has been noted ${values.hours} hrs ${values.minutes} min and ${values.seconds} sec.`);
    }

    return(
        <div className={css.container}>
            <form onSubmit={handleSubmit}>
                <input className={css.blk} name="hours" label="hours" type="number" min="0" max="59"value={values.hours} onChange={handleInputChange} placeholder="(Hrs)"/>
                <input className={css.blk}name="minutes" label="minutes" type="number" min="0" max="59"value={values.minutes} onChange={handleInputChange} placeholder="(Min)"/>
                <input className={css.blk} name="seconds" label="seconds" type="number" min="0" max="59"value={values.seconds} onChange={handleInputChange} placeholder="(Sec)"/>
                <input id={css.submitBtn} type="submit" value="↵"/>
            </form>
        </div>
    )
}

export default input;