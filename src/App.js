import React,{useReducer} from 'react';
import {Container,Row,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForms from './Components/TodoForms';
import Todos from './Components/Todos';

const App = () => {
  const [todos,dispatch] = useReducer(todoReducer,[])
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
      <h1>Todo App with Context API</h1>
        <Row>
          <Col className="offset-lg-3" lg="6" md="9">
            <TodoForms/>
            <Todos/>
          </Col>
          
          
        </Row>
        
        
        
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
