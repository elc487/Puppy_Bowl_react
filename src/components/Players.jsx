// Import the React library
import React from "react";


// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../API/puppyBowlApi.js";

// Import the CSS styles for this component
import '../index.css'
import SinglePlayer from "./SinglePlayer.jsx";


// Define a new React component
const Players = ({setSelectedPuppy,searchVal}) => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
   return <div>
    Loading.....
    </div>
  }
  // Show an error message if the fetch failed
  if (error) { 
    return <div>
    Something broke...
    </div>
  }

  // Show the fetched data after it has arrived
  return (
    <>
    <div className="players">
     {searchVal ? (
      data.data.players.filter((player) =>
        
        (player.name.toLowerCase().includes(searchVal) ||player.breed.toLowerCase().includes(searchVal))).map((fplayer) => (
      
          ( <SinglePlayer key={fplayer.id} player={fplayer} setSelectedPuppy={setSelectedPuppy}/>)
          ))
          ):

     (data.data.players.map((player) => ( 
        // Use the player's ID as the key for this div
        ( <SinglePlayer key={player.id} player={player} setSelectedPuppy={setSelectedPuppy}/> )))
        //sorted dogs soi can see the new ones show up at the top
        .sort((a,b)=> b.key-a.key))}
     </div>
     </>
     )
}

// Export the component so it can be imported and used in other files
 
      
export default Players