import React from "react";
import CircularProgressBar from "./Components/CircularProgressBar";
function App() {
  const [value, setValue] = React.useState(0.5)
  return (
    <div className="App">
      <CircularProgressBar wid = {170} value = {value} setValue = {setValue}/>
    </div>
  );
}

export default App;
