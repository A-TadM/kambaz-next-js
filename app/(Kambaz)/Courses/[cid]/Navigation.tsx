"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


export default function CourseNavigation({ params, display }: { params: string; display: boolean }) {
  const cid  = params;   
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People/Table"]; 
  const pathname = usePathname();
  return (

    <div id="wd-courses-navigation" className={`wd list-group fs-5 rounded-0 ${display ? "d-block" : "d-none"}`}>
      {links.map((link, index) => (
        <Link key={index} href={`/Courses/${cid}/${link}`} 
                          id={`wd-course-${link.toLowerCase()}-link`}
                          className={`list-group-item border-0
                           ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link === "People/Table" ? 'People' : link}
        </Link>))}

    </div>
  );}
    