import React, { useState, useEffect } from "react";

function Use_Effect() {
  const [data, setData] = useState(["asdsa", "asdsad"]);

  //   // Use useEffect with a defined type for the effect's dependencies
  useEffect(() => {
    // Effect logic here
    setData("asda");
  }, []); // Dependency array

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Use_Effect;
