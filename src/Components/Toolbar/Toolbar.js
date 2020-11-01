import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Event from '../Event/Event'

const Toolbar = (props) => (
    <Aux>
        {props.events.map((event) => {
            return <Event event={event.id} key={event.id} click = {() => props.clicked(event.id)}/>
        }
        
        )}
    </Aux>       
);

export default Toolbar;