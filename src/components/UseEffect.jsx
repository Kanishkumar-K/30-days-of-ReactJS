import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const backgroundColor = counter % 2 === 0 ? 'lightblue' : 'lightgreen';

  const styles = {
    container: {
      backgroundColor: backgroundColor,
      padding: '20px',
      borderRadius: '5px',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'navy',
    },
    counter: {
      fontSize: '36px',
      marginTop: '20px',
    },
    button: {
      backgroundColor: 'orange',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Counter Component</h1>
      <p style={styles.counter}>Counter: {counter}</p>
      <button style={styles.button} onClick={handleIncrement}>Increment Counter</button>
    </div>
  );
};

export default MyComponent;
