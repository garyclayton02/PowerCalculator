import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ExerciseProvider } from "./providers/ExerciseProvider";
import ExerciseList from "./components/ExerciseList";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <div className="App">
      <Router>
        <ExerciseProvider>
          <ApplicationViews />
        </ExerciseProvider>
      </Router>
      
    </div>
  );
}

export default App;







