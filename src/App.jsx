import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form>
            <div>
              <label htmlFor="">Weight (ibs)</label>
              <input
                type="text"
                placeholder="Enter weight value"
                value={weight}
              />
            </div>
            <div>
              <label htmlFor="">Height (in)</label>
              <input
                type="text"
                placeholder="Enter height value"
                value={height}
              />
            </div>

            <div>
              <button type="submit" className="btn">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-outline"
                onClick={reload}
              >
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
