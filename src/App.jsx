import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label htmlFor="">Weight (ibs)</label>
              <input
                type="text"
                placeholder="Enter weight value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Height (in)</label>
              <input
                type="text"
                placeholder="Enter height value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <button type="submit" className="btn">
                Submit
              </button>
              <button className="btn btn-outline" onClick={reload}>
                Reload
              </button>
            </div>

            <div className="center">
              <h3>Your BMI is : {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
