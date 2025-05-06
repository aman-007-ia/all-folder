import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const submitHandler = () => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="px-4 rounded py-3 text-xl m-5"
          type="text"
          placeholder="Enter your name"
        />
        <button className="px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
