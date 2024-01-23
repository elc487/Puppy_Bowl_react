// Import the React library, which allows us to define components
import React from "react";


// Import the Players component, which we'll use to show a list of players
import Players from "./components/Players";
import Searchbar from "./components/Searchbar";
import NewPlayerForm from "./components/NewPlayerForm";


// Define the App component
export default function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <div className="App">
      
      <NewPlayerForm />
      <Searchbar placeholder="Search for a Puppy"/>
      <Players />
      
    </div>
    
  );
}

// Export the App component as the default export

