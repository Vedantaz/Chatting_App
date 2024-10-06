import { useState } from "react";
import Right from "./right/Right";
import Left from "./left/Left";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen">
        <Left></Left>
        <Right></Right>
      </div>
    </>
  );
}

export default App;
