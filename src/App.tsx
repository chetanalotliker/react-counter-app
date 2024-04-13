import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [counter,setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter+1);
  }

  const handleDecrement = () => {
    setCounter(counter-1);
  }

  const setToZero = () =>{
    setCounter(0);
  }

  return (
    <div className="App">
      <Container>
      <h2>React Counter App</h2>
      <br/><br/>
      <Row>
        <Col><Button variant="primary" onClick={handleIncrement}>Increment</Button></Col>
        <Col><Button variant="primary" onClick={setToZero}>Set to Zero</Button></Col>
        <Col><Button variant="primary" onClick={handleDecrement}>Decrement</Button></Col>
      </Row>
      <br />
      <Row>
        <Col><h3>{counter}</h3></Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
