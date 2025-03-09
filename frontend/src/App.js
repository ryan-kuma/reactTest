import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("api")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;