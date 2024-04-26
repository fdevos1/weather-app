import { useState } from "react";
import "./style.css";

const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <p>Hello World</p>
        <div>
          <button onClick={() => setCount(() => count + 1)}>Count up +</button>
          <p>{count}</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
