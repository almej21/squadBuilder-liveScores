/* eslint-disable array-callback-return */
import React from 'react';
import { PLAYERS } from '../players-const';


export default function PlayerOptionsComponent(props) {
    var currentPosition = props.position;
    const OnClickPlayer = (playerChosen, index)=>{
        let newArrayToSet = [];
        newArrayToSet.push(...props.playerSrc.slice(0, index));
        newArrayToSet.push(playerChosen.imgSrc);
        newArrayToSet.push(...props.playerSrc.slice(index+1, 11));
        // is the "set" function of usestate hooks is asynchronous??
        props.setPlayerSrc(newArrayToSet);
        console.log("length of newArrayToSet is: " +newArrayToSet.length + "  " + newArrayToSet);
        console.log("length of props.playerSrc is: " + props.playerSrc.length + "  " + props.playerSrc);
        props.setPlayerOptionsState(false);
        let animationArrayToSet = [];
        animationArrayToSet.push(...props.playerAnimation.slice(0, index));
        animationArrayToSet.push(true);
        animationArrayToSet.push(...props.playerAnimation.slice(index+1, 11));
        props.setPlayerAnimation(animationArrayToSet);
        setTimeout(()=>{
            props.setPlayerAnimation([false,false,false,false,false,false,false,false,false,false,false])
        }, 300);
    }
        
    return (
    <div>
        {PLAYERS.map((playerPosition, index)=>{
            if(playerPosition.position === currentPosition){
                return playerPosition.players.map((playerChosen)=>{
                    return <img key = {playerChosen.name} className='single-player' src={playerChosen.imgSrc}
                    onClick={()=>{OnClickPlayer(playerChosen, index)}} alt="img"/> 
                    })
            }
        })}
    </div>
    );
}