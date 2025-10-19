"use client"


import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import FormLabel from 'react-bootstrap/FormLabel';
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";


export default function Assignments() {
  const { cid }  = useParams();
  const assignments = db.assignments;
  return (
  <div> 
    <AssignmentsControls /><br /><br /><br />

    <ListGroup className="rounded-0" id="wd-homeworks">
      <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-4" /> <b>ASSIGNMENTS</b> <AssignmentControlButtons />
        </div>
        <ListGroup className="wd-assignment-group rounded-0 wd-lesson">
          {assignments.filter((assignment) => assignment.course === cid)
              .map((assignment, index) => (
          
               <ListGroupItem key={index} className="wd-assignment-group-item p-3 ps-1 d-flex">
                 <BsGripVertical className="me-2 fs-1 pt-3" />
                 <MdOutlineAssignment className="me-2 fs-1 text-success pt-3"/>
                 <Container>
                   <Link href={`/Courses/${assignment.course}/Assignments/${assignment._id}`}
                         className="wd-assignment-link text-dark fs-4 text-decoration-none" >
                     <b>{assignment.title}</b>
                   </Link> <br/>
                   <FormLabel className="text-danger">Multiple Modules</FormLabel><FormLabel className="ps-1">| <b>Not availabe until</b> {assignment.availableDate} |</FormLabel> <br/>
                   <FormLabel><b>Due</b> {assignment.due} | {assignment.points} pts</FormLabel>
                 </Container>
                 <Container className="flex-fill pe-0"><LessonControlButtons /></Container>
                </ListGroupItem>
            ))
           }   
        </ListGroup> 

      </ListGroupItem>

      {/*<ListGroupItem className="wd-quizzes p-0 mb-5 fs-5 border-gray">
        <div className="wd-quizzes-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-4" /> <b>QUIZZES</b> <AssignmentControlButtons />
        </div>
        <ListGroup className="wd-quizze-group rounded-0 wd-lesson">
        </ListGroup>
      </ListGroupItem>

      <ListGroupItem className="wd-exams p-0 mb-5 fs-5 border-gray">
        <div className="wd-exams-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-4" /> <b>EXAMS</b> <AssignmentControlButtons />
        </div>
        <ListGroup className="wd-exam-group rounded-0 wd-lesson">
        </ListGroup>
      </ListGroupItem>

      <ListGroupItem className="wd-project p-0 mb-5 fs-5 border-gray">
        <div className="wd-projects-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-4" /> <b>PROJECTS</b> <AssignmentControlButtons />
        </div>
        <ListGroup className="wd-project-group rounded-0 wd-lesson">
        </ListGroup>
      </ListGroupItem>}*/}
    </ListGroup>

  </div>

);}
