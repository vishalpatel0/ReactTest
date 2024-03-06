import React, { useState } from "react";

function count() {
  // Initialize state with an object
  const [state, setState] = useState({
    counter: 0,
    data: [],
  });

  // Function to update counter
  const incrementCounter = () => {
    setState((prevState) => ({
      ...prevState, // Spread the previous state
      counter: prevState.counter + 1, // Update the counter
    }));
  };

  // Function to update data array
  const updateData = (newData) => {
    setState((prevState) => ({
      ...prevState, // Spread the previous state
      data: [...prevState.data, newData], // Update data array with new data
    }));
  };

  return (
    <div>
      <p>Counter: {state.counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={() => updateData("New Data")}>Update Data</button>
      <ul>
        {state.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default count;
