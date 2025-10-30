/* eslint-disable @typescript-eslint/no-explicit-any */


import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FormControl } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))} className="btn-success float-end"
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))} className="btn-warning float-end me-2"
              id="wd-update-todo-click"> Update </Button>
      <FormControl value={todo.title} className="w-50 float-end me-5"
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    </ListGroupItem>
);}
