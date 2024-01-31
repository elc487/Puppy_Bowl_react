import React, { useState } from "react"
import Players from "./Players"


export default function Searchbar ({placeholder, setSearchVal}){
   const [query,setQuery] = useState("")
  
   async function handleSubmit(){
    
    // console.log('This is working')
    return(
        setSearchVal(query)
        
        )
            

}
   
    return(

        <>
        <div className="searchInputs">
            <input type="text"
            placeholder={placeholder
            } onChange={(e) => setQuery(e.target.value)}/> </div>
            <div className="searchIcon"></div>
            <button onClick={() => {handleSubmit(query)}}>Search</button>
        </>
       
        
    
     )
}