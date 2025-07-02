import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-300 text-pink-300 p-4">
        <h2>heyyyyy</h2>
        <h1 className=" font-bold align-middle justify-center">
          {" "}
          Baby Boy Blues...
        </h1>
      </div>
    </>
  );
}

export default App;
