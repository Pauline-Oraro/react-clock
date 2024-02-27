
import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  /* useState hook is used to keep track of the state */
  const [time, updateTime] = useState(new Date());
  /*useEffect is used to perform side effects like setting up an time interval to update the time every 1000 milliseconds*/
  useEffect(() => {
    /* repeatedly calls a function at a specified time interval */
    const timer = setInterval(() => {
      updateTime(new Date())
      /* update the time every second */
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>Digital clock</h1>
      <div className="container">
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default App;
