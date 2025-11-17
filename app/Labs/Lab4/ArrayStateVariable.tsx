/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState } from "react";

import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);

 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };

 const { todos } = useSelector((state: any) => state.todosReducer);

 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variables</h2>
   <button onClick={addElement} className="btn btn-success mb-2">Add Element</button>
   <ul className="list-group mb-2">
    {array.map((item, index) => (
     <li key={index} className="list-group-item"><b className="fs-5">{item}</b>
        <button onClick={() => deleteElement(index)} className="btn btn-danger ms-5 float-end">Delete</button>
     </li>))
    }
   </ul>

   <ListGroup>
     {todos.map((todo: any) => 
                (<ListGroupItem key={todo.id}>
                   {todo.title}
                 </ListGroupItem>))}
   </ListGroup>
   
   <hr/></div>);}