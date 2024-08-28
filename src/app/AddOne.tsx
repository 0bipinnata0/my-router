import { useState } from "react";

const X = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((v) => v + 1)}>+1</button>
    </div>
  );
};

const AddOne = () => {
  return <X />;
};
export default AddOne;
