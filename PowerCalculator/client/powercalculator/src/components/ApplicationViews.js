import React from "react";
import { Routes, Route } from "react-router-dom";
import ExerciseList from "./ExerciseList";
import { ExerciseProvider } from "../providers/ExerciseProvider";
import {ExerciseForm} from "./ExerciseForm"


const ApplicationViews = () => {
  return (
  <ExerciseProvider>
    <Routes>
      <Route exact path="/" element= {<ExerciseList />} />

      <Route path="/exercises/add" element={<ExerciseForm />} />
      {/* // <Route path="/exercises/benchpress" element={<ExerciseForm />} />
      <Route path="/exercises/deadlift" element={<ExerciseForm />} />
      <Route path="/exercises/squat" element={<ExerciseForm />} /> */} 
     <Route path="/exercises/:id" element={<></>} />
    </Routes>
    </ExerciseProvider>
  );
};

export default ApplicationViews;