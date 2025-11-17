"use client"


import { useState } from "react";
import { FormControl } from "react-bootstrap";
import FormCheck from 'react-bootstrap/FormCheck';


const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: "M101", name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`  

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`} target="_blank"> 
         Get Assignment
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`} target="_blank">
         Get Title
      </a><hr/>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary mb-1 float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`} target="_blank">
         Update Title </a>
      <FormControl className="w-50 mb-1" id="wd-assignment-title"
                   defaultValue={assignment.title} 
                   onChange={(e) => 
                             setAssignment({ ...assignment, title: e.target.value })}/>

      <a id="wd-update-assignment-score"
         className="btn btn-primary mb-1 float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`} target="_blank">
         Update Score </a>
      <FormControl className="w-50 mb-1" id="wd-assignment-score" type="number"
                   defaultValue={assignment.score} 
                   onChange={(e) => 
                             setAssignment({ ...assignment, score: parseInt(e.target.value) })}/> 

      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`} target="_blank">
         Update Completed </a>
      <FormCheck className="w-50" id="wd-assignment-completed" type="switch"
                 defaultChecked={assignment.completed} label="Completed" 
                 onChange={() => 
                           setAssignment({ ...assignment, completed: !(assignment.completed) })}/>                                              
      <br /><hr />


      <h4>Retrieving Module Object</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`} target="_blank"> 
         Get Module
      </a><hr/>

      <h4>Retrieving Module Property</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`} target="_blank">
         Get Module Name
      </a><hr/>

      <h4>Modifying Module Properies</h4>
      <a id="wd-update-module-name"
         className="btn btn-primary mb-1 float-end"
         href={`${MODULE_API_URL}/name/${module.name}`} target="_blank">
         Update Name </a>
      <FormControl className="mb-2" id="wd-module-name" style={{width: "270px"}}
                   defaultValue={module.name} 
                   onChange={(e) => 
                             setModule({ ...module, name: e.target.value })}/>

      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`} target="_blank">
         Update Description </a> 
      <FormControl id="wd-module-description" as="textarea" rows={2}
                   value={module.description} style={{width: "270px"}} 
                   onChange={(e) => 
                             setModule({ ...module, description: e.target.value })}/>                                         
      <hr />
    </div>
);}
