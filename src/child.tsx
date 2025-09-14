import React from 'react';

interface ChildProps {
  id: string;
  count: number;
  onClick: () => void;
}

// Fix 2
// const Child = React.memo(({ id, count, onClick }: ChildProps) => {
const Child = ({ id, count, onClick }: ChildProps) => {
  console.log(`Child ${id} rendered`);

  return (
    <div className="child">
      <h3>Child {id}</h3>
      <p>Count: {count}</p>
      <button onClick={onClick}>Click Child {id}</button>
    </div>
  );
};
// });

export default Child;
