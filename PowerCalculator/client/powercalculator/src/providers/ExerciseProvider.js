import React, { useState } from "react";

export const ExerciseContext = React.createContext();

export const ExerciseProvider = (props) => {
  const [exercises, setExercises] = useState([]);

  const getAllExercises = () => {
    return fetch("/api/exercise")
      .then((res) => res.json())
      .then(setExercises);
  };

  const addExercise = (exercise) => {
    return fetch("/api/exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });
  };

  return (
    <ExerciseContext.Provider value={{ exercises, getAllExercises, addExercise }}>
      {props.children}
    </ExerciseContext.Provider>
  );
};