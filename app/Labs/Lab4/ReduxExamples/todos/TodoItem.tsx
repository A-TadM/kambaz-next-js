import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";


export default function TodoItem({ todo }: { todo: { id: string; title: string }; }) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id}>
      {todo.title}  
      <Button onClick={() => dispatch(deleteTodo(todo.id))} className="btn-danger float-end"
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => dispatch(setTodo(todo))} className="float-end me-2"
              id="wd-set-todo-click"> Edit </Button>  
    </ListGroupItem>
);}