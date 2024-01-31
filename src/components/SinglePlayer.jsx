import React from "react";


function SinglePlayer({setSelectedPuppy, player}){
  
    return (
        <div key={player.id} className="player-card" >
        <div onClick={() => setSelectedPuppy(player.id)} className= "player-image-container">
        <img className= "player-image" src ={player.imageUrl} alt = {player.name}/>
        </div>
        <div className="player-details">
          
          <h3>  {player.name} </h3> 
          
          <p>  Breed: {player.breed} </p> 
          
          <p> Position: {player.status}</p>
        </div>
        
      </div>
    )}


export default SinglePlayer;