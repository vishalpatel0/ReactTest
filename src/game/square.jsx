import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  function clickFuntion() {
    setValue("x");
  }

  return (
    <button onClick={clickFuntion} className="square">
      {value}
    </button>
  );
}
