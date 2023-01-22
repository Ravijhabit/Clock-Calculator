import React from 'react';
import css from './footer.module.css';

const footer = ()=>{
    return (
        <div className={css.foot}>
            <span>
                <a target="_blank" href='https://github.com/Ravijhabit/Clock-Calculator'><img src='./asset/git.svg' alt='github'/></a>
            </span>
            <h3>Designed and Developed in ❤️ with ⏰</h3>
            <span>
                <a target="_blank" href='https://www.figma.com/community/file/1187850020481497519'><img src='./asset/figma.svg' alt='figma'/></a>
            </span>
        </div>
    )
}
export default footer;