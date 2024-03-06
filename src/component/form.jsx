import { useState } from "react";

export default function Form() {
  const [master, setMaster] = useState([]);
  const [myForm, setMyForm] = useState({ name: "", email: "", city: "" });

  let onSubmit = (e) => {
    e.preventDefault();
    if (myForm.name != "") {
      console.log(myForm);
      setMaster([...master, myForm]);
      setMyForm({ name: "", email: "", city: "" });
    }
  };

  let onDelet = (key) => {
    const newData = [...myForm];
    newData.splice(key, 1); // Remove one element at the specified index
    setMyForm(newData); // Update the state with the new array
  };

  let onInput = (e) => {
    let { name, value } = e.target;
    // console.log(name + " : " + value);
    setMyForm({ ...myForm, [name]: value });
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => onInput(e)}
          value={myForm.name}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => onInput(e)}
          value={myForm.email}
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => onInput(e)}
          value={myForm.city}
        />

        <button type="submit" className="btn btn-info">
          add
        </button>
      </form>
      {console.log(master)}

      {master.map((data, key) => (
        <div key={key} className="row mt-4">
          <div className="col-10">
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.city}</h1>
          </div>
          <div className="col-2">
            <button onClick={() => onDelet(key)}>X</button>
          </div>
        </div>
      ))}
    </>
  );
}
