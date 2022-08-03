import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Day1 from "./pages/Day1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Day1 />
    </div>
  );
}

export default App;
