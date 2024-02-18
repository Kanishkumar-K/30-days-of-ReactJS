import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p><br />
      <button style={{backgroundColor:"#0dd943"}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseState;
