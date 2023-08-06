import logo from "./logo.svg";
import "./App.css";
import DispalyTime from "./component/DispalyTime";
import { useState } from "react";
import Dropdown from "./component/Dropdown";

function App() {
  const [value, setValue] = useState("");
  console.log("setValue", value);
  return (
    <div className="App">
      <DispalyTime value={value} />
      <Dropdown setValue={setValue} />
    </div>
  );
}

export default App;
