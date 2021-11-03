import React,{useContext,useState} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext"
import { ADD_TODO } from '../context/action.types';
const Todoforms = () => {
    const [todoString,setTodoString]=useState("");
    const {dispatch} = useContext(TodoContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todoString===""){
            return alert("please enter a todo");
        }
        const todo = {
            todoString,
            id:v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        setTodoString("");
    }
    return (
        <div style={{position:"relative"}}>
            <Form onSubmit={handleSubmit} className="position-relative">
            <FormGroup>
                <InputGroup>
                    <Button 
                    variant="outline-secondary" 
                    id="button-addon1" 
                    color="warning"
                    type="submit"
                    >
                    Add
                    </Button>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value={todoString}
                    onChange={e=>{setTodoString(e.target.value)}}
                    />
                </InputGroup>
            </FormGroup>
        </Form>
        </div>
        
    );
}

export default Todoforms;
