import React, {useState} from 'react';
import PlayerOptionsComponent from '../player-options/player-options';
import './SquadBuilder.css';

export default function SquadBuilder(props) {

  const [playerOptionsState, setPlayerOptionsState] = useState('');
  
  const [playerSrc, setPlayerSrc] = useState(['./add.png','./add.png',
  './add.png','./add.png','./add.png','./add.png','./add.png',
  './add.png','./add.png','./add.png','./add.png']);

  const [playerAnimation, setPlayerAnimation] = useState([false,false,false,false,false,false,false,false,false,false,false]);

  const OnClickAddPlayer = (e) => { 
    setPlayerOptionsState(`${e.currentTarget.id}`);
    let arrayToSet = [false,false,false,false,false,false,false,false,false,false,false];
    setPlayerAnimation(arrayToSet);
  }

  // create an exit button, and if clicked, then change state to ''.
  // and because the '' means false then the PlayerOptionsComponent won't show.
  const OnClickExitAddPlayerMode = (e) => {
    setPlayerOptionsState(`${''}`);
  }

  const OnClickExitToHome = ()=>{
    props.setscreenState(0);
  }

  return (
    <div className="SquadBuilder">
      <div className={`squadTemplateDIV ${playerOptionsState ? "player-options" : ""}`}>
        <img src='./squad-builder-empty.png' id="emptySquadIMG" alt="logo" />
        <img src={playerSrc[0]} className={`addPlayerBTN ${playerAnimation[0] ? 'opacity-animation' : ''}`} id='GK' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[1]} className={`addPlayerBTN ${playerAnimation[1] ? 'opacity-animation' : ''}`} id='RB' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[2]} className={`addPlayerBTN ${playerAnimation[2] ? 'opacity-animation' : ''}`} id='RCB' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[3]} className={`addPlayerBTN ${playerAnimation[3] ? 'opacity-animation' : ''}`} id='LCB' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[4]} className={`addPlayerBTN ${playerAnimation[4] ? 'opacity-animation' : ''}`} id='LB' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[5]} className={`addPlayerBTN ${playerAnimation[5] ? 'opacity-animation' : ''}`} id='RCM' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[6]} className={`addPlayerBTN ${playerAnimation[6] ? 'opacity-animation' : ''}`} id='CM' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[7]} className={`addPlayerBTN ${playerAnimation[7] ? 'opacity-animation' : ''}`} id='LCM' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[8]} className={`addPlayerBTN ${playerAnimation[8] ? 'opacity-animation' : ''}`} id='LW' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[9]} className={`addPlayerBTN ${playerAnimation[9] ? 'opacity-animation' : ''}`} id='ST' onClick={OnClickAddPlayer} alt="icon"></img>
        <img src={playerSrc[10]} className={`addPlayerBTN ${playerAnimation[10] ? 'opacity-animation' : ''}`} id='RW' onClick={OnClickAddPlayer} alt="icon"></img>
        <button className='BackBTN' id='exit-squad-builder-mode' onClick={OnClickExitToHome}>back</button>
      </div>

      {/*playerOptionsState is the id of the element pressed to add a player. after a click to add a player, OnClickAddPlayer is invoked 
      and playerOptionsState is will change to a position. (GK, ST...)*/}

      {playerOptionsState && <div className='player-options-component'>
        <PlayerOptionsComponent position={playerOptionsState} setPlayerAnimation = {setPlayerAnimation} playerAnimation = {playerAnimation}
        setPlayerSrc={setPlayerSrc} playerSrc={playerSrc} setPlayerOptionsState = {setPlayerOptionsState}/>
        <button className='BackBTN' id='exit-add-player-mode-btn' 
        onClick={OnClickExitAddPlayerMode}>back</button>
      </div>}

      {/* the next line means that if the playerOptionsState is true,
       => the state of playerOptionsState is one of the positions,
        then render to the screen the PlayerOptionsComponent.
        (using the && operator gets true only if both expressions are true.
        the component is always true but state isn't, because if the state is
        empty string then it is false.)
        
        TODO: add dataFromParent = {this.state.data} to the PlayerOptionsComponent to pass info about
        the right position chosen */}
      


    </div>
  );

}


