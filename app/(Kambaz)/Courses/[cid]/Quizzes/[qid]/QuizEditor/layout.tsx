"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../../client";
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import Ban from "../../../Modules/Ban";
import GreenCheckmark from "../../../Modules/GreenCheckmark";
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


export default function QuizEditorLayout({ children }: { children: ReactNode; }) {
    const { qid }  = useParams();
    const [quiz, setQuiz] = useState<any>({});
    const pathname = usePathname();

    const fetchQuiz = async () => {
      const quiz = await client.findQuizById(qid as string);  
      setQuiz(quiz);
    };
    useEffect(() => {fetchQuiz();}, []);


    return(
      <div id="wd-quiz-editor">
            <FormLabel id="wd-status-label" className="float-end">{quiz.status}</FormLabel>
            {(quiz.status === "PUBLISHED") && (<FormLabel className="float-end fs-5"><GreenCheckmark /></FormLabel>)}  
            {(quiz.status === "UNPUBLISHED") && (<FormLabel className="float-end fs-5"><Ban /></FormLabel>)}     
            <FormLabel id="wd-points-value" className="me-3 float-end">{quiz.points as string}</FormLabel>
            <FormLabel id="wd-points-label" className="me-1 float-end">Points</FormLabel><br /><hr />

            <div>
              <div>
                <Nav variant="tabs">
                  <NavItem>
                    <NavLink href="Details" 
                             className={`nav-link ${pathname.includes("Details") ? "active" : "wd-quiz-editor"}`}>Details</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="Questions" 
                             className={`nav-link ${pathname.includes("Questions") ? "active" : "wd-quiz-editor"}`}>Questions</NavLink>
                  </NavItem>
                </Nav> 
              </div>
              <div>
                {children}
              </div>      
            </div>
      </div>  
);}