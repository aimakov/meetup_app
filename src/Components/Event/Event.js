import React from 'react'
import classes from './Event.module.css'

const Event = (props) => (
    <div className={classes.Event} onClick={props.click}>
        <div className={classes.Text} >
            {props.event}
        </div>
    </div>
);

export default Event;