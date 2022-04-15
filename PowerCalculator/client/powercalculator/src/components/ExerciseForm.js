import React, { useContext, useEffect, useState } from "react"
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { ExerciseContext } from "../providers/ExerciseProvider"

export const ExerciseForm = () => {
    const { exercises, addExercise, getAllExercises } = useContext(ExerciseContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [exercise, setExercise] = useState({

      exerciseId: 0,
      weight: 0,
      reps: 0

    });

    const [max, setMax] = useState(0)

    

    const navigate = useNavigate();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getAllExercises()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newExercise = { ...exercise }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newExercise[event.target.id] = event.target.value
      // update state
      setExercise(newExercise)
    }

    const handleClickSaveExercise = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

    
        addExercise(exercise)
        .then(() => navigate("/exercises"))
    }

    const handleClickCalculate = (event) => {
      event.preventDefault();
      console.log(exercise.reps)
      console.log(exercise.weight)
      

      var max = Math.round((100 * exercise.weight) / (101.3 - (2.67123 * exercise.reps)));
      setMax(max)
   
    }
      // var weight = 0 
      // var reps = 0
    
      
      

    return (
      <form className="exerciseForm">
          <h2 className="exerciseForm__title">One Rep Max Calculator</h2>
         
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Select an exercise: </label>
                  <select defaultValue={exercise.id} name="id" onChange={handleControlledInputChange} id="exerciseId" className="form-control" >
                      <option value="0">Select an Exercise</option>
                      {exercises.map(ex => (
                          <option key={ex.id} value={ex.id}>
                              {ex.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="weight">Weight: </label>
                  <input type="number" onChange={handleControlledInputChange} id="weight" name="weight"/>
                 
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="reps">Reps: </label>
                  <input type="number" onChange={handleControlledInputChange} id="reps" name="reps"/>
                 
              </div>
          </fieldset>
          <fieldset>
            {/* this button will calculate max results! */}
          <button className="btn btn-primary"
            onClick={handleClickCalculate}>
            Calculate Result
          </button>
          </fieldset>
          {/* max needs to be a p tag to display results */}
          <fieldset>
              <div className="form-group">
                  <label htmlFor="reps">Max: </label>
                  <p type="number" id="max" name="max">{max}</p>
                 
              </div>
          </fieldset>
          
      </form>
    )
}

