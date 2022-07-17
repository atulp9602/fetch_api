import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import axios from "axios";

function App() {
  const [flag, setFlag] = useState(false);
  const [count, setCount]= useState(0);
  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Clicked Me
      </Button><br/>
      <Alert variant="primary">You clicked {count} times.</Alert>
      
    </>
  );
}

export default App;
