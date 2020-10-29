import React, { Component } from 'react'
// import classes from './Toolbar.module.css'
import Event from '../../Components/Event/Event'
import Aux from '../../Auxiliary/Auxiliary'

class Toolbar extends Component {

    state = {
        events : [
            {id: 'Volleyball'},
            {id: 'Basketball'},
            {id: 'Football'},
            {id: 'Among Us'},
            {id: 'Mafia'},
            {id: 'Resistance'}
        ],
        message: 'lol'
    }

    eventClickedHandler = (eventKey) => {
        const eventId = this.state.events.findIndex(c => {
            return c.id === eventKey;
        })

        this.setState({message: this.state.events[eventId].id})
    }

    render() {

        return(
            <Aux>
                {this.state.events.map((event) => {
                    return <Event event={event.id} key={event.id} click = {() => this.eventClickedHandler(event.id)}/>
                }
                
            )}
            {this.state.message}
            <div>Sidebar - Meetup options</div>
            <div>Main Window - Setting up an event</div>
            
            </Aux>
            
            // <div className={classes.Toolbar}>Toolbar - Event Types</div>
        )
    }
}

export default Toolbar;