import { useFetchPlayerQuery } from "../API/puppyBowlApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCircleXmark, faCircleLeft} from "@fortawesome/free-regular-svg-icons";
import { useDeletePlayerMutation } from "../API/puppyBowlApi";


 
function PuppyDetails({selectedPuppy,setSelectedPuppy}){
  const { data = {}, error, isLoading } = useFetchPlayerQuery(selectedPuppy);
  const [deletePlayer] = useDeletePlayerMutation()
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
 async function handleClick(data){
     await deletePlayer(data.id),
    setSelectedPuppy(null),
    console.log(`${data.name} has been removed from the Puppy Bowl`) 
  }
  


   

  return (

    <>
    <h3>Player Details</h3>
    <div key={data.data.player.id} className="player-card">      
    {<FontAwesomeIcon className='back' icon={faCircleLeft} onClick={() => {setSelectedPuppy(null)}}>Back</FontAwesomeIcon>}
    <FontAwesomeIcon className='delete' icon={faCircleXmark} onClick={() => handleClick(data.data.player)}/>   
    <div className= "player-image-container">
    <img className= "player-image" src ={data.data.player.imageUrl} alt = {data.data.player.name}/>
    </div>
    <div className="player-details">


         
      <h2>  {data.data.player.name} </h2> 
      
      <p>  Breed: {data.data.player.breed} </p> 
      
      <p> Position: {data.data.player.status}</p>

      {/* if puppy doesnt have a team call them a freeagent */}
      <p>
        
        {data.data.player.team ? (
        <>Team: 
       {data.data.player.team.name}</> ):
        (<>Team: Free Agent</>)}
      </p>
        
      
      


    </div>
    
  </div>
    </>    
      );
}

export default PuppyDetails;