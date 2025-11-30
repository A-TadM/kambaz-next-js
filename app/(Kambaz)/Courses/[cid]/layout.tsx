"use client";

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";

//import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
//import { RootState } from "../../store";
import { useState, useEffect } from "react";

import * as client from "../client";


export default function CoursesLayout({ children }: { children: ReactNode; }) {
 const [clicked, setDone] = useState(true);
 const [course, setCourse] = useState({name: '',});

 const { cid } = useParams();
 //const { courses } = useSelector((state: RootState) => state.coursesReducer);
 //const course = courses.find((course: any) => course._id === cid);

 const fetchCourse = async () => {
   const foundCourse = await client.findCourseById(cid as string);
   setCourse(foundCourse[0]);
 }
 useEffect(() => {fetchCourse();}, []); 


 return (
   <div id="wd-courses">
     <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" onClick={() => setDone(!clicked)} /><Breadcrumb course={course} /></h2>
     <hr />
     <div className="d-flex">
       <div className="d-none d-md-block">
         <CourseNavigation params={String(cid)} display={clicked} />
       </div>
       <div className="flex-fill">
         {children}
       </div>       
      </div>
   </div>
);}
