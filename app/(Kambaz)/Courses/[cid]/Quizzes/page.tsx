"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { GoTriangleDown } from "react-icons/go";
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Ban from "../Modules/Ban";
import { useParams } from "next/navigation";
import * as client from "./client";
import { setQuizzes } from "./reducer";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import FormLabel from 'react-bootstrap/FormLabel';
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


export default function Quizzes() {
  const { cid }  = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const [publishedQuizzes, setPublishedQuizzes] = useState<any[]>([]);
  const dispatch = useDispatch();

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));

    setPublishedQuizzes(quizzes.filter((quiz: any) => quiz.status === "PUBLISHED"));
  };
  useEffect(() => {fetchQuizzes();}, []);

  const onUpdateQuiz = async (quiz: any) => {
    await client.updateQuiz(quiz);
    const newQuizzes = quizzes.map((q: any) => q._id === quiz._id ? quiz : q );
    dispatch(setQuizzes(newQuizzes));

    setPublishedQuizzes(quizzes.filter((quiz: any) => quiz.status === "PUBLISHED"));
  };

  const onDeleteQuiz = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(setQuizzes(quizzes.filter((q: any) => q._id !== quizId)));
    
    setPublishedQuizzes(quizzes.filter((quiz: any) => quiz.status === "PUBLISHED"));
  };

  const getOppositeStatus = (status: string) => {
    let oppositeStatus;
    if (status === "PUBLISHED") {
      oppositeStatus = "UNPUBLISHED";
    } else {
      oppositeStatus = "PUBLISHED"
    };

    return oppositeStatus;
  };

  const getMonthAndDay = (date: string) => {
    const month = date?.substring(5, 7)
    const day = date?.substring(8, 10)

    let monthString;
    switch (month) {
      case '01':
        monthString = 'Jan';
        break;
      case '02':
        monthString = 'Feb';
        break;
      case '03':
        monthString = 'Mar';
        break;
      case '04':
        monthString = 'Apr';
        break;
      case '05':
        monthString = 'May';
        break;
      case '06':
        monthString = 'Jun';
        break;
      case '07':
        monthString = 'Jul';
        break;
      case '08':
        monthString = 'Aug';
        break;
      case '09':
        monthString = 'Sep';
        break;
      case '10':
        monthString = 'Oct';
        break;
      case '11':
        monthString = 'Nov';
        break;    
      case '12':
        monthString = 'Dec';
        break;  
      default:   
        monthString = 'No month';
        break;                    
    }

    return " " + monthString + " " + day;
  }

  const getAvailability = (quiz: any) => {
    const date = new Date();
    const dateNumber = Number(`${date.getFullYear()}${date.getMonth() + 1 < 10 ? 0 : ""}${
                          date.getMonth() + 1}${date.getDate() < 10 ? 0 : ""}${date.getDate()}`);
             
    const availableDate = Number(quiz.availableDate?.substring(0, 10).replace(/-/g, ""));                      
    const availableUntilDate = Number(quiz.availableUntilDate?.substring(0, 10).replace(/-/g, ""));

    if (dateNumber > availableUntilDate) {
      return "Closed";
    } else {
      if ((availableDate <= dateNumber) && (dateNumber <= availableUntilDate)) {
        return "Available";
      } else {
        return getMonthAndDay(quiz.availableDate);
      }
    }
  }

  
  return (
    <div>
      { currentUser.role === "FACULTY" &&
       <div>
         <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-quiz-btn"
                 onClick={async () => {const quiz = {description: "",
                                                     points: 0,
                                                     numOfQs: 0,
                                                     showCorrectAnswers: new Date('2025-01-01'),
                                                     questions: []};

                                       const newQuiz = await client.createQuizForCourse(cid as string, quiz);
                                       dispatch(setQuizzes([...quizzes, newQuiz]));

                                       const qid = newQuiz._id;
                                       redirect(`/Courses/${cid}/Quizzes/${qid}`);}}>

                <FaPlus style={{ bottom: "1px" }} /> Quiz
         </Button><br /><br /><hr />

         { quizzes.length === 0 && 
          (<div id="wd-quiz-empty-message" 
                className="alert alert-danger mb-2 mt-2">Click + Quiz button to create a quiz!</div>) } 
       </div>}

       <ListGroup className="wd-quizzes rounded-0 fs-5">
          <div className="wd-quizzes-title p-3 ps-2 bg-secondary">
            <GoTriangleDown className="me-2 fs-4" /><b>Quizzes</b>
          </div>
        
          {currentUser.role === "FACULTY" &&
           quizzes.map((quiz) => (
             <ListGroupItem key={quiz._id} className="wd-lesson p-3 ps-2 d-flex">
               <RxRocket className="text-success fs-1 me-1" />
               <Container>
                 <Link href={`/Courses/${quiz.course}/Quizzes/${quiz._id}`}
                       className="wd-quiz-link text-dark text-decoration-none" >
                    <b>{quiz.title}</b>
                 </Link> 
                 <br/>
                 <FormLabel className="fs-6">
                           {(getAvailability(quiz) === "Closed") || 
                            (getAvailability(quiz) === "Available") ? 
                            <b>{getAvailability(quiz)}</b> : <span><b>Not available until</b>{getAvailability(quiz)}</span>}
                 </FormLabel>
                 <FormLabel className="fs-6">&nbsp;| <b>Due</b>{getMonthAndDay(quiz.due)} | {quiz.points} pts | {quiz.numOfQs} Questions</FormLabel>  
               </Container>

               <Container className="flex-fill">
                 <FormLabel id="wd-publish-unpublish-option" className="fs-6 float-end" 
                            onClick={() => {const oppositeStatus = getOppositeStatus(quiz.status); 
                                            onUpdateQuiz({ ...quiz, status: oppositeStatus });}}>{getOppositeStatus(quiz.status)}</FormLabel>  
                 <FaTrash id="wd-delete" className="text-danger me-3 mb-1 float-end" 
                          onClick={() => onDeleteQuiz(quiz._id)}/>  
                 <FaPencil id="wd-edit" className="me-3 float-end"
                           onClick={() => redirect(`/Courses/${quiz.course}/Quizzes/${quiz._id}`)}/>  

                  
                 {(quiz.status === "PUBLISHED") && (<FormLabel className="me-3 float-end"
                                                               onClick={() => {const oppositeStatus = getOppositeStatus("PUBLISHED"); 
                                                                               onUpdateQuiz({ ...quiz, status: oppositeStatus });}}><GreenCheckmark /></FormLabel>)}  
                 {(quiz.status === "UNPUBLISHED") && (<FormLabel className="me-3 float-end"
                                                                 onClick={() => {const oppositeStatus = getOppositeStatus("UNPUBLISHED"); 
                                                                                 onUpdateQuiz({ ...quiz, status: oppositeStatus });}}><Ban /></FormLabel>)}                                         
               </Container>
             </ListGroupItem>))}



          {currentUser.role === "STUDENT" &&
           publishedQuizzes.map((quiz) => (
             <ListGroupItem key={quiz._id} className="wd-lesson p-3 ps-2 d-flex">
               <RxRocket className="text-success fs-1 me-1" />
               <Container>
                 {/*<Link href={`/Courses/${quiz.course}/Quizzes/${quiz._id}`}
                       className="wd-quiz-link text-dark text-decoration-none" >*/}
                    <b>{quiz.title}</b>
                 {/*</Link>*/}
                 <br/>
                 <FormLabel className="fs-6">
                           {(getAvailability(quiz) === "Closed") || 
                            (getAvailability(quiz) === "Available") ? 
                            <b>{getAvailability(quiz)}</b> : <span><b>Not available until</b>{getAvailability(quiz)}</span>}
                 </FormLabel>
                 <FormLabel className="fs-6">&nbsp;| <b>Due</b>{getMonthAndDay(quiz.due)} | {quiz.points} pts | {quiz.numOfQs} Questions</FormLabel>  
               </Container>  
             </ListGroupItem> ))}   

       </ListGroup>  

    </div>
);}