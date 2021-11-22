import React, { useEffect, useState } from "react";

import "./ExerciseInfo.css";

import useHttp from "../../hooks/useHttp";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";

import Modal from "../UI/Modal/Modal";

const ExerciseInfo = ({ type, index }) => {
  const { isLoading, error, sendRequest } = useHttp();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [exerciseInfo, setExersiceInfo] = useState({});
  const [workout, setWorkout] = useState({});
  const [complete, setComplete] = useState(false);

  const transformData = (res) => {
    const randomWorkoutIndex = Math.ceil(Math.random() * res.data.length - 1);
    const workout = res.data[randomWorkoutIndex];

    setWorkout(workout);

    const workoutElement = (
      <div
        id={`complete-pre${index}`}
        className={`${complete ? "complete" : ""}`}
        onClick={() => {
          document
            .getElementById(`complete-pre${index}`)
            .classList.toggle("complete");

          document
            .getElementById(`complete-after${index}`)
            .classList.toggle("complete-card");
        }}
      >
        <Card
          id={`complete-after${index}`}
          sx={{ minWidth: 275 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className={`workout-card ${complete ? "complete-card" : ""}`}
        >
          <div>
            <CardContent>
              <h3>{type[0].toUpperCase() + type.slice(1)}</h3>
              <Typography
                sx={{ fontSize: 22 }}
                color="text.secondary"
                gutterBottom
              >
                Current Challenge:
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontSize: 16 }}>
                Complete 3 x 12 (sets and reps) of the {workout.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen} size="small">
                Exercise Demo
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );

    setExersiceInfo(workoutElement);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${type}`,
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
      Object.keys(exerciseInfo).length && (
        <div className="exercise-info">
          <Modal
            image={workout.gifUrl}
            open={open}
            handleClose={handleClose}
          ></Modal>
          {exerciseInfo}
        </div>
      ))
  );
};

export default ExerciseInfo;
