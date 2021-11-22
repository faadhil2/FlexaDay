import "./App.css";
import ExerciseInfo from "./Components/ExerciseInfo/ExerciseInfo";
import SideBar from "./Components/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <SideBar>
        <p>
          <em style={{ fontSize: "1.1rem", fontWeight: 600 }}>
            <FontAwesomeIcon size="sm" icon={faQuoteLeft} /> Flexaday challenges
            you daily with random exercises in all major muscle groups to help
            you achieve your fitness goals.{" "}
            <FontAwesomeIcon size="sm" icon={faQuoteRight} />
          </em>
        </p>
        <div className="side-bar_display">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "26px",
            }}
          >
            <div className="exercise-list">
              {[
                "back",
                "chest",
                "lower arms",
                "upper arms",
                "upper legs",
                "lower legs",
                "waist",
              ].map((el, index) => {
                return (
                  <ExerciseInfo
                    index={index}
                    type={el}
                    key={index}
                  ></ExerciseInfo>
                );
              })}
            </div>
            <Card sx={{ minWidth: 275, padding: "20px" }}>
              <div>
                <CardContent>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src="https://images.unsplash.com/photo-1530721733923-e2df89901503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="..."
                  />
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Tip of the day:
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 16 }}
                  >
                    Get Stronger!
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default App;
