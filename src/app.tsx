import { useState } from "react";
// import { useCallback } from 'react';
import Child from "./child";

function App() {
  const [parentCount, setParentCount] = useState(0);
  const [child1Count, setChild1Count] = useState(0);
  const [child2Count, setChild2Count] = useState(0);
  const [child3Count, setChild3Count] = useState(0);

  console.log("Parent rendered");

  // Fix 1
  // const handleChild1Click = useCallback(() => {
  //   setChild1Count((prev) => prev + 1);
  // }, []);

  // const handleChild2Click = useCallback(() => {
  //   setChild2Count((prev) => prev + 1);
  // }, []);

  // const handleChild3Click = useCallback(() => {
  //   setChild3Count((prev) => prev + 1);
  // }, []);

  const handleChild1Click = () => {
    setChild1Count((prev) => prev + 1);
  };

  const handleChild2Click = () => {
    setChild2Count((prev) => prev + 1);
  };

  const handleChild3Click = () => {
    setChild3Count((prev) => prev + 1);
  };

  const handleParentClick = () => {
    setParentCount((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <h1>Count Application</h1>
      <div className="parent">
        <p>Parent Count: {parentCount}</p>
        <button onClick={handleParentClick}>Click Parent</button>
      </div>

      <div className="child-container">
        <Child id="1" count={child1Count} onClick={handleChild1Click} />
        <Child id="2" count={child2Count} onClick={handleChild2Click} />
        <Child id="3" count={child3Count} onClick={handleChild3Click} />
      </div>
    </div>
  );
}

export default App;
