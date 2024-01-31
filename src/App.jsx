// Import the React library, which allows us to define components
import React from "react";
import { useState } from "react";
import "./index.css"

// Import the Players component, which we'll use to show a list of players
import Players from "./components/Players";
import Searchbar from "./components/Searchbar";
import NewPlayerForm from "./components/NewPlayerForm";
import PuppyDetails from "./components/PuppyDetails";



// Define the App component
export default function App() {
  const [selectedPuppy, setSelectedPuppy ] = useState(null)
  const [searchVal,setSearchVal] = useState("")
  return (
    <div className="App">
      <h1>Welcome to the puppybowl!</h1>
      <div className="search">
      <Searchbar setSearchVal={setSearchVal} placeholder="Search for a Puppy"/>
      </div>
      <div className="container">
      <NewPlayerForm />
        {selectedPuppy ? (
          
          <PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy}/>
         
        ):(<article className="playercontainer">
           <Players setSelectedPuppy={setSelectedPuppy} searchVal={searchVal} setSearchVal={setSearchVal}/>
           </article> )}
      </div>

      </div>
  )
}
  

// Export the App component as the default export