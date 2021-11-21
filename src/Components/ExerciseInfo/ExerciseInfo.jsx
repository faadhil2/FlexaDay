import React, { useEffect, useState } from "react";

import "./ExerciseInfo.css";

import useHttp from "../../hooks/useHttp";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "../UI/Modal/Modal";

const ExerciseInfo = ({ type = "chest" }) => {
  const { isLoading, error, sendRequest } = useHttp();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [exerciseInfo, setExersiceInfo] = useState({});

  const transformData = (res) => {
    const workout = res.data[Math.floor(Math.random() * 163)];
    const workoutElement = (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
            Current Challenge:
          </Typography>
          <Typography variant="h5" component="div">
            Complete 3 x 12 (sets and reps) of the {workout.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            Exercise Demo
          </Button>
        </CardActions>
      </Card>
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
      Object.keys(exerciseInfo).length && (
        <div className="exercise-info">
          <Modal open={open} handleClose={handleClose}></Modal>
          {exerciseInfo}
        </div>
      ))
  );
};

export default ExerciseInfo;
