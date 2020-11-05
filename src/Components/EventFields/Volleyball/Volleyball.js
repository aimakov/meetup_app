import classes from './Volleyball.module.css';
import React, { Component } from 'react';
import Dot from '../../Event/Dot/Dot';

class VolleyBallCourt extends Component {

    state  = {
        positions : [
            { id: 'Setter', name: 'Setter', player: 'Setter'},
            { id: 'FrontLeft', name: 'Front Left', player: 'Front Left'},
            { id: 'FrontRight', name: 'Front Right', player: 'Front Right'},
            { id: 'Serving', name: 'Serving', player: 'Serving'},
            { id: 'BackLeft', name: 'Back Left', player: 'Back Left'},
            { id: 'Center', name: 'Center', player: 'Center'},
        ]
    } 


    positionClickedHandler = (posId) => {
        const posIndex = this.state.positions.findIndex(c => {
            return c.id === posId;
        });
        
        const updatedPosition = {...this.state.positions[posIndex]};

        updatedPosition.player = 'Nurba';

        const updatedPositions = [...this.state.positions]
        updatedPositions[posIndex].player = updatedPosition.player;

        this.setState({positions: updatedPositions})
        // console.log(this.state.positions);
        
    }

    render(){
        return(
            <div className={classes.Volleyball}>

                <div className={classes.LeftBig}></div>
                <div className={classes.LeftSmall}></div>
                <div className={classes.RightSmall}></div>
                <div className={classes.RightBig}></div>

                {this.state.positions.map((pos) => (
                    <Dot key={pos.id} position={pos.id} name={pos.player} clicked={() => this.positionClickedHandler(pos.id)}/>
                ))}

            </div>
        );
    }
}




export default VolleyBallCourt;