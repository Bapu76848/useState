import { useState } from "react";
import "./styles.css";

let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
export default function App() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(arr[Math.floor(Math.random() * arr.length)]);
  };

  return (
    <div className="App">
      <h2>{value}</h2>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}
