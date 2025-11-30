"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormSelect from 'react-bootstrap/FormSelect';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import { useParams } from "next/navigation";
import Link from "next/link";

import { useState, useEffect } from "react";
import { setAssignments } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";

import * as client from "../client";


export default function AssignmentEditor() {
 const { cid, aid }  = useParams();
 const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 
 let newValue = {} as any;
 
 const text = "\nThe assignment is available online\n\n" +
              "Submit a link to the landing page of your Web application running on Netlify.\n\n" +
              "The landing page should include the following:\n\n" +
              "  *  Your full name and section\n" +
              "  *  Links to each of the lab assignments\n" +
              "  *  Link to the Kanbas application\n" +
              "  *  Links to all relevant source code repositories\n\n" +
              "The Kanbas application should include a link to navigate back to the landing page.\n";

 const [newAssignment, setNewAssignment] = useState(newValue);  
 const [newFlag, setNewFlag] = useState(false); 
 const dispatch = useDispatch();

 const onCreateAssignmentForCourse = async (newAssignmentValues: any) => {
   const newAssignment = await client.createAssignmentForCourse(cid as string, newAssignmentValues);
   dispatch(setAssignments([...assignments, newAssignment]));
 };

 const onUpdateAssignment = async (assignment: any) => {
   await client.updateAssignment(assignment);
   const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a );
   dispatch(setAssignments(newAssignments));
 };

 const fetchAssignment = async () => {
   const assignment = await client.findAssignmentById(aid as string);

   if (!(assignment)) { 
     setNewFlag(true);
     newValue = { title: "New Assignment", course: String(cid), availableDate: "", 
                  due: "", points: 100, des: "New Assignment Description", availableUntilDate: "" };
   } else {
     newValue = {...assignment, des: "Description", availableUntilDate: ""};
   } 

   setNewAssignment(newValue);
   
 };
 useEffect(() => {fetchAssignment();}, []);

  return (
    <div id="wd-assignments-editor">
      <Form>
          <FormLabel htmlFor="wd-name"> Assignment Name </FormLabel>
          <Row className="mb-3">
              <Col > 
                  <FormControl id="wd-name" defaultValue={newAssignment.title}
                               onChange={(e) => {setNewAssignment({...newAssignment, title: e.target.value});}} /> 
              </Col>
          </Row>
          <Row className="mb-3">
              <Col > 
                  <FormControl id="wd-description" as="textarea" rows={10} defaultValue={newAssignment.des}
                               onChange={(e) => {setNewAssignment({...newAssignment, des: e.target.value});}} /> 
              </Col>
          </Row>
          <Row className="mb-3">
              <FormLabel htmlFor="wd-points" column sm={{span: 1, offset: 1}}> Points </FormLabel>
              <Col sm={10}> <FormControl id="wd-points" type="number" defaultValue={newAssignment.points}
                                         onChange={(e) => {setNewAssignment({...newAssignment, points: parseInt(e.target.value)});}} /> 
              </Col>
          </Row>
          <Row className="mb-0">
              <FormLabel htmlFor="wd-group" column sm={{span: 1, offset: 1}}> Assignment Group </FormLabel>
              <Col sm={10}>
                  <FormSelect id="wd-group">
                     <option value="AS" defaultChecked>ASSIGNMENTS</option>
                     <option value="QS">QUIZZES</option>
                     <option value="ES">EXAMS</option>
                     <option value="PRIJ">PROJECT</option>
                  </FormSelect>
              </Col>   
          </Row>
          <Row className="mb-2">
              <FormLabel htmlFor="wd-display-grade-as" column sm={{span: 1, offset: 1}}> Display Grade as </FormLabel>
              <Col sm={10}>
                  <FormSelect id="wd-display-grade-as">
                     <option value="PERCENTAGE" defaultChecked>Percentage</option>
                     <option value="POINT">Point</option>
                     <option value="Letter">Letter</option>
                  </FormSelect>
              </Col>   
          </Row>
          <fieldset className="mb-3">
                 <Row>
                     <FormLabel htmlFor="wd-submission-type" column sm={{span: 1, offset: 1}}> Submission Type </FormLabel>
                     <Col sm={10} className="wd-assignment-percentage p-3 rounded-2">
                         <FormSelect id="wd-submission-type" className="mb-3 ms-1">
                            <option value="ONLINE" defaultChecked>Online</option>
                            <option value="ONPAPER">On Paper</option>
                         </FormSelect>
                         <FormLabel><b>Online Entry Options</b></FormLabel>
                         <FormCheck label="Test Entry" name="check-entry-option" id="wd-text-entry" className="mb-3" />
                         <FormCheck label="Website URL" name="check-entry-option" id="wd-website-url" defaultChecked className="mb-3" />
                         <FormCheck label="Media Recordings" name="check-entry-option" id="wd-media-recordings" className="mb-3" />
                         <FormCheck label="Student Annotation" name="check-entry-option" id="wd-student-annotation" className="mb-3" />
                         <FormCheck label="File Uploads" name="check-entry-option" id="wd-file-upload" className="mb-3" />
                     </Col>   
                 </Row>
          </fieldset>
          <fieldset className="mb-5">
                 <Row>
                     <FormLabel column sm={{span: 1, offset: 1}}> Assign </FormLabel>
                     <Col sm={10} className="wd-assignment-percentage p-3 rounded-2">
                         <FormLabel htmlFor="wd-assign-to" className="mb-1"><b>Assign to</b></FormLabel>
                         <FormControl id="wd-assign-to" defaultValue="Everyone" className="mb-2" />
                         <FormLabel htmlFor="wd-due-date"><b>Due</b></FormLabel> 
                         <FormControl id="wd-due-date" type="date" defaultValue={newAssignment.due?.substring(0, 10)} className="mb-2"
                                      onChange={(e) => {setNewAssignment({...newAssignment, due: e.target.value});}} />
                         <Row>
                          <Col xs={6}>
                              <FormLabel htmlFor="wd-available-from"><b>Available from</b></FormLabel>
                              <FormControl id="wd-available-from" type="date" defaultValue={newAssignment.availableDate?.substring(0, 10)}
                                           onChange={(e) => {setNewAssignment({...newAssignment, availableDate: e.target.value});}} />
                          </Col>
                          <Col xs={6}>
                              <FormLabel htmlFor="wd-available-until"><b>Until</b></FormLabel>
                              <FormControl id="wd-available-until" type="date" defaultValue={newAssignment.availableUntilDate?.substring(0, 10)}
                                           onChange={(e) => {setNewAssignment({...newAssignment, availableUntilDate: e.target.value});}} />
                          </Col>
                         </Row>
                     </Col>   
                 </Row>
          </fieldset>
          <Row><hr /></Row>
          
          { currentUser.role === "FACULTY" &&
          <Button variant="danger" size="sm" className="me-1 float-end" id="wd-save-btn"
                  onClick={() => {if (newFlag) {
                                    onCreateAssignmentForCourse(newAssignment);
                                  } else {
                                    onUpdateAssignment(newAssignment);}}}>
                 <Link href={`/Courses/${cid}/Assignments`} className='text-decoration-none text-white'>Save</Link> 
          </Button> }

          <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-cancel-btn">
                 <Link href={`/Courses/${cid}/Assignments`} className='text-decoration-none text-black'>Cancel</Link> 
          </Button>
      </Form>
    </div>
);}
