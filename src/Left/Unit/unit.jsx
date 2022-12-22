import React from 'react';

import Note from '../Note/note';
import css from './unit.module.css';

const unit = ({first,second,type})=>{
    return(
        <div className={css.container}>
            <div className={css.unit}>
                <Note val={first}/>
                <Note val={second}/>
            </div>
            <h3>{type}</h3>
        </div>
    );
}

export default unit;