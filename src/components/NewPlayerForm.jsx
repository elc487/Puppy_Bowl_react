import { useForm } from "react-hook-form"
import { useAddPlayerMutation } from "../API/puppyBowlApi"
// setup inputform with default valueof our cohort id according to the docs and if the image isnt provided the default will give them one. The API didnt take my first inputs so this was the best way forward for me
const NewPlayerForm = () =>{
const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
} = useForm({defaultValues:{teamId: 7, imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"}})
const [addPlayer,isLoading] = useAddPlayerMutation()

// function handleChange(e){
//     setForm({
//         ...form,
//         [e.target.id]: e.target.value,
//     })
// };

//eventhandler

async function onSubmit(data){
    console.log(`You added ${data.name} to the Puppy Bowl`)
    await addPlayer(data)
    reset()
    }

    return (
        <section>
            <h2>Sign Up</h2>
            <fieldset >
                <legend> Add Puppy to Roster </legend>
                <label>
                    Puppy Name:{" "}
                    <input 
                        {...register("name", {
                            required: "Name is required"
                        })}
                        />
                </label>
                <label>
                    Breed:
                    <input
                    {...register("breed", {
                        required: "Breed is required"
                    })}
                        />
                </label>
                <label>
                    Status:
                    <select
                    {...register('status')}
                    >
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>                
                </label>
                <label>
                    Puppy Image:{" "}
                    <input 
                    {...register("imageUrl")}
                    />
                </label>
                
                <button 
                disabled={isSubmitting} onClick={handleSubmit(onSubmit)} type="submit">Submit</button>
            </fieldset>
        </section>
    )
}
export default NewPlayerForm