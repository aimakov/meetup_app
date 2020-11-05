import React from 'react';
import './Dot.css';

const Dot = (props) => {

    const style = 'Dot ' + props.position;
    return(
        <div className={style} onClick={props.clicked}><span>{props.name}</span></div>
    );
    

}

export default Dot;