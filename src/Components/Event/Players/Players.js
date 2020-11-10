import React from 'react'
import './Players.css'
const Players = (props) => {
    return(
        <div className='Players'>
            <ul>
                {props.players.map((player) => (
                    <li key={player.name}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Players;