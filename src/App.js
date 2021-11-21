import logo from "./logo.svg";
import "./App.css";
import ExerciseInfo from "./Components/ExerciseInfo/ExerciseInfo";
import SideBar from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <SideBar>
        <ExerciseInfo></ExerciseInfo>
      </SideBar>
    </div>
  );
}

export default App;
