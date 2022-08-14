import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Day1, Day2 } from "./pages";

function App() {
  return (
    <div className="App w-screen min-h-screen flex flex-col">
      <ul className="flex justify-center space-x-4 p-4 text-white">
        <li>
          <NavLink to="/day1">Day 1 - 匯率兌換</NavLink>
        </li>
        <li>
          <NavLink to="/day2">Day 2 - TODOLIST</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/" element={<Day2 />} />
      </Routes>
    </div>
  );
}

export default App;
