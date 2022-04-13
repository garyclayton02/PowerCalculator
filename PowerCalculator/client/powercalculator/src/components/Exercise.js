import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Exercise = ({ exercise }) => {
    console.log("this is exercise in your exercise card component", exercise)
  return (
    <Card className="m-4">
      {/* <p className="text-left px-2">Posted by: {exercise.userProfile.name}</p> */}
      <CardImg top src={exercise.name} alt={exercise.id} />
      <CardBody>
        <p>
          <strong>{exercise.name}</strong>
        </p>
        <p>{exercise.id}</p>
      </CardBody>
    </Card>
  );
};

export default Exercise;