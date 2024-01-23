// import { useState,useEffect } from "react";


function SinglePlayer(){
//   const [contact, setContact] = useState([])
//   useEffect(()=>{      
//     async function fetchContact(){
//         try {
//             if (selectedContactID) {
                
//             const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`)
//             const jres = await res.json()
//             setContact(jres)         
//         }
//         } catch (error) {
//             console.log(error);
//         }

//     }
//     fetchContact()
    
// },[selectedContactID])

  return (

        <div className="contactcard">

            SOLO PUPPY

            {/* {Object.entries(contact).map(([key,value])=>{
              // if (key === 'id'){}
              if (key === 'company') {
                return <p>{key} : {value.name}</p>
              }
              if (key === 'address') {
                return <p>{key} : {value.street} {value.suite} {value.city} {value.zipcode} </p>
              }
              return <p>{key} : {value}</p>
                
            })} */}
          
        </div>
      );
}

export default SinglePlayer;