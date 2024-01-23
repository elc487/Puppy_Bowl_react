import React, { useState } from "react"


export default function Searchbar ({placeholder, data}){
   const [query,setQuery] = useState("")
   
    return(

        <div className="search">
        <div className="searchInputs">
            <input type="text"
            placeholder={placeholder
            } onChange={(e) => setQuery(e.target.value)}/>
            <div className="searchIcon"></div>
        </div>
        
    </div>
     )
}