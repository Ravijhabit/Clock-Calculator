import React from 'react';
import css from './footer.module.css';

const footer = ()=>{
    return (
        <div className={css.foot}>
            <span>
                <a target="_blank" href='https://github.com/Ravijhabit/Clock-Calculator'><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github'/></a>
            </span>
            <h3>Designed and Developed in ❤️ with ⏰</h3>
            <span>
                <a target="_blank" href='https://www.figma.com/community/file/1187850020481497519'><img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' alt='figma'/></a>
            </span>
        </div>
    )
}
export default footer;