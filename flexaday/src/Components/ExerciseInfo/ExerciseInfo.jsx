import React, { useEffect, useState } from "react";

import "./ExerciseInfo.css";

import useHttp from "../../hooks/useHttp";

const ExerciseInfo = ({ type = "chest" }) => {
  const { isLoading, error, sendRequest } = useHttp();

  const [exerciseInfo, setExersiceInfo] = useState({});

  const transformData = (res) => {
    const workout = res.data[Math.floor(Math.random() * 163)];
    const workoutElement = (
      <div key={12}>
        <h1>Current Challenge:</h1>
        <p>
          <span>Complete 3 x 12 (sets and reps) of the {workout.name}</span>
        </p>
      </div>
    );

    setExersiceInfo(workoutElement);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "cc171d6d0amsh83b032c770272cdp142742jsn8fbf093b0592",
      },
    };
    sendRequest(options, transformData);
  }, []);

  return (
    (!isLoading && error && <div>{error}</div>) ||
    (!error && !isLoading && !Object.keys(exerciseInfo).length && (
      <div>No data found</div>
    )) ||
    (!error &&
      !isLoading &&
      exerciseInfo &&
      typeof exerciseInfo === "object" &&
      Object.keys(exerciseInfo).length && <div>{exerciseInfo}</div>)
  );
};

export default ExerciseInfo;
