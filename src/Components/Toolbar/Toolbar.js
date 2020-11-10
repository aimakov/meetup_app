import React from 'react';
// import Aux from '../../Auxiliary/Auxiliary';
import Event from '../Event/Event'
import './Toolbar.css'

const Toolbar = (props) => (
    <div className='Toolbar'>
        {props.events.map((event) => {
            return <Event event={event.id} key={event.id} click = {() => props.clicked(event.id)}/>
        }
        
        )}
    </div>       
);

export default Toolbar;