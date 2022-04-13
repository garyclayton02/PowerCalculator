import React, { useContext, useEffect } from "react";
import { ExerciseContext } from "../providers/ExerciseProvider";
import Exercise from "./Exercise";

const ExerciseList = () => {
  const { exercises, getAllExercises } = useContext(ExerciseContext);

  useEffect(() => {
    getAllExercises();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;





