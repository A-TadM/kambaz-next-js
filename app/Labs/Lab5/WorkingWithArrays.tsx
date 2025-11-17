"use client"

import { useState } from "react";
import { FormControl } from "react-bootstrap";
import FormCheck from 'react-bootstrap/FormCheck';


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({id: "1",
                                    title: "NodeJS Assignment",
                                    description: "Create a NodeJS server with ExpressJS",
                                    completed: false,});

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API} target="_blank">
        Get Todos </a><hr/>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`} target="_blank">
        Get Todo by ID
      </a>
      <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary"
         href={`${API}?completed=true`} target="_blank">
        Get Completed Todos
      </a><hr/>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-add-new-todo" className="btn btn-primary"
         href={`${API}/create`} target="_blank">
        Create Todo
      </a><hr/>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className="btn btn-primary float-end" 
         href={`${API}/${todo.id}/delete`} target="_blank">
        Remove Todo with ID = {todo.id} </a>
      <FormControl defaultValue={todo.id} className="w-50"  
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <hr/>

      <h4>Updating an Item in an Array</h4>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end"
         id="wd-modify-todo-title" target="_blank">
        Update Todo</a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <FormControl defaultValue={todo.title} className="w-50 float-start" id="wd-todo-title"
                   onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
      <br /><br />
      
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end"
         id="wd-modify-todo-completed" target="_blank">
        Update Todo Completed</a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>  
      <FormCheck className="w-25 float-start" id="wd-todo-completed" type="switch"
                 defaultChecked={todo.completed} label="Completed" 
                 onChange={() => 
                           setTodo({ ...todo, completed: !(todo.completed) })}/>
      <br /><br />                     
                           
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end"
         id="wd-modify-todo-description" target="_blank">
        Update Todo Description</a>
      <FormControl defaultValue={todo.id} className="float-start me-2" style={{width: "80px"}}
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <FormControl value={todo.description} className="float-start"
                   id="wd-todo-description" as="textarea" rows={2} style={{width: "240px"}} 
                   onChange={(e) => setTodo({ ...todo, description: e.target.value }) }/>
      <br /><br /><br />
      <hr />

  
    </div>
);}
