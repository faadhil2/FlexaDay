import logo from "./logo.svg";
import "./App.css";
import ExerciseInfo from "./Components/ExerciseInfo/ExerciseInfo";
import SideBar from "./Components/Header/Header";
import WeeklyCalendar from "./Components/WeeklyCalendar/WeeklyCalendar";

function App() {
  return (
    <div className="App">
      <SideBar>
        <ExerciseInfo></ExerciseInfo>
      </SideBar>
    <WeeklyCalendar></WeeklyCalendar>
    </div>
  );
}

export default App;
