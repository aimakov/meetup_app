import classes from './Volleyball.module.css';
import React, { Component } from 'react';
import Dot from '../../Event/Dot/Dot';
import Players from '../../Event/Players/Players';
import Aux from '../../../Auxiliary/Auxiliary'

class VolleyBallCourt extends Component {

    state  = {
        positions : [
            { id: 'Setter', name: 'Setter', player: 'Setter'},
            { id: 'FrontLeft', name: 'Front Left', player: 'Front Left'},
            { id: 'FrontRight', name: 'Front Right', player: 'Front Right'},
            { id: 'Serving', name: 'Serving', player: 'Serving'},
            { id: 'BackLeft', name: 'Back Left', player: 'Back Left'},
            { id: 'Center', name: 'Center', player: 'Center'},
        ],

        players : [
            { name: 'Muhammadjon Boboev', rank: 10 },
            { name: 'Temuge Munkhbat', rank: 10 },
            { name: 'Myrat Bairamov', rank: 9 },
            { name: 'Samar Hasanov', rank: 9 },
            { name: 'Badraa Bat-Ulzii', rank: 8 },
            { name: 'Nurbolat Aimakov', rank: 8 },
            { name: 'Bekatan Satyev', rank: 8 },
            { name: 'Nasrulloh Yahyozoda', rank: 7 },
            { name: 'Baur Salim', rank: 7 },
            { name: 'Dilshod Bakhtiyorov', rank: 7 },
            { name: 'Hyewon Cho', rank: 6 },
            { name: 'Marianna Li', rank: 6 },
            { name: 'Zhibek Sadykova', rank: 6 },
            { name: 'Abel Worku', rank: 6 },
            { name: 'Karakoz Mukhambetiyar', rank: 5 },
            { name: 'Bayarmaa Tumur-Ochir', rank: 4 },
            { name: 'Rye Sanada', rank: 4 },
            { name: 'Alex Morges', rank: 4 },
            
        ]
    } 

    strongPlayersShuffle = () => {
        console.log("Strong Players: ");
        this.state.players.map(player => {
            if (player.rank >= 8) {console.log(player.name)}
            return null;
        });

    }

    goodPlayersShuffle = () => {
        console.log("Good Players: ");
        this.state.players.map(player => {
            if ((player.rank<8) && (player.rank>=5)) {console.log(player.name)}
            return null;
        });

    }

    learningPlayersShuffle = () => {
        console.log("Learning Players: ");
        this.state.players.map(player => {
            if (player.rank <5) {console.log(player.name)}
            return null;
        });

    }



    positionClickedHandler = (posId) => {
        const posIndex = this.state.positions.findIndex(c => {
            return c.id === posId;
        });
        
        const updatedPosition = {...this.state.positions[posIndex]};
        
        if (updatedPosition.player === 'Nurba') {
            updatedPosition.player = updatedPosition.name;
        }
        else updatedPosition.player = 'Nurba'
        

        const updatedPositions = [...this.state.positions]
        updatedPositions[posIndex].player = updatedPosition.player;

        this.setState({positions: updatedPositions})
        // console.log(this.state.positions);
        
    }

    render(){

        return(
            <Aux>

                <Players players={this.state.players} />


                <div className={classes.Volleyball}>

                    <div className={classes.LeftBig} onClick={this.strongPlayersShuffle}></div>
                    <div className={classes.LeftSmall} onClick={this.goodPlayersShuffle}></div>
                    <div className={classes.RightSmall} onClick={this.learningPlayersShuffle}></div>
                    <div className={classes.RightBig}></div>


                    {this.state.positions.map((pos) => (
                        <Dot key={pos.id} position={pos.id} name={pos.player} clicked={() => this.positionClickedHandler(pos.id)}/>
                    ))}

                </div>
            </Aux>
            
        );
    }
}




export default VolleyBallCourt;