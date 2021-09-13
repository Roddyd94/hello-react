import React, { useState } from 'react';

const Counter2 = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        counter value is <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter2;