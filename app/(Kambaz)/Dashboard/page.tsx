"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import Link from "next/link";
{/*import Image from "next/image";*/}
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import Button from 'react-bootstrap/Button';

import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import FormControl from 'react-bootstrap/FormControl';
import { RootState } from "../store";

import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addNewEnrollment, deleteEnrollment } from "./reducer";


export default function Dashboard() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({_id: "0",
                                        name: "New Course",
                                        number: "New Number",
                                        startDate: "2023-09-10", 
                                        endDate: "2023-12-15",
                                        department: "New Department",
                                        credits: 4,
                                        description: "New Description",
                                        color: "black"});     
                                        
  const [allPublished, setAllPublished] = useState(false);                                      

  return (
    <div className="p-4" id="wd-dashboard">
       <Button onClick={() => setAllPublished(!allPublished)} 
               className="btn-primary float-end"
               id="wd-enrollments-click"> Enrollments </Button>

      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      { currentUser.role === "FACULTY" && <div>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>

          <button className="btn btn-warning float-end me-2"
                  id="wd-update-course-click"
                  onClick={() => dispatch(updateCourse(course))}> Update </button>       
      </h5><br />
      <FormControl defaultValue={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} as="textarea" rows={3}
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <hr /></div> }

      {/*<h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) => 
                                                                          enrollments.some( (enrollment) =>
                                                                          enrollment.user === currentUser._id &&
                                                                          enrollment.course === course._id)).length})</h2> <hr />*/}
      <div id="wd-dashboard-courses">

        
        <Row xs={1} md={5} className="g-4"> {/*enrolled courses*/}
            {courses
              .filter((course) => enrollments.some( (enrollment) =>
                                                     enrollment.user === currentUser._id &&
                                                     enrollment.course === course._id))
            .map((course: any) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "330px" }}>
                  <Card className={`border-${course.color} border-3`}>
                     <Link href={`/Courses/${course._id}`}
                           className="wd-dashboard-course-link text-decoration-none text-dark" >
                           <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                           <CardBody className="card-body">
                             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden text-primary">
                                        {course.name} </CardTitle>
                             <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                       {course.description} </CardText>
                             <Button variant="primary"> Go </Button>

                             { currentUser.role === "FACULTY" && 
                             <Button onClick={(event) => { event.preventDefault();
                                                           dispatch(deleteCourse(course._id));
                                                         }} 
                                     className="btn-danger float-end"
                                     id="wd-delete-course-click"> Delete </Button> }

                             { currentUser.role === "FACULTY" &&
                             <Button onClick={(event) => { event.preventDefault();
                                                           setCourse(course);
                                                         }}
                                     className="btn-warning me-1 float-end" 
                                     id="wd-edit-course-click" > Edit </Button> }


                             <Button onClick={(event) => { event.preventDefault();                      
                                                           dispatch(deleteEnrollment(
                                                                      enrollments.find((e) => 
                                                                                       ((e.course === course._id) &&
                                                                                        (e.user === currentUser._id)))?._id));
                                                         }} 
                                     className="btn-danger me-1 float-end"
                                     id="wd-unenroll-course-click"> Unenroll </Button>                
        
                           </CardBody>
                      </Link>
                   </Card>
               </Col>
             ))}

        </Row> 

        { allPublished && 
        <Row xs={1} md={5} className="g-4 mt-3"> {/*unenrolled courses*/}
            {courses.filter(course => 
                            !(courses.filter((course) => enrollments.some( (enrollment) =>
                                                         enrollment.user === currentUser._id &&
                                                         enrollment.course === course._id))).includes(course))
            .map((course: any) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "330px" }}>
                  <Card className={`border-${course.color} border-3`}>
                     
                           
                           <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                           <CardBody className="card-body">
                             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden text-primary">
                                        {course.name} </CardTitle>
                             <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                       {course.description} </CardText>
                             
                             <Button onClick={(event) => { event.preventDefault();
                                                           dispatch(addNewEnrollment({user: currentUser._id,
                                                                                      course: course._id}));
                                                         }} 
                                     className="btn-success"
                                     id="wd-enroll-course-click2"> Enroll </Button>             
        
                           </CardBody>
                      
                   </Card>
               </Col>
             ))}

        </Row>} 
      </div>
    </div>
);}
