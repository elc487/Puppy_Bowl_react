import { useState } from "react"


const NewPlayerForm = () =>{
const [name, setName] = useState("")
const [breed, setBreed] = useState("")
const [status, setStatus] = useState("Bench")
const [image, setImage] = useState("")
const [teamId, setTeamId] = useState("")

const [error, setError] = useState(null)

//eventhandler

async function handleSubmit(e){
    e.preventDefault()
    // console.log('This is working')
    try { 
        const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,password})
            
        })
        const result = await res.json()

        setToken(result.token)
        console.log(token)
        console.log(result)
    } catch (error) {
        setError(error.message);
    }
}

    return (
        <section>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Puppy Name:{" "}
                    <input 
                        value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}
                        
                        required
                        />
                </label>
                <label>
                    Breed:{" "}
                    <input 
                        value={breed} onChange={(e) => {
                            setBreed(e.target.value)
                        }}
                        
                        required
                        
                        />
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>                
                </label>
                <label>
                    Puppy Image:{" "}
                    <input 
                        value={image} onChange={(e) => {
                            setImage(e.target.value)
                        }}
                        
                        />
                </label>
                <label>
                   Team :{" "}
                    <input 
                        value={teamId} onChange={(e) => {
                            setTeamId(e.target.value)
                        }}
                        required
                        />
                </label>
                <button>Submit</button>
            </form>
        </section>
    )
}
export default NewPlayerForm