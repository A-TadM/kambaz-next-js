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
import * as db from "../Database";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormControl from 'react-bootstrap/FormControl';


export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({_id: "0",
                                        name: "New Course",
                                        number: "New Number",
                                        startDate: "2023-09-10", 
                                        endDate: "2023-12-15",
                                        department: "New Department",
                                        credits: 4,
                                        description: "New Description",
                                        color: "black"});

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse ]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => { setCourses(
                                 courses.map((c) => { if (c._id === course._id) {
                                                        return course;
                                                      } else {
                                                        return c;
                                                      }})
                                          );};

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>

          <button className="btn btn-warning float-end me-2"
                  id="wd-update-course-click"
                  onClick={updateCourse}> Update </button>       
      </h5><br />
      <FormControl defaultValue={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} as="textarea" rows={3}
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            {courses.map((course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
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

                             <Button onClick={(event) => { event.preventDefault();
                                                           deleteCourse(course._id);
                                                         }} 
                                     className="btn-danger float-end"
                                     id="wd-delete-course-click"> Delete </Button>

                             <Button onClick={(event) => { event.preventDefault();
                                                           setCourse(course);
                                                         }}
                                     className="btn-warning me-2 float-end" 
                                     id="wd-edit-course-click" > Edit </Button>
        
                           </CardBody>
                      </Link>
                   </Card>
               </Col>
             ))}

        </Row>   
      </div>
    </div>
);}
