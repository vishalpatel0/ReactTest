export default function Test4({ users, user, setUser }) {
  function add() {
    setUser({ ...user, name: "mayur" });
  }
  // users = users.filter((data) => data.name != "kirti");
  return (
    <div>
      <button onClick={add}>click </button>
      {/* {Object.keys(user).map((key, index) => (
        <h1 key={key}>{user.key}</h1>
      ))}

      <div className="container bg-dark">
        {users.map((v, k) => (
          <li className="btn btn-info" key={k}>
            {v.name}
          </li>
        ))} */}
    </div>
  );
}
