"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/dist/client/components/navigation";
import { useParams } from "next/navigation";
import * as client from "../../../client";
import { setQuestions } from "./reducer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../../store";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineQuestionMark } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { FaTrash } from "react-icons/fa";


export default function QuizEditorQuestions() {
    const { cid, qid }  = useParams();
    const { questions } = useSelector((state: RootState) => state.questionsReducer);

    const [type, setType] = useState("");
    const dispatch = useDispatch();

    const fetchQuestions = async () => {
       const questions = await client.findQuestionsForQuiz(qid as string);
       dispatch(setQuestions(questions));
     };
    
     useEffect(() => {fetchQuestions();}, [questions]);

     const filterQuestionsByType = async (type: string) => {
       setType(type);
       if (type) {
         const questions = await client.findQuestionsByType(qid as string, type);
         dispatch(setQuestions(questions));
       } else {
         fetchQuestions();
       }
     };

    const onDeleteQuestion = async (question: any) => {
      const quiz = await client.findQuizById(qid as string);
      const points = quiz.points;
      const numOfQs = quiz.numOfQs;

      const updatedQuiz = {...quiz, points: points - question.points, 
                                    numOfQs: numOfQs - 1}; 

      await client.updateQuiz(updatedQuiz);                              

      await client.deleteQuestion(qid as string, question._id);
      dispatch(setQuestions(questions.filter((q: any) => q._id !== question._id)));
    };


    return(
      <div>
        <div>
          <br />
          <select value={type} onChange={(e) => filterQuestionsByType(e.target.value)}
                  className="form-select float-start w-25 wd-select-type" >
            <option value="">All Types</option>   
            <option value="MULTIPLE">Multiple</option>
            <option value="T/F">True/False</option> 
            <option value="FILLINBLANK">Fill in a blank</option>
          </select>

          <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-add-question-btn"
                  onClick={() => {const pid = uuidv4();
                                  redirect(`/Courses/${cid}/Quizzes/${qid}/QuizEditor/Questions/${pid}`);}}>

                  <FaPlus style={{ bottom: "1px" }} /> New Question
          </Button><br /><br /><hr />
        </div>

        <div>
          <ListGroup className="wd-questions rounded-0 fs-5">
             <div className="wd-questions-title p-3 ps-2 bg-secondary">
               <GoTriangleDown className="me-2 fs-4" /><b>Questions</b>
             </div>

             {questions.map((question) => (
                <ListGroupItem key={question._id} className="wd-lesson p-3 ps-2 d-flex">
                  <MdOutlineQuestionMark className="text-success fs-2" />
                  <Container>
                    <Link href={`/Courses/${cid}/Quizzes/${qid}/QuizEditor/Questions/${question._id}`}
                          className="wd-question-link text-dark text-decoration-none" >
                      <b>{question.title}</b>
                    </Link> 
                  </Container>

                  <Container className="flex-fill">
                    <FaTrash id="wd-delete" className="text-danger mb-1 float-end" 
                             onClick={() => onDeleteQuestion(question)}/>                        
                  </Container>
                </ListGroupItem>))}

          </ListGroup>
        </div><hr />

        <Button variant="danger" size="sm" className="me-1 float-end" id="wd-save-btn">
               <Link href={`/Courses/${cid}/Quizzes/${qid}`} className='text-decoration-none text-white'>Save</Link> 
        </Button> 

        <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-cancel-btn">
               <Link href={`/Courses/${cid}/Quizzes`} className='text-decoration-none text-black'>Cancel</Link> 
        </Button>
      </div>
);}