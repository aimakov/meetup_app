import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../Components/Toolbar/Toolbar';
import Volleyball from '../Components/EventFields/Volleyball/Volleyball';

class Layout extends Component {

    state = {
        events : [
            {id: 'Volleyball'},
            {id: 'Basketball'},
            {id: 'Football'},
            {id: 'Among Us'},
            {id: 'Mafia'},
            {id: 'Resistance'}
        ],
        message: null
    }

    eventClickedHandler = (eventKey) => {
        const eventId = this.state.events.findIndex(c => {
            return c.id === eventKey;
        })
        
        this.setState({message: this.state.events[eventId].id})
        console.log(this.state.message)
    }

    render() {
        
        return(
            <Aux>
            <Toolbar events={this.state.events} clicked={this.eventClickedHandler}/>
            <div>{this.state.message}</div>
            <Volleyball/>


            </Aux>
            
            // <div className={classes.Toolbar}>Toolbar - Event Types</div>
        )
    }
}

export default Layout;