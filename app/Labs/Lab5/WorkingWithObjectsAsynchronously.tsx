"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useEffect, useState } from "react";
import * as client from "./client";
import { FormControl } from "react-bootstrap";


export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };
  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };


  useEffect(() => {fetchAssignment();}, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <FormControl defaultValue={assignment.title} className="mb-2"
                   onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } />

      <FormControl as="textarea" rows={3} value={assignment.description} className="mb-2"
                   onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }/>

      <input defaultValue={assignment.due} className="form-control mb-2" 
             onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} type="date" />

      <div className="form-check form-switch mb-2">
        <input defaultChecked={assignment.completed}
               className="form-check-input" 
               onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked }) }
               type="checkbox" id="wd-completed" />
        <label className="form-check-label" htmlFor="wd-completed"> Completed </label>
      </div>

      
      <button className="btn btn-primary mb-1" onClick={() => updateTitle(assignment.title)} >
        Update Title
      </button>

      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
);}
